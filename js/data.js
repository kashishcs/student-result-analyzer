class DataManager {
    constructor() {
        this.students = [
            {
                id: 1,
                name: "Aarav Sharma",
                subjects: {
                    "Mathematics": { marks: 92, maxMarks: 100 },
                    "Physics": { marks: 88, maxMarks: 100 },
                    "Chemistry": { marks: 85, maxMarks: 100 },
                    "English": { marks: 78, maxMarks: 100 },
                    "Computer Science": { marks: 95, maxMarks: 100 }
                },
                attendance: 94
            },
            {
                id: 2,
                name: "Priya Patel",
                subjects: {
                    "Mathematics": { marks: 78, maxMarks: 100 },
                    "Physics": { marks: 82, maxMarks: 100 },
                    "Chemistry": { marks: 88, maxMarks: 100 },
                    "English": { marks: 92, maxMarks: 100 },
                    "Computer Science": { marks: 85, maxMarks: 100 }
                },
                attendance: 96
            },
            {
                id: 3,
                name: "Rohan Verma",
                subjects: {
                    "Mathematics": { marks: 65, maxMarks: 100 },
                    "Physics": { marks: 70, maxMarks: 100 },
                    "Chemistry": { marks: 68, maxMarks: 100 },
                    "English": { marks: 75, maxMarks: 100 },
                    "Computer Science": { marks: 72, maxMarks: 100 }
                },
                attendance: 88
            },
            {
                id: 4,
                name: "Ananya Singh",
                subjects: {
                    "Mathematics": { marks: 95, maxMarks: 100 },
                    "Physics": { marks: 93, maxMarks: 100 },
                    "Chemistry": { marks: 96, maxMarks: 100 },
                    "English": { marks: 89, maxMarks: 100 },
                    "Computer Science": { marks: 98, maxMarks: 100 }
                },
                attendance: 98
            },
            {
                id: 5,
                name: "Arjun Gupta",
                subjects: {
                    "Mathematics": { marks: 72, maxMarks: 100 },
                    "Physics": { marks: 75, maxMarks: 100 },
                    "Chemistry": { marks: 80, maxMarks: 100 },
                    "English": { marks: 82, maxMarks: 100 },
                    "Computer Science": { marks: 78, maxMarks: 100 }
                },
                attendance: 90
            }
        ];
    }

    getAllStudents() {
        return this.students;
    }

    getStudentById(id) {
        return this.students.find(student => student.id === parseInt(id));
    }

    getStudentByName(name) {
        return this.students.find(student => 
            student.name.toLowerCase().includes(name.toLowerCase())
        );
    }

    searchStudents(query) {
        if (!query) return this.students;
        return this.students.filter(student =>
            student.name.toLowerCase().includes(query.toLowerCase())
        );
    }
}
