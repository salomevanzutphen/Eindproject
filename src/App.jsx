import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navigation/Navigation.jsx";
import Home from "./pages/home/Home.jsx";
import About from "./pages/about/About.jsx";
import MyCycle from "./pages/myCycle/MyCycle.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import CreatePost from "./pages/Blog/posts/createPost/CreatePost.jsx";
import Connect from "./pages/Connect/Connect.jsx";
import ScrollToTop from './helpers/ScrollToTop.jsx'; // Import the ScrollToTop component
import EditPost from "./pages/Blog/posts/editPost/EditPost.jsx";
import NotFound from './pages/notFound/NotFound.jsx'; // Import the NotFound component

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
                    <Route path="/aboutus" element={<About />} />
                    <Route path="/blog" element={<Blog />} />
                    <Route path="/mysync" element={<MyCycle />} />
                    <Route path="/create-post" element={<CreatePost />} />
                    <Route path="/connect" element={<Connect />} />

                    {/* Catch-all route for undefined paths */}
                    <Route path="*" element={<NotFound />} />
                </Routes>
            </div>
        </>
    );
}

export default App;
