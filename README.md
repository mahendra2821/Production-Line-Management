 Production Line Management - Frontend (React + Redux)

 *********************************************************

## 📌 Project Overview
This is the **frontend** for the Production Line Management System, built with **React.js, Redux Toolkit, Tailwind CSS, and Axios**.  
Users (Managers & Operators) can:
- Register/Login
- Create and Manage Orders
- View and Manage Materials
- Access Role-Based Dashboards

---

## 🚀 **Tech Stack**
- **React.js** (Frontend Framework)
- **Redux Toolkit** (State Management)
- **React Router** (Navigation)
- **Axios** (API Calls)
- **Tailwind CSS** (Styling)

---

## 🔧 **Setup Instructions**

### ✅ **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/production-line-frontend.git
cd production-line-frontend

npm install
npm run dev
REACT_APP_API_URL=http://localhost:5000



frontend/
│── src/
│   ├── components/        # UI Components (OrderForm, Navbar, Sidebar)
│   ├── pages/             # Main Pages (Login, Dashboard)
│   ├── redux/             # Redux Store & Slices
│   ├── services/          # API Services
│   ├── App.js             # Main App Component
│   ├── index.js           # Entry Point
│── public/
│── .env
│── package.json
│── README.md



Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login
POST	/api/orders	Create an order
GET	/api/orders	Fetch all orders
PUT	/api/orders/:id/status	Update order status
DELETE	/api/orders/:id	Delete an order
PUT	/api/materials/:id	Update material stock


🔥 Features
✅ Role-Based Access (Manager & Operator)
✅ Secure Authentication (JWT)
✅ Dynamic Order Management
✅ Real-Time Material Tracking


***************************

BACKEND

cd ../backend
npm run dev



---

## **📌 Backend README (Node.js + Express + MongoDB)**
📁 **`backend/README.md`**
```markdown
# Production Line Management - Backend (Node.js + Express + MongoDB)

## 📌 Project Overview
This is the **backend** of the Production Line Management System. It handles:
- User Authentication (JWT)
- Orders Processing
- Materials Management

Built with **Node.js, Express, MongoDB, and Mongoose**.

---

## 🚀 **Tech Stack**
- **Node.js** (Backend Runtime)
- **Express.js** (Web Framework)
- **MongoDB** (Database)
- **Mongoose** (ODM)
- **JWT (JSON Web Token)** (Authentication)
- **bcrypt.js** (Password Hashing)
- **CORS** (Cross-Origin Support)

---

## 🔧 **Setup Instructions**

### ✅ **1. Clone the Repository**
```sh
git clone https://github.com/yourusername/production-line-backend.git
cd production-line-backend


npm install


MONGO_URI=mongodb+srv://jammulamahendra28210702:Mahe2821@cluster0.bda4w.mongodb.net/Production-Line-Management
JWT_SECRET=ProductionLineManagement
PORT=5000


npm start



backend/
│── models/               # Mongoose Models
│   ├── User.js
│   ├── Order.js
│   ├── Material.js
│── routes/               # API Routes
│   ├── authRoutes.js
│   ├── orderRoutes.js
│   ├── materialRoutes.js
│── controllers/          # Request Handlers
│── middleware/           # Authentication Middleware
│── config/               # DB Connection
│── server.js             # Main Express App
│── package.json
│── README.md




🛒 API Endpoints
Method	Endpoint	Description
POST	/api/auth/register	Register a new user
POST	/api/auth/login	User login
GET	/api/auth/user	Get logged-in user details
POST	/api/orders	Create an order
GET	/api/orders	Fetch all orders
PUT	/api/orders/:id/status	Update order status
DELETE	/api/orders/:id	Delete an order
PUT	/api/materials/:id	Update material stock



Authorization: Bearer your_token_here


🔥 Features
✅ User Authentication (JWT)
✅ Secure Password Hashing
✅ Orders & Materials Management
✅ MongoDB Database Integration




🔥 Features
✅ User Authentication (JWT)
✅ Secure Password Hashing
✅ Orders & Materials Management
✅ MongoDB Database Integration


Test API using Postman or Frontend
Deploy on netlify (Frontend) & Render (Backend)

