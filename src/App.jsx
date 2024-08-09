// eslint-disable-next-line no-unused-vars
import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import MySync from "./pages/MySync/MySync.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import Connect from "./pages/Connect/Connect.jsx";

function App() {

    return (
        <>
            <Navbar />
            <div className="app">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/profile" element={<Profile />} />
                    <Route path="/mysync" element={<MySync />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/connect" element={<Connect />} />
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </div>
        </>
    );
}

export default App;


