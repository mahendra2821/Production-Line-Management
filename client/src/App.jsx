


import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginForm from "./components/auth/LoginForm";
import RegisterForm from "./components/auth/RegisterForm";
// import Dashboard from "./pages/Dashboard";
import Home from "./pages/Home";
import OperatorDashboardPage from "./pages/OperatorDashboardPage";
import ManagerDashboardPage from "./pages/ManagerDashboardPage";

function App() {
  return (
    <Router>
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/operator" element={<OperatorDashboardPage />} />
        <Route path="/manager" element={<ManagerDashboardPage />} />
      </Routes>
    </Router>
  );
}

export default App;
