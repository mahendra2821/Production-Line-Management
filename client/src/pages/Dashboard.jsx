// import { useSelector, useDispatch } from "react-redux";
// import { logout } from "../redux/slices/authSlice";
// import { useNavigate } from "react-router-dom";

// const Dashboard = () => {
//     const { user } = useSelector((state) => state.auth);
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const handleLogout = () => {
//         dispatch(logout());
//         navigate("/");
//     };

//     return (
//         <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
//             <div className="bg-white p-6 rounded-lg shadow-md w-96">
//                 <h2 className="text-2xl font-semibold text-center">Dashboard</h2>
//                 <p className="text-gray-700 text-center mt-2">Welcome, <strong>{user?.username}</strong></p>
//                 <p className="text-gray-500 text-center">{user?.role}</p>
//                 <button 
//                     onClick={handleLogout} 
//                     className="mt-4 w-full bg-red-500 text-white py-2 rounded-md hover:bg-red-600 transition"
//                 >
//                     Logout
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default Dashboard;



import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import ManagerDashboardPage from "../pages/ManagerDashboardPage";
import OperatorDashboardPage from "../pages/OperatorDashboardPage";
import axios from "axios";

const Dashboard = () => {
  const [role, setRole] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserRole = async () => {
      try {
        const token = localStorage.getItem("token");
        if (!token) {
          navigate("/login");
          return;
        }

        const response = await axios.get("http://localhost:6000/api/auth/user", {
          headers: { Authorization: `Bearer ${token}` },
        });

        setRole(response.data.role);
      } catch (error) {
        console.error("Error fetching user role", error);
        navigate("/login");
      }
    };

    fetchUserRole();
  }, [navigate]);

  if (!role) return <div className="text-center mt-20">Loading...</div>;

  return role === "Manager" ? <ManagerDashboardPage /> : <OperatorDashboardPage />;
};

export default Dashboard;
