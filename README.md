# D SPRING — Salon Management System

A modern salon management web application designed for **D SPRING Unisex Salon**, built to streamline customer visits, service selection, staff tracking, and customer feedback.

The project is being developed as a full-stack application using React, Node.js, Express, PostgreSQL, and Prisma.

---

## ✨ Overview

D SPRING aims to simplify salon operations through a clean, intuitive dashboard where salon staff can record customer visits, select the services performed, calculate estimated bills, and capture customer feedback.

The application is currently in its **frontend prototype and backend setup phase**, with database integration planned next.

## 🚀 Features

### Customer Visit Management
- Multi-step customer visit workflow.
- Customer name, phone number, and optional email collection.
- Staff member selection.
- Service selection with prices.
- Automatic estimated bill calculation.
- Customer experience ratings from 1 to 5 stars.
- Optional written feedback.
- Visit summary and completion screen.

### Service Management
- Services organized into categories.
- Search services by name.
- Filter services by category.
- Select multiple services per visit.
- Automatically calculate the estimated total.

### Dashboard UI
- Elegant teal, cream, and beige color palette.
- Responsive layout for different screen sizes.
- Sidebar navigation.
- Live visit summary.
- Interactive forms and progress indicator.

## 🛠️ Tech Stack

| Technology | Purpose |
|---|---|
| React | Frontend user interface |
| Vite | Frontend development server and build tool |
| JavaScript | Application logic and interactions |
| CSS | Styling and responsive layouts |
| Node.js | Backend JavaScript runtime |
| Express.js | REST API and server |
| CORS | Cross-origin request handling |
| PostgreSQL | Planned relational database |
| Prisma ORM | Planned database access layer |

## 📁 Project Structure

```text
DSPRING_APP/
└── dspring_app/
    ├── backend/
    │   ├── server.js
    │   ├── package.json
    │   └── node_modules/
    ├── public/
    ├── src/
    │   ├── App.jsx
    │   ├── App.css
    │   └── main.jsx
    ├── index.html
    ├── package.json
    ├── package-lock.json
    ├── vite.config.js
    ├── .gitignore
    └── README.md
```

*Note: `node_modules/` is generated locally and should not be committed to Git.*

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

- Node.js and npm
- Git
- PostgreSQL (required for the planned database integration)

### 1. Clone the repository

```bash
git clone <YOUR_GITHUB_REPOSITORY_URL>
cd dspring_app
```

Replace the repository URL with your actual GitHub repository URL.

### 2. Install frontend dependencies

```bash
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

Open the local URL displayed by Vite in your terminal, usually:

```text
http://localhost:5173
```

### 4. Start the backend

Open a second terminal:

```bash
cd backend
npm install
node server.js
```

The Express server currently runs on:

```text
http://localhost:5001
```

Visit the backend root endpoint to verify that it is running:

```text
http://localhost:5001/
```

Expected response:

```json
{
  "message": "D SPRING backend is running!"
}
```

## 🗺️ Development Roadmap

- [x] Build the initial React dashboard.
- [x] Implement the multi-step customer review workflow.
- [x] Add service search, category filtering, and estimated totals.
- [x] Set up the initial Express server.
- [ ] Connect PostgreSQL using Prisma ORM.
- [ ] Design database models for customers, staff, services, visits, and reviews.
- [ ] Create REST API endpoints.
- [ ] Connect the React frontend to the backend.
- [ ] Persist customer visits and reviews.
- [ ] Build customer records and staff performance pages.
- [ ] Add authentication and authorization.
- [ ] Test and deploy the application.

## 🔒 Current Limitations

- Customer and review information is not yet persisted in a database.
- Staff names and service prices are starter data and need confirmation.
- Customer records and staff performance navigation are placeholders.
- The backend currently exposes only a basic health-check endpoint.
- Authentication and production deployment are not yet implemented.

**Important:** The current completion screen is a frontend demonstration. It does not confirm that a review has been permanently saved.

## 🎯 Project Goal

The goal is to evolve D SPRING into a reliable salon management platform that helps salon staff maintain customer records, track services and feedback, and gain useful insights into customer experience and staff performance.

---

**Built with React, Node.js, Express, and PostgreSQL — in progress.**

*D SPRING · Beauty · People · Growth*
