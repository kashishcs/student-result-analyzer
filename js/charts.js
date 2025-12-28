class ChartManager {
    constructor() {
        this.subjectChart = null;
        this.performanceChart = null;
    }

    createSubjectChart(subjects) {
        const ctx = document.getElementById('subjectChart');

        // Destroy existing chart if it exists
        if (this.subjectChart) {
            this.subjectChart.destroy();
        }

        const subjectNames = Object.keys(subjects);
        const marks = subjectNames.map(subject => subjects[subject].marks);
        const maxMarks = subjectNames.map(subject => subjects[subject].maxMarks);

        this.subjectChart = new Chart(ctx, {
            type: 'bar',
            data: {
                labels: subjectNames,
                datasets: [
                    {
                        label: 'Marks Obtained',
                        data: marks,
                        backgroundColor: 'rgba(102, 126, 234, 0.8)',
                        borderColor: 'rgba(102, 126, 234, 1)',
                        borderWidth: 2
                    },
                    {
                        label: 'Maximum Marks',
                        data: maxMarks,
                        backgroundColor: 'rgba(192, 192, 192, 0.3)',
                        borderColor: 'rgba(192, 192, 192, 0.5)',
                        borderWidth: 2
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'top'
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: { size: 14 },
                        bodyFont: { size: 13 }
                    }
                },
                scales: {
                    y: {
                        beginAtZero: true,
                        max: 100,
                        ticks: {
                            stepSize: 20
                        }
                    }
                }
            }
        });
    }

    createPerformanceChart(subjects) {
        const ctx = document.getElementById('performanceChart');

        // Destroy existing chart if it exists
        if (this.performanceChart) {
            this.performanceChart.destroy();
        }

        const subjectNames = Object.keys(subjects);
        const percentages = subjectNames.map(subject => {
            const marks = subjects[subject].marks;
            const maxMarks = subjects[subject].maxMarks;
            return ((marks / maxMarks) * 100).toFixed(1);
        });

        // Generate colors based on performance
        const colors = percentages.map(percentage => {
            if (percentage >= 90) return 'rgba(46, 204, 113, 0.8)';
            if (percentage >= 80) return 'rgba(52, 152, 219, 0.8)';
            if (percentage >= 70) return 'rgba(243, 156, 18, 0.8)';
            if (percentage >= 60) return 'rgba(230, 126, 34, 0.8)';
            return 'rgba(231, 76, 60, 0.8)';
        });

        this.performanceChart = new Chart(ctx, {
            type: 'doughnut',
            data: {
                labels: subjectNames,
                datasets: [{
                    label: 'Percentage',
                    data: percentages,
                    backgroundColor: colors,
                    borderColor: '#fff',
                    borderWidth: 2
                }]
            },
            options: {
                responsive: true,
                maintainAspectRatio: true,
                plugins: {
                    legend: {
                        display: true,
                        position: 'bottom'
                    },
                    tooltip: {
                        backgroundColor: 'rgba(0, 0, 0, 0.8)',
                        padding: 12,
                        titleFont: { size: 14 },
                        bodyFont: { size: 13 },
                        callbacks: {
                            label: function(context) {
                                return context.label + ': ' + context.parsed + '%';
                            }
                        }
                    }
                }
            }
        });
    }

    destroyCharts() {
        if (this.subjectChart) {
            this.subjectChart.destroy();
            this.subjectChart = null;
        }
        if (this.performanceChart) {
            this.performanceChart.destroy();
            this.performanceChart = null;
        }
    }
}
