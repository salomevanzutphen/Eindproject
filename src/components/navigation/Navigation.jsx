import { useEffect, useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../context/AuthContext.jsx";
import profileIcon from "../../assets/profile.png";
import UserProfile from "../../pages/account/UserProfile.jsx";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState("#F6F0ED");
    const { isAuth, logout, roles } = useContext(AuthContext);
    const [showUserProfile, setShowUserProfile] = useState(false);

    useEffect(() => {
        // Change background color based on the location
        if (location.pathname === "/") {
            setBgColor("transparent");
        } else {
            setBgColor("#F6F0ED");
        }
    }, [location]);

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    const toggleUserProfile = () => {
        setShowUserProfile(!showUserProfile);
    };

    useEffect(() => {
        // Debugging: Log roles to check if the roles are properly set
        console.log("Navbar - Auth Status:", isAuth);
        console.log("Navbar - User Roles:", roles);
    }, [isAuth, roles]);

    // Check if the user has the specific role
    const hasRole = (role) => roles.some(r => r.authority === role);

    return (
        <div className="navbar" style={{ backgroundColor: bgColor }}>
            <ul className="main-navigation-links">
                <div className="nav-items">
                    <li>
                        <NavLink
                            to="/"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Home
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/about"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            About
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to="/blog"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            Blog
                        </NavLink>
                    </li>

                    {/* Check if the user has ROLE_USER */}
                    {isAuth && hasRole('ROLE_USER') && (
                        <li>
                            <NavLink
                                to="/mysync"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                My Cycle
                            </NavLink>
                        </li>
                    )}

                    <li>
                        {isAuth ? (
                            <button className="logout-button" onClick={handleLogout}>
                                Log out
                            </button>
                        ) : (
                            <NavLink
                                to="/connect"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Connect
                            </NavLink>
                        )}
                    </li>

                    {/* Render profile icon to the right of the connect / log out button */}
                    {isAuth && hasRole('ROLE_USER') && (
                        <li>
                            <img
                                className="profile-icon"
                                src={profileIcon}
                                alt="profile-icon"
                                onClick={toggleUserProfile}
                            />
                        </li>
                    )}
                </div>
            </ul>
            {showUserProfile && <UserProfile onClose={toggleUserProfile} />}
        </div>
    );
}

export default Navbar;
