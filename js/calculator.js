class Calculator {
    static calculateTotalMarks(subjects) {
        let total = 0;
        for (const subject in subjects) {
            total += subjects[subject].marks;
        }
        return total;
    }

    static calculateMaxMarks(subjects) {
        let maxTotal = 0;
        for (const subject in subjects) {
            maxTotal += subjects[subject].maxMarks;
        }
        return maxTotal;
    }

    static calculatePercentage(subjects) {
        const total = this.calculateTotalMarks(subjects);
        const maxTotal = this.calculateMaxMarks(subjects);
        return ((total / maxTotal) * 100).toFixed(2);
    }

    static calculateGrade(percentage) {
        if (percentage >= 90) return "A+";
        if (percentage >= 80) return "A";
        if (percentage >= 70) return "B+";
        if (percentage >= 60) return "B";
        if (percentage >= 50) return "C";
        if (percentage >= 40) return "D";
        return "F";
    }

    static getGradeColor(grade) {
        const colors = {
            "A+": "#2ecc71",
            "A": "#27ae60",
            "B+": "#3498db",
            "B": "#2980b9",
            "C": "#f39c12",
            "D": "#e67e22",
            "F": "#e74c3c"
        };
        return colors[grade] || "#95a5a6";
    }

    static calculateClassAverage(students) {
        let totalPercentage = 0;
        students.forEach(student => {
            const percentage = parseFloat(this.calculatePercentage(student.subjects));
            totalPercentage += percentage;
        });
        return (totalPercentage / students.length).toFixed(2);
    }

    static findHighestScorer(students) {
        let highest = students[0];
        let highestPercentage = parseFloat(this.calculatePercentage(highest.subjects));

        students.forEach(student => {
            const percentage = parseFloat(this.calculatePercentage(student.subjects));
            if (percentage > highestPercentage) {
                highest = student;
                highestPercentage = percentage;
            }
        });

        return {
            name: highest.name,
            percentage: highestPercentage
        };
    }

    static findLowestScorer(students) {
        let lowest = students[0];
        let lowestPercentage = parseFloat(this.calculatePercentage(lowest.subjects));

        students.forEach(student => {
            const percentage = parseFloat(this.calculatePercentage(student.subjects));
            if (percentage < lowestPercentage) {
                lowest = student;
                lowestPercentage = percentage;
            }
        });

        return {
            name: lowest.name,
            percentage: lowestPercentage
        };
    }
}
