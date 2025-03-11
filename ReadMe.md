# MentorLed Backend Project

## 🚀 Project Overview

This is a backend API built with **Node.js (Express.js)** to handle **user authentication** using JWT (JSON Web Tokens). The API allows users to **sign up and log in securely**.

## 📌 Features

- User **Signup** with hashed passwords (using bcrypt.js)
- User **Login** with JWT-based authentication
- Basic Express.js server setup
- Environment variables for security

## 🛠 Tech Stack

- **Node.js** (Runtime)
- **Express.js** (Web Framework)
- **bcryptjs** (Password Hashing)
- **jsonwebtoken** (JWT Authentication)
- **dotenv** (Environment Variables)
- **cors** (CORS Handling)

## 📂 Project Structure

```
mentorled-backend/
│── routes/
│   ├── auth.js    # Authentication routes (Signup & Login)
│── .env           # Environment variables (JWT Secret)
│── server.js      # Main Express server file
│── package.json   # Project dependencies
│── README.md      # Project documentation
```

## 🛠 Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone <your-repo-link>
cd mentorled-backend
```

### 2️⃣ Install dependencies

```bash
npm install express jsonwebtoken bcryptjs dotenv cors
```

### 3️⃣ Set up environment variables

Create a `.env` file and add:

```env
JWT_SECRET=your_super_secret_key
PORT=5000
```

### 4️⃣ Start the server

```bash
node server.js
```

*(Use **`npx nodemon server.js`** for live reload during development.)*

## 🔐 API Endpoints

### 1️⃣ User Signup

**Endpoint:** `POST /auth/signup`

```json
{
  "username": "samuel",
  "password": "password123"
}
```

✅ **Response:**

```json
{
  "message": "User registered successfully"
}
```

### 2️⃣ User Login

**Endpoint:** `POST /auth/login`

```json
{
  "username": "samuel",
  "password": "password123"
}
```

✅ **Response:**

```json
{
  "message": "Login successful",
  "token": "your_jwt_token_here"
}
```

## 📜 License

This project is for MentorLed Task #1. Feel free to modify and improve it! 🚀

