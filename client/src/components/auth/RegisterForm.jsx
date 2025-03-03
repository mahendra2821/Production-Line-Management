

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
