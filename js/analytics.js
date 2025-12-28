class Analytics {
    static analyzePerformance(student) {
        const subjects = student.subjects;
        const strengths = [];
        const weaknesses = [];
        const improvements = [];

        for (const subject in subjects) {
            const marks = subjects[subject].marks;
            const maxMarks = subjects[subject].maxMarks;
            const percentage = (marks / maxMarks) * 100;

            if (percentage >= 85) {
                strengths.push(subject);
            } else if (percentage < 70) {
                weaknesses.push(subject);
            }
        }

        let analysis = "";

        // Overall Performance
        const overallPercentage = parseFloat(Calculator.calculatePercentage(subjects));
        if (overallPercentage >= 85) {
            analysis += "🌟 Outstanding performance! ";
        } else if (overallPercentage >= 75) {
            analysis += "👍 Good performance overall. ";
        } else if (overallPercentage >= 60) {
            analysis += "📈 Satisfactory performance with room for improvement. ";
        } else {
            analysis += "⚠️ Needs significant improvement. ";
        }

        // Strengths
        if (strengths.length > 0) {
            analysis += `Excellent performance in ${strengths.join(", ")}. `;
        }

        // Weaknesses
        if (weaknesses.length > 0) {
            analysis += `Needs improvement in ${weaknesses.join(", ")}. `;
        }

        // Attendance Analysis
        if (student.attendance >= 95) {
            analysis += "💯 Excellent attendance record. ";
        } else if (student.attendance >= 85) {
            analysis += "✅ Good attendance. ";
        } else if (student.attendance >= 75) {
            analysis += "⏰ Attendance needs improvement. ";
        } else {
            analysis += "🚨 Poor attendance - immediate attention required. ";
        }

        // Recommendations
        if (weaknesses.length > 0) {
            analysis += "Focus on strengthening weak areas through additional practice and tutoring.";
        } else if (overallPercentage >= 85) {
            analysis += "Keep up the excellent work and maintain consistency!";
        } else {
            analysis += "Regular study and consistent effort will help achieve better results.";
        }

        return analysis;
    }

    static getSubjectInsights(subjects) {
        const insights = [];

        for (const subject in subjects) {
            const marks = subjects[subject].marks;
            const maxMarks = subjects[subject].maxMarks;
            const percentage = (marks / maxMarks) * 100;

            let status = "";
            if (percentage >= 90) status = "Exceptional";
            else if (percentage >= 80) status = "Very Good";
            else if (percentage >= 70) status = "Good";
            else if (percentage >= 60) status = "Average";
            else if (percentage >= 50) status = "Below Average";
            else status = "Needs Attention";

            insights.push({
                subject: subject,
                marks: marks,
                maxMarks: maxMarks,
                percentage: percentage.toFixed(1),
                status: status
            });
        }

        return insights;
    }

    static getPerformanceLevel(percentage) {
        if (percentage >= 90) return "Outstanding";
        if (percentage >= 80) return "Excellent";
        if (percentage >= 70) return "Very Good";
        if (percentage >= 60) return "Good";
        if (percentage >= 50) return "Average";
        return "Needs Improvement";
    }
}
