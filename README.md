# Dance Class Registration System - BeatCraft Academy

A full-stack web application developed for **BeatCraft Academy** to manage student registrations, auditions, and class batch enrollments with client-side form validation and relational database persistence.

---

## 🌐 Live Frontend Preview

Test the UI and client-side form validation directly in your browser without downloading any files:

👉 **[Click Here to Open Live Demo](https://htmlpreview.github.io/?https://github.com/shiyaam-s07/Dance-Class-Registration-System/blob/main/dance-frontend/index.html)**

---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3 (Glassmorphism & Responsive Design), JavaScript (ES6+ Form Validation)
- **Backend:** Java 17+, Spring Boot 3.x, Spring Data JPA, RESTful API
- **Database:** MySQL
- **Build Tool:** Maven

---

## 📋 Features

- **Glassmorphism UI:** Modern theatre stage aesthetic with translucent frosted cards, backdrop blur, and responsive layouts.
- **Client-Side Form Validation:** Real-time JavaScript checks verifying required inputs, 10-digit mobile numbers, and valid email syntax before submission.
- **REST API Integration:** Asynchronous JavaScript fetch() requests delivering JSON payloads to Spring Boot on port 8080.
- **Relational Data Persistence:** Automatic table mapping and record persistence into MySQL using Spring Data JPA.

---

## 📁 Project Structure

```text
Dance-Class-Registration-System/
├── dance-frontend/
│   ├── index.html        # Registration page structure
│   ├── style.css         # Glassmorphism styling and theme
│   ├── script.js         # Input validation and API integration
│   └── bg-dance.png      # Background graphic
├── dance-backend/
│   ├── src/              # Spring Boot application code and entity mapping
│   └── pom.xml           # Maven project dependencies
└── README.md             # Project documentation
```
---

## 🛠️ Database Setup

Ensure MySQL is running, then run the following in MySQL Workbench:

```sql
CREATE DATABASE IF NOT EXISTS dance_academy;
USE dance_academy;
```
