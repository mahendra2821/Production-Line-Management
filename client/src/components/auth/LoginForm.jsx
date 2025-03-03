

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginUserThunk } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
    const [formData, setFormData] = useState({ email: "", password: "" });
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUserThunk(formData)).then((res) => {
            if (!res.error) {
                navigate(res.payload.role === "Manager" ? "/manager" : "/operator");
            }
        });
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <form onSubmit={handleSubmit} className="bg-white shadow-lg rounded-lg p-6 w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>
                <input 
                    type="email" placeholder="Email" required value={formData.email} 
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-300"
                />
                <input 
                    type="password" placeholder="Password" required value={formData.password} 
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="w-full px-4 py-2 border rounded-md mb-3 focus:outline-none focus:ring focus:border-blue-300"
                />
                <button 
                    type="submit" disabled={loading} 
                    className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition"
                >
                    {loading ? "Logging in..." : "Login"}
                </button>
                {error && <p className="text-red-500 text-sm mt-2 text-center">{error}</p>}
            </form>
        </div>
    );
};

export default LoginForm;
