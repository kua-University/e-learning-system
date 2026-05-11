# E-Learning System

## Student Information

* **Name:** Rahel Tewelde
* **ID:** ugr/188587/16
* **Course:** Software Architecture and Design
* **Project Title:** E-Learning System
* **Submission Date:** 03/09/2018 EC

---

# 📌 Project Overview

The E-Learning System is a full-stack web application developed to support online learning activities such as user authentication, course management, enrollments, and assessments.

The project demonstrates modern software engineering concepts including:

* Layered Architecture
* RESTful APIs
* Authentication Systems
* Docker Containerization
* Redis Caching
* Database Integration
* DevOps Practices

---

# 🚀 Technologies Used

## Frontend

* React.js
* React Router DOM
* Axios
* CSS3

## Backend

* Node.js
* Express.js
* SQLite3
* Redis

## DevOps & Deployment

* Docker
* Docker Compose

---

# 🏗️ System Architecture

```text
Client (React Frontend)
        ↓
REST API (Express Backend)
        ↓
Middleware Layer
        ↓
Redis Cache Layer
        ↓
SQLite Database
```

---

# ✨ Main Features

## Authentication Module

* User Registration
* User Login
* Logout Functionality
* Protected Routes

## Course Module

* View Available Courses
* Enroll in Courses
* Course Data Retrieval

## Assessment Module

* View Assessments
* Assessment API Integration

## Redis Caching

* Course data caching
* Reduced database load
* Faster response time

## Docker Support

* Frontend Container
* Backend Container
* Redis Container

---

# 🔐 Middleware Used

## Authentication Middleware

Used to protect internal routes and verify user access.

---

# 🧠 Redis Caching Workflow

```text
First Request:
SQLite Database → Redis Cache

Next Requests:
Redis Cache → Client
```

### Benefits

* Improved performance
* Faster API responses
* Reduced database queries
* Better scalability

---

# 🐳 Docker Integration

Docker was used to containerize the application services.

## Containers

* Frontend Container
* Backend Container
* Redis Container

Docker Compose was used to orchestrate all services together.

---

# ⚙️ Environment Setup

## Required Software

Install the following before running the project:
* vs code
* Node.js
* npm
* Docker Desktop
* Git

---

# ▶️ How to Run the Project


---

# ▶️ Backend Setup

## Install Dependencies

```bash
cd backend
npm install
```

## Initialize Database

```bash
node initDB.js
```

## Run Backend Server

```bash
node server.js
```

Backend runs on:

```text
http://localhost:5000
```

---

# ▶️ Frontend Setup

## Install Dependencies

```bash
cd frontend
npm install
```

## Run Frontend

```bash
npm start
```

Frontend runs on:

```text
http://localhost:3000
```

---

# 🐳 Running with Docker

Go to the DevOps directory:

```bash
cd devops
```

Run Docker Compose:

```bash
docker-compose up --build
```

---

# 📡 API Endpoints

## Authentication

| Method | Endpoint           | Description   |
| ------ | ------------------ | ------------- |
| POST   | /api/auth/register | Register user |
| POST   | /api/auth/login    | Login user    |

---

## Courses

| Method | Endpoint     | Description     |
| ------ | ------------ | --------------- |
| GET    | /api/courses | Get all courses |
| POST   | /api/courses | Add new course  |

---

## Enrollments

| Method | Endpoint                    | Description          |
| ------ | --------------------------- | -------------------- |
| POST   | /api/enrollments            | Enroll in course     |
| GET    | /api/enrollments/my/:userId | Get enrolled courses |

---

## Assessments

| Method | Endpoint         | Description     |
| ------ | ---------------- | --------------- |
| GET    | /api/assessments | Get assessments |
| POST   | /api/assessments | Add assessment  |

---

# 📘 Sample Courses

* Advanced Database
* Machine Learning
* Cloud Computing
* Software Architecture and Design
* Computer Networks

---

# 🧪 Testing

The following components were tested:

* User authentication
* Course enrollment
* SQLite database operations
* Redis caching
* Docker container execution
* API communication

---

# 📈 Future Improvements

* JWT Authentication
* Password Encryption
* Role-Based Access Control
* Admin Dashboard
* Assignment Submission
* Real-time Notifications
* Cloud Deployment

---

# 📄 Conclusion

The E-Learning System demonstrates the integration of frontend development, backend APIs, database systems, Redis caching, Docker containerization, and software architecture principles into a complete full-stack application.

This project fulfills the requirements of the Software Architecture and Design course by applying practical architectural and development techniques.
