// import { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// const RegisterForm = () => {
//   const [formData, setFormData] = useState({
//     username: "",
//     email: "",
//     password: "",
//     role: "Manager",  // Default role
//     department: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.name === "password" ? e.target.value : e.target.value.trim()
//     });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     setLoading(true);
//     setError("");

//     try {
//       const response = await axios.post("http://localhost:5000/api/auth/register", formData);
//       alert("Registration Successful! Please log in.");
//       navigate("/login");
//     } catch (error) {
//       console.error("Registration Error:", error.response?.data || error.message);
//       setError(error.response?.data?.message || "Registration Failed. Try again.");
//     }

//     setLoading(false);
//   };

//   return (
//     <div className="min-h-screen flex items-center justify-center bg-gray-100">
//       <div className="bg-white p-8 rounded-lg shadow-md w-96">
//         <h2 className="text-2xl font-bold text-center mb-4">Register</h2>
//         {error && <p className="text-red-500 text-center">{error}</p>}
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} className="w-full p-2 border rounded focus:outline-blue-500" required />
//           <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded focus:outline-blue-500" required />
//           <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} className="w-full p-2 border rounded focus:outline-blue-500" required />
//           <select name="role" value={formData.role} onChange={handleChange} className="w-full p-2 border rounded focus:outline-blue-500">
//             <option value="manager">Manager</option>
//             <option value="operator">Operator</option>
//           </select>
//           <input type="text" name="department" placeholder="Department" value={formData.department} onChange={handleChange} className="w-full p-2 border rounded focus:outline-blue-500" required />
//           <button type="submit" className={`w-full py-2 rounded ${loading ? "bg-gray-400 cursor-not-allowed" : "bg-blue-600 hover:bg-blue-700 text-white"}`} disabled={loading}>
//             {loading ? "Registering..." : "Register"}
//           </button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default RegisterForm;

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUserThunk } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        role: "Operator",
        department: ""
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUserThunk(formData)).then((res) => {
            if (!res.error) navigate("/login");
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>

                <input 
                    type="text" placeholder="Username" required value={formData.username}
                    onChange={(e) => setFormData({ ...formData, username: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md mb-3"
                />
                <input 
                    type="email" placeholder="Email" required value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md mb-3"
                />
                <input 
                    type="password" placeholder="Password" required value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md mb-3"
                />
                <select 
                    value={formData.role} 
                    onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md mb-3"
                >
                    <option value="Manager">Manager</option>
                    <option value="Operator">Operator</option>
                </select>
                <input 
                    type="text" placeholder="Department" required value={formData.department}
                    onChange={(e) => setFormData({ ...formData, department: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md mb-3"
                />
                <button 
                    type="submit" disabled={loading} 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    {loading ? "Registering..." : "Register"}
                </button>
                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </form>
        </div>
    );
};

export default RegisterForm;
