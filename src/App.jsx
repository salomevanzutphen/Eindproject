import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navigation/Navigation.jsx";
import Home from "./pages/Home/Home.jsx";
import AboutUs from "./pages/AboutUs/AboutUs.jsx";
import MySync from "./pages/MySync/MySync.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import CreatePost from "./pages/CreatePost/CreatePost.jsx";
import Connect from "./pages/Connect/Connect.jsx";
import ScrollToTop from './helpers/ScrollToTop.jsx'; // Import the ScrollToTop component
import EditPost from "./pages/EditPost/EditPost.jsx";

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />  {/* Add the ScrollToTop component here */}
            <div className="app">
                <Routes>
                    {/* Public Routes */}
                    <Route path="/" element={<Home />} />
                    <Route path="/edit-post/:id" element={<EditPost />} />
                    <Route path="/aboutus" element={<AboutUs />} />
                    <Route path="/blog" element={<Blog />} />
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
