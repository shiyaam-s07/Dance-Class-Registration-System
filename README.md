# Dance Class Registration System - BeatCraft Academy

A full-stack web application developed for **BeatCraft Academy** to manage student registrations, auditions, and class batch enrollments.

---

## 🚀 Tech Stack

- **Frontend:** HTML5, CSS3, JavaScript
- **Backend:** Java, Spring Boot, Spring Data JPA, RESTful API
- **Database:** MySQL
- **Build Tool:** Maven

---

## 📋 Features

- **Glassmorphism UI:** Modern theatre stage aesthetic with translucent frosted cards.
- **Client-Side Form Validation:** Validates required fields, 10-digit mobile numbers, and email formats.
- **REST API Integration:** Sends JSON payloads via JavaScript fetch() to Spring Boot on port 8080.
- **Relational Data Persistence:** Automatic entity mapping into MySQL via Spring Data JPA.

---

## 🛠️ Database Setup

Ensure MySQL is running, then run the following in MySQL Workbench:

```sql
CREATE DATABASE IF NOT EXISTS dance_academy;
USE dance_academy;