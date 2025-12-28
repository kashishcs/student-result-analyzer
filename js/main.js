// main.js - Main Application Controller
document.addEventListener('DOMContentLoaded', function() {
    // Initialize managers
    const dataManager = new DataManager();
    const chartManager = new ChartManager();

    // DOM Elements
    const studentSelect = document.getElementById('studentSelect');
    const searchInput = document.getElementById('searchInput');
    const statsSection = document.getElementById('statsSection');
    const resultSection = document.getElementById('resultSection');
    const exportBtn = document.getElementById('exportBtn');

    // Initialize the application
    init();

    function init() {
        loadStudentDropdown();
        displayClassStatistics();
        setupEventListeners();
    }

    function loadStudentDropdown(students = null) {
        const studentList = students || dataManager.getAllStudents();
        studentSelect.innerHTML = '<option value="">-- Choose a Student --</option>';

        studentList.forEach(student => {
            const option = document.createElement('option');
            option.value = student.id;
            option.textContent = student.name;
            studentSelect.appendChild(option);
        });
    }

    function displayClassStatistics() {
        const students = dataManager.getAllStudents();

        // Calculate statistics
        const classAverage = Calculator.calculateClassAverage(students);
        const highest = Calculator.findHighestScorer(students);
        const lowest = Calculator.findLowestScorer(students);

        // Display statistics
        document.getElementById('classAverage').textContent = classAverage + '%';
        document.getElementById('highestScorer').textContent = `${highest.name} (${highest.percentage}%)`;
        document.getElementById('lowestScorer').textContent = `${lowest.name} (${lowest.percentage}%)`;

        // Show stats section
        statsSection.style.display = 'grid';
    }

    function displayStudentResult(student) {
        if (!student) return;

        // Calculate student metrics
        const totalMarks = Calculator.calculateTotalMarks(student.subjects);
        const maxMarks = Calculator.calculateMaxMarks(student.subjects);
        const percentage = Calculator.calculatePercentage(student.subjects);
        const grade = Calculator.calculateGrade(percentage);
        const analysis = Analytics.analyzePerformance(student);

        // Display basic information
        document.getElementById('studentName').textContent = student.name;
        document.getElementById('totalMarks').textContent = `${totalMarks} / ${maxMarks}`;
        document.getElementById('percentage').textContent = percentage + '%';
        document.getElementById('grade').textContent = grade;
        document.getElementById('attendance').textContent = student.attendance + '%';
        document.getElementById('performanceAnalysis').textContent = analysis;

        // Display subject-wise marks
        displaySubjectMarks(student.subjects);

        // Create charts
        chartManager.createSubjectChart(student.subjects);
        chartManager.createPerformanceChart(student.subjects);

        // Show result section with animation
        resultSection.style.display = 'block';
        resultSection.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }

    function displaySubjectMarks(subjects) {
        const marksGrid = document.getElementById('marksGrid');
        marksGrid.innerHTML = '';

        for (const subject in subjects) {
            const subjectData = subjects[subject];
            const percentage = ((subjectData.marks / subjectData.maxMarks) * 100).toFixed(1);

            const card = document.createElement('div');
            card.className = 'subject-card';
            card.innerHTML = `
                <div class="subject-name">${subject}</div>
                <div class="marks">${subjectData.marks}</div>
                <div class="max-marks">out of ${subjectData.maxMarks} (${percentage}%)</div>
            `;
            marksGrid.appendChild(card);
        }
    }

    function setupEventListeners() {
        // Student selection
        studentSelect.addEventListener('change', function() {
            const studentId = this.value;
            if (studentId) {
                const student = dataManager.getStudentById(studentId);
                displayStudentResult(student);
            } else {
                resultSection.style.display = 'none';
                chartManager.destroyCharts();
            }
        });

        // Search functionality
        searchInput.addEventListener('input', function() {
            const query = this.value;
            const filteredStudents = dataManager.searchStudents(query);
            loadStudentDropdown(filteredStudents);

            // If only one result, auto-select it
            if (filteredStudents.length === 1) {
                studentSelect.value = filteredStudents[0].id;
                displayStudentResult(filteredStudents[0]);
            }
        });

        // Export to PDF functionality
        exportBtn.addEventListener('click', function() {
            const studentId = studentSelect.value;
            if (studentId) {
                const student = dataManager.getStudentById(studentId);
                exportToPDF(student);
            }
        });
    }

    function exportToPDF(student) {
        // Create a printable version
        const percentage = Calculator.calculatePercentage(student.subjects);
        const grade = Calculator.calculateGrade(percentage);
        const totalMarks = Calculator.calculateTotalMarks(student.subjects);
        const maxMarks = Calculator.calculateMaxMarks(student.subjects);

        let content = `
========================================
STUDENT RESULT REPORT
========================================

Student Name: ${student.name}
Total Marks: ${totalMarks} / ${maxMarks}
Percentage: ${percentage}%
Grade: ${grade}
Attendance: ${student.attendance}%

========================================
SUBJECT-WISE PERFORMANCE
========================================

`;

        for (const subject in student.subjects) {
            const subjectData = student.subjects[subject];
            const subjectPercentage = ((subjectData.marks / subjectData.maxMarks) * 100).toFixed(1);
            content += `${subject}: ${subjectData.marks}/${subjectData.maxMarks} (${subjectPercentage}%)\n`;
        }

        content += `
========================================
PERFORMANCE ANALYSIS
========================================

${Analytics.analyzePerformance(student)}

========================================
Generated on: ${new Date().toLocaleDateString()} ${new Date().toLocaleTimeString()}
========================================
        `;

        // Create and download the file
        const blob = new Blob([content], { type: 'text/plain' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `${student.name.replace(/\s+/g, '_')}_Result.txt`;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        window.URL.revokeObjectURL(url);

        // Show success message
        alert('✅ Result exported successfully!');
    }
});
