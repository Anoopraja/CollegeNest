# CollegeNest

**CollegeNest** is a full-stack MERN web application built to help students explore colleges, read and share reviews, manage their profiles, interact with the student community, and access academic and career guidance.

🌐 **Live:** https://collegenest.anooplofi.me/

---

## 🚀 Features

### 👨‍🎓 Student Features

* 🔐 User registration and login
* 👤 User profile management
* 🏫 College discovery and college details
* ⭐ College ratings and reviews
* 📝 Create and manage reviews
* 🖼️ College image upload and management
* 💬 Student community interaction
* 📚 Academic and career guidance
* 📱 Responsive design for desktop and mobile

## 🛡️ Admin Control

CollegeNest includes a role-based admin system for managing and moderating platform content.

### Admin Capabilities

- 🔐 Admin authentication
- 👥 User management
- 🏫 College management
- ⭐ Review moderation
- 🖼️ Image/content management
- 🔒 Protected admin routes
- 🛡️ Role-based authorization
- 📊 Access to platform-level data

### 🔑 Authentication & Authorization

* JWT-based authentication
* HTTP cookie-based authentication
* Protected routes
* Role-based access control
* Admin authentication
* Admin-only operations
* Secure API access

### 🏫 College Management

* College listing
* Individual college detail pages
* College CRUD operations
* Student ratings and reviews
* Dynamic API-driven college data
* College image management

---

## 🛠️ Tech Stack

### Frontend

* React.js
* Vite
* JavaScript
* Tailwind CSS
* HTML5
* CSS3
* React Router
* Axios

### Backend

* Node.js
* Express.js
* MongoDB
* Mongoose
* REST APIs
* JWT
* bcrypt
* Cookies
* CORS

### Tools & Services

* Git
* GitHub
* Postman
* Cloudinary
* Appwrite(for short time period)

---

## 🏗️ Architecture

```text
                    CollegeNest
                         │
          ┌──────────────┴──────────────┐
          │                             │
       Frontend                      Backend
          │                             │
       React.js                    Node.js
       Vite                        Express.js
       Tailwind CSS                REST APIs
       React Router                Middleware
       Axios                       JWT
          │                             │
          └──────────────┬──────────────┘
                         │
                      MongoDB
                      Mongoose
```

---

## 📂 Main Application Modules

```text
CollegeNest
│
├── Authentication
│   ├── Register
│   ├── Login
│   ├── Logout
│   └── JWT Authentication
│
├── Users
│   ├── Profiles
│   ├── College
│   ├── Branch
│   ├── Year
│   └── Profile Image
│
├── Colleges
│   ├── College Listing
│   ├── College Details
│   ├── CRUD Operations
│   └── College Images
│
├── Reviews
│   ├── Create Review
│   ├── View Reviews
│   ├── Ratings
│   └── Delete Review
│
└── Admin
    ├── Admin Authentication
    ├── Protected Routes
    └── Moderation Operations
```

---

## 🔐 Authentication Flow

CollegeNest uses JWT authentication with HTTP cookies.

```text
User
 │
 ▼
Login
 │
 ▼
Express.js API
 │
 ├── Validate Credentials
 │
 ▼
Generate JWT
 │
 ▼
HTTP Cookie
 │
 ▼
Protected API Request
 │
 ▼
Authentication Middleware
 │
 ▼
Authorized Controller
```

---

## 🔌 API Structure

The backend is organized around resource-based REST APIs.

| Route      | Purpose                                                 |
| ---------- | ------------------------------------------------------- |
| `/user`    | User registration, login, logout and profile operations |
| `/admin`   | Admin authentication and admin operations               |
| `/college` | College operations                                      |
| `/review`  | Review and rating operations                            |
| `/image`   | College image operations                                |

---

## 🗄️ Database

CollegeNest uses **MongoDB** with **Mongoose** for database management.

Core data models include:

```text
User
College
Review
Image
```

---

## ⚙️ Getting Started

### Prerequisites

Make sure you have installed:

* Node.js
* npm
* MongoDB / MongoDB Atlas
* Git

### Clone the Repository

```bash
git clone https://github.com/Anoopraja/universal.git
cd universal
```

### Install Dependencies

```bash
npm install
```

If the frontend and backend are maintained in separate directories, install dependencies inside each project directory.

```bash
cd frontend
npm install
```

```bash
cd backend
npm install
```

---

## 🔑 Environment Variables

Create a `.env` file in the backend directory.

Example:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_jwt_secret

CLOUDINARY_CLOUD_NAME=your_cloud_name
CLOUDINARY_API_KEY=your_api_key
CLOUDINARY_API_SECRET=your_api_secret
```

> Never commit your `.env` file or expose secret credentials on GitHub.

---

## ▶️ Run Locally

### Start Backend

```bash
npm run dev
```

### Start Frontend

```bash
npm run dev
```

Then open the local Vite URL shown in your terminal.

---

## 🌐 Production

CollegeNest is deployed with a separate frontend and backend architecture.

### Frontend

https://collegenest.anooplofi.me/

### Production Configuration

The production environment requires correct configuration of:

* API base URL
* MongoDB connection
* CORS origins
* Cookies
* JWT secret
* Environment variables
* Cloudinary credentials

---

## 🧪 API Testing

The backend APIs can be tested using **Postman**.

Example API areas:

```text
Authentication
      ↓
Users
      ↓
Colleges
      ↓
Reviews
      ↓
Images
      ↓
Admin
```

---

## 📸 Project Highlights

CollegeNest focuses on implementing real-world full-stack concepts rather than only frontend UI.

### Frontend

* Component-based React architecture
* Client-side routing
* API integration
* Responsive UI
* Reusable components
* Dynamic data rendering

### Backend

* REST API development
* Express.js routing
* Controllers and middleware
* MongoDB/Mongoose
* Authentication
* Authorization
* CRUD operations
* Image handling

### Deployment

* Production frontend/backend deployment
* CORS configuration
* Cookie configuration
* Environment variables
* Production API communication
* Debugging deployment issues

---

## 🔮 Future Improvements

Planned areas for future development include:

* Real-time student chat
* Improved community features
* Notifications
* Advanced college search and filtering
* More moderation tools
* Expanded college database
* Additional academic resources
* More career guidance features
* Continued adoption of Next.js and TypeScript

---

## 👨‍💻 Author

### Anoop Kumar

**Full-Stack / MERN Developer**

* GitHub: https://github.com/Anoopraja
* LinkedIn: https://linkedin.com/in/anoop-kumar-21b462368
* Portfolio: https://www.anooplofi.me/

---

## 📄 License

This project is currently a personal/portfolio project.
