# QuizArena - Full Stack Quiz App

QuizMaster is a full stack quiz application that lets users sign up, log in, take quizzes, view their results, and manage their profile, all in a smooth and interactive interface.

# Key Highlights:

- Built using React, Node.js, and MongoDB

- Secure login and registration using JWT

- Real-time quiz taking with score calculation

- Upload and manage your profile picture

- Clean code structure – easy to read and extend



## Live Demo

👉 [View Live](iq-arena-woad.vercel.app)

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS

**Backend:**
- Node.js
- Express.js
- MongoDB 
- JWT Authentication
- bcrypt for password hashing 

**Others:**
- Cloudinary (for profile image upload)
- Multer (for file uploads)
- dotenv
- CORS

## 🔑 Key Features

-  User Authentication (Register / Login / JWT-based)
-  Take timed quizzes with multiple-choice questions
-  View quiz results and scores
-  Profile section with image upload & delete
-  Admin controls (optional: Add/Edit/Delete quizzes)
-  Comments, Likes, and Sharing (for future scope)

## 📁 Project Structure

quiz-app/
├── arena-client/ # React frontend
│ ├── public/
│ └── src/
│ ├── components/
│ ├── pages/
│ └── index.html
├── server/ # Node.js backend
│ ├── models/
│ ├── controllers/
│ ├── middlewares/
│ ├── routes/
| ├── config/
│ ├── server.js
| ├── package.json
│ ├── .gitignore
| └── ...
└── README.md


## APIs and Routes
- POST /api/auth/register – User registration

- POST /api/auth/login – User login

- GET /api/quiz – Get all quizzes

- POST /api/quiz/:id/submit – Submit quiz answers

- GET /api/user/profile – Get logged-in user data

- POST /api/user/upload – Upload profile picture

- DELETE /api/user/profile-picture – Delete profile picture



## 📦 Installation

### 1. Clone the repo

```bash
git clone https://github.com/your-username/quiz-app.git
cd quiz-app
```

### 2. Backend Setup

```bash

cd server
npm install
npm start
```

### 3. Frontend setup

```bash

cd client
npm install
npm run dev
