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
        <div className="navbar" style={{ backgroundColor: bgColor }}>
            <ul className="main-navigation-links">
                <div className="nav-items">
                    <li>
                        <NavLink to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/aboutus" activeClassName="active">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/mysync" activeClassName="active">My Cycle</NavLink>
                    </li>
                    <li>
                        <NavLink to="/blog" activeClassName="active">Blog</NavLink>
                    </li>
                    <li>
                        <NavLink to="/connect" activeClassName="active">Connect</NavLink>
                    </li>
                </div>
            </ul>
        </div>
    );
}

export default Navbar;
