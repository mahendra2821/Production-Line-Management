import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../../redux/slices/authSlice";

const Navbar = () => {
    const dispatch = useDispatch();

    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="bg-blue-600 p-4 text-white flex justify-between">
            <h1 className="text-lg font-bold">Production Line Management</h1>
            <ul className="flex space-x-4">
                <li><Link to="/dashboard" className="hover:underline">Dashboard</Link></li>
                <li><Link to="/profile" className="hover:underline">Profile</Link></li>
                <li> <Link to='/'><button onClick={handleLogout} className="hover:underline">Logout</button> </Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
