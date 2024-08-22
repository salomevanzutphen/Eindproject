import React, { useEffect, useState, useContext } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import "./Navigation.css";
import { AuthContext } from "../../context/AuthContext.jsx";

function Navbar() {
    const location = useLocation();
    const navigate = useNavigate();
    const [bgColor, setBgColor] = useState("#F6F0ED");
    const { isAuth, logout, roles } = useContext(AuthContext);

    useEffect(() => {
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

    const isRegularUser = roles.length > 0 && roles[0].authority === 'ROLE_USER';

    return (
        <div className="navbar" style={{ backgroundColor: bgColor }}>
            <ul className="main-navigation-links">
                <div className="nav-items">
                    {/* Home and About are accessible to everyone */}
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
                            to="/aboutus"
                            className={({ isActive }) => (isActive ? "active" : "")}
                        >
                            About
                        </NavLink>
                    </li>

                    {/* Blog is accessible to all authenticated users */}
                    {isAuth && (
                        <li>
                            <NavLink
                                to="/blog"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                Blog
                            </NavLink>
                        </li>
                    )}

                    {/* My Cycle is accessible to regular users only */}
                    {isRegularUser && (
                        <li>
                            <NavLink
                                to="/mysync"
                                className={({ isActive }) => (isActive ? "active" : "")}
                            >
                                My Cycle
                            </NavLink>
                        </li>
                    )}

                    {/* Connect/Logout: Connect for guests, Logout for authenticated users */}
                    <li>
                        {isAuth ? (
                            <button className="logout-button" onClick={handleLogout}>
                                Log Out
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
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
