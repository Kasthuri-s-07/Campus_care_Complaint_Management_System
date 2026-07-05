# 🏫 CampusCare - Complaint Management System

A full-stack **Complaint Management System** developed using the **MERN Stack (MongoDB, Express.js, React.js, Node.js)** to streamline complaint registration, assignment, tracking, and resolution within an institution or organization.

The system provides **Role-Based Access Control (RBAC)** for **Users**, **Staff**, and **Administrators**, ensuring secure access to resources while maintaining an efficient complaint lifecycle.

---

# 📌 Table of Contents

- Project Overview
- Features
- System Architecture
- Technology Stack
- Project Structure
- Database Design
- Authentication & Authorization
- Complaint Workflow
- REST API Endpoints
- Installation
- Environment Variables
- Future Enhancements
- Author

---

# 📖 Project Overview

CampusCare is a centralized web application designed to replace manual complaint handling.

The application allows:

- Users to submit and monitor complaints
- Administrators to manage complaints and assign staff
- Staff members to resolve assigned complaints
- Secure role-based access using JWT authentication
- Report generation in PDF and CSV formats

The project follows a modular architecture using reusable React components and RESTful backend services.

---

# ✨ Key Features

## 👤 User Module

- User Registration
- Secure Login
- JWT Authentication
- Submit Complaints
- Track Complaint Status
- View Complaint History
- User Profile

---

## 👨‍💼 Administrator Module

- Dashboard Overview
- View All Complaints
- Assign Complaints to Staff
- View Registered Users
- Department Management
- Complaint Reports
- PDF Report Generation
- CSV Export

---

## 🛠 Staff Module

- Staff Login
- Dashboard
- View Assigned Complaints
- Update Complaint Status
- View Staff Profile

---

# 🔐 Security Features

- JWT Authentication
- Password Hashing using bcrypt
- Protected API Routes
- Role-Based Access Control
- Secure REST APIs
- Middleware-Based Authorization

---

# 🏗 System Architecture

```
                User / Staff / Admin
                         │
                         ▼
               React Frontend (Vite)
                         │
                Axios HTTP Requests
                         │
                         ▼
               Express REST API Server
                         │
        Authentication & Authorization
                         │
                         ▼
                 MongoDB Database
```

---

# 💻 Technology Stack

## Frontend

- React.js
- React Router DOM
- Axios
- Context API
- React Icons
- Chart.js

---

## Backend

- Node.js
- Express.js
- JWT
- bcrypt
- Mongoose

---

## Database

- MongoDB
- MongoDB Compass

---

## Reporting

- jsPDF
- jspdf-autotable
- File Saver

---

# 📁 Project Structure

```
Complaint-Management-System
│
├── backend
│   ├── config
│   ├── controllers
│   ├── middleware
│   ├── models
│   ├── routes
│   ├── server.js
│   └── package.json
│
├── frontend
│   ├── src
│   │   ├── api
│   │   ├── components
│   │   ├── context
│   │   ├── pages
│   │   ├── routes
│   │   ├── styles
│   │   └── App.jsx
│   │
│   └── package.json
│
└── README.md
```

---

# 🗄 Database Design

## Users Collection

| Field | Description |
|-------|-------------|
| _id | MongoDB ObjectId |
| userId | Generated User ID |
| name | User Name |
| email | Email Address |
| password | Encrypted Password |
| role | user / staff / admin |
| createdAt | Timestamp |

Example IDs

```
USR-2026-0001

ADM-2026-0001

STF-2026-0001
```

---

## Complaints Collection

| Field | Description |
|-------|-------------|
| complaintId | Generated Complaint ID |
| user | Complaint Owner |
| title | Complaint Title |
| description | Complaint Details |
| category | Complaint Category |
| location | Complaint Location |
| priority | Low / Medium / High / Critical |
| status | Complaint Status |
| assignedDepartment | Department |
| assignedStaff | Staff Member |
| createdAt | Timestamp |

Example

```
CMP-2026-000001
```

---

# 🔑 Authentication Flow

```
Register
    │
Password Hashing (bcrypt)
    │
MongoDB
    │
Login
    │
JWT Token
    │
Local Storage
    │
Protected Routes
```

Every protected API request is validated using JWT middleware before processing.

---

# 👥 Role-Based Access Control

## User

- Submit Complaint
- View Own Complaints
- Track Status
- View Profile

---

## Staff

- View Assigned Complaints
- Update Complaint Status
- View Profile

---

## Admin

- Dashboard
- View All Complaints
- Assign Staff
- View Users
- View Departments
- Generate Reports

---

# 🔄 Complaint Workflow

```
User

↓

Submit Complaint

↓

Pending

↓

Admin Reviews

↓

Assign Staff

↓

Assigned

↓

Staff Starts Work

↓

In Progress

↓

Resolved

↓

Closed
```

---

# 🌐 REST API Endpoints

## Authentication

```
POST   /api/auth/register

POST   /api/auth/login
```

---

## User APIs

```
GET    /api/user/profile

POST   /api/complaints

GET    /api/complaints/my
```

---

## Staff APIs

```
GET    /api/staff/complaints

PUT    /api/staff/complaints/:id/status
```

---

## Admin APIs

```
GET    /api/admin/dashboard

GET    /api/admin/complaints

GET    /api/admin/users

GET    /api/admin/staff

PUT    /api/admin/complaints/:id/assign
```

---

# 📊 Reporting Module

The reporting module provides:

- Complaint Summary
- Complaint Status Distribution
- Export Report as PDF
- Export Report as CSV

Reports are generated dynamically using complaint data stored in MongoDB.

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/yourusername/Campus_care_Complaint_Management_System.git
```

---

## Backend

```bash
cd backend

npm install

npm run dev
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

# ⚙ Environment Variables

Create

```
backend/.env
```

```
PORT=5000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

---

# 📷 Screenshots

- Login
- Register
- User Dashboard
- Staff Dashboard
- Admin Dashboard
- Submit Complaint
- Complaint Management
- Reports
- Users
- Departments
- Profile

---

# 🔮 Future Enhancements

- Email Notifications
- Complaint Timeline
- Mobile Application
- Image Upload
- Push Notifications
- Analytics Dashboard
- AI-Based Complaint Classification
- SMS Alerts

---

# 👨‍💻 Author

**Kasthuri S**

BE Computer Science and Engineering

Thiagarajar College of Engineering

**Siva Rathna Sri V**

BE Computer Science and Engineering

Thiagarajar College of Engineering

GitHub: https://github.com/Kasthuri-s-07
