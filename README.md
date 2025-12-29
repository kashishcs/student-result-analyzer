# Student Result Analyzer – Academic Performance Dashboard

A professional, interactive student performance analyzer built with vanilla JavaScript.
[![Demo: Live](https://img.shields.io/badge/demo-live-success)](https://kashishcs.github.io/student-result-analyzer/)
![License: MIT](https://img.shields.io/badge/license-MIT-blue)
[![Tech](https://img.shields.io/badge/tech-HTML%20%7C%20CSS%20%7C%20JavaScript)](https://developer.mozilla.org/en-US/docs/Web)

---

# Overview

Student Result Analyzer is a client-side academic dashboard that converts raw marks and attendance into clear insights, summary cards, and interactive charts. It is designed as a portfolio-grade Computer Science project showcasing data processing, UI engineering, and visualization.

Perfect for:
- Students building academic or portfolio projects
- Teachers who want a quick analysis tool for sample data
- Developers demonstrating front-end and analytics skills
- Anyone exploring result analysis and visualization

---

# Features

Core Result Analysis

- Preloaded dataset of multiple students with marks in core subjects and attendance
- Automatic metrics:
  - Total marks and maximum marks
  - Percentage calculation
  - Letter grades (A+ to F) based on percentage bands
  - Attendance percentage display
- Subject-wise cards showing marks, max marks, and per-subject percentage

 Insights and Class Statistics

- Performance analysis text:
  - Detects strong subjects (high percentage)
  - Flags weak subjects that need improvement
  - Adds attendance-based comments (excellent or needs improvement)
- Class overview:
  - Class average percentage
  - Highest scorer (name and percentage)
  - Lowest scorer (name and percentage)

# Visual Experience

- Bar chart comparing marks vs. max marks across subjects
- Doughnut chart visualizing percentage distribution per subject
- Responsive layout for desktop, tablet, and mobile
- Clean UI with cards, gradients, and subtle animations

# Interaction Features

- Student dropdown with all available students
- Search box to filter students by name in real time
- One-click export to download a formatted text report

---

# Architecture

Design Principles

- Separation of concerns: data, calculations, analytics, charts, and UI logic are modular
- Reusable utilities: analytics and calculation modules work with any compatible dataset
- Zero external frameworks: built using plain HTML, CSS, and JavaScript

# Module Structure
student-result-analyzer/
├── index.html # Main shell and layout
├── css/
│ └── style.css # Styling, layout, responsiveness
├── js/
│ ├── data.js # In-memory student dataset and helpers
│ ├── calculator.js # Totals, percentages, grades, class stats
│ ├── analytics.js # Performance insights and narratives
│ ├── charts.js # Chart.js bar and doughnut charts
│ └── main.js # App bootstrap, events, DOM updates
└── README.md # Project documentation

---

# How It Works

1. Load data  
   Student data is loaded from `data.js` using helper methods.

2. Student selection  
   `main.js` listens to dropdown changes and fetches the selected student.

3. Metric computation  
   `calculator.js` calculates totals, percentages, grades, and class statistics.

4. Insight generation  
   `analytics.js` analyzes subject performance and attendance to generate summaries.

5. UI and chart rendering  
   `main.js` updates cards and triggers chart rendering via `charts.js`.

6. Export  
   A text report is generated and downloaded on export action.

---

# Getting Started

# View Online

Live demo:  
https://kashishcs.github.io/student-result-analyzer/


Visit:  
http://localhost:8000

---

# What This Project Demonstrates

- Clean, modular JavaScript architecture
- Academic data modeling and analysis
- Chart.js integration for interactive visualization
- Static site deployment using GitHub Pages
- Portfolio-ready UI and documentation

---

# Key Learnings

- Designing modular JavaScript without frameworks
- Structuring data models for academic analytics
- Converting raw numerical data into meaningful insights
- Managing state and UI updates in a client-side application
- Visualizing data effectively using Chart.js

---

# Future Enhancements

- Backend API with Node.js and Express
- CSV or Excel result upload
- Role-based access for teachers and students
- PDF export with styled reports
- Multi-class and year-wise performance trends

---

# Author

Kashish  
Aspiring Computer Science developer focused on algorithms, data interpretation, and production-ready front-end projects.

GitHub: https://github.com/kashishcs

---

# License

This project is released under the MIT License. 


