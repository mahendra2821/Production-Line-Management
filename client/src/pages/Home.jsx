import { Link } from "react-router-dom";

const Home = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <h1 className="text-3xl font-bold mb-4">Production Management System</h1>
            <p className="text-gray-600 mb-6">Manage production orders with ease.</p>
            <div className="space-x-4">
                <Link to="/register" className="bg-blue-500 text-white px-4 py-2 rounded">Register</Link>
                <Link to="/login" className="bg-green-500 text-white px-4 py-2 rounded">Login</Link>
            </div>
        </div>
    );
};

export default Home;
