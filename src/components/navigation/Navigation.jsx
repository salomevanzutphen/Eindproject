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

    const toggleUserProfile = () => {
        setShowUserProfile(!showUserProfile);
    };

    return (
        <div className="navbar" style={{ backgroundColor: bgColor }}>
            <ul className="main-navigation-links">
                <div className="nav-items">
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about" activeClassName="active">About</NavLink>
                    </li>

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

                    {isRegularUser && (
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
