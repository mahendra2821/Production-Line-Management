// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/Home";
// import RegisterPage from "./pages/RegisterPage";
// import LoginPage from "./pages/LoginPage";
// import Dashboard from "./pages/Dashboard";
// import Navbar from "./components/shared/Navbar";

// // import OrderForm from "./components/orders/OrderForm";
// // import ManagerDashboardPage from "./pages/ManagerDashboardPage";
// // import OperatorDashboardPage from "./pages/OperatorDashboardPage";

// const App = () => {
//     return (
//         <Router>
//             <Routes>
//                 <Route path="/" element={<Home />} />
//                 <Route path="/register" element={<RegisterPage />} />
//                 <Route path="/login" element={<LoginPage />} />
//                 <Route path="/dashboard" element={<Dashboard />} />
//                 <Route path="/sidebar" element={<Sideba />} />
//                 <Route path="/navbar" element={<Navbar />} />
//                 {/* <Route path="/statusbadge" element={<StatusBadge />} /> */}
//                 {/* <Route path="/orderform" element={<OrderForm />} /> */}
                
//                 {/* <Route path="/manager" element={<ManagerDashboardPage />} />
//                 <Route path="/operator" element={<OperatorDashboardPage />} /> */}
//             </Routes>
//         </Router>
//     );
// };

// export default App;



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
