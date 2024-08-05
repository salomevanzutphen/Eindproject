import React, { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./Navigation.css";

function Navbar() {
    const location = useLocation();
    const [bgColor, setBgColor] = useState("#F6F0ED");

    useEffect(() => {
        if (location.pathname === "/") {
            setBgColor("transparent");
        } else {
            setBgColor("#F6F0ED");
        }
    }, [location]);

    return (
        <div style={{ backgroundColor: bgColor, width: '100%' }}>
            <ul className="main-navigation-links">
                <div className="nav-items">
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mysync">My Cycle</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog">Blog</NavLink>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
