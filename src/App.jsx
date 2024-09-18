import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navigation/Navigation.jsx";
import ScrollToTop from './helpers/ScrollToTop.jsx';

// Lazy load the components
const Home = lazy(() => import("./pages/home/Home.jsx"));
const About = lazy(() => import("./pages/about/About.jsx"));
const EditPost = lazy(() => import("./pages/Blog/posts/editPost/EditPost.jsx"));
const Blog = lazy(() => import("./pages/Blog/Blog.jsx"));
const MyCycle = lazy(() => import("./pages/myCycle/MyCycle.jsx"));
const CreatePost = lazy(() => import("./pages/Blog/posts/createPost/CreatePost.jsx"));
const Connect = lazy(() => import("./pages/connectPage/Connect.jsx"));
const NotFound = lazy(() => import('./pages/notFound/NotFound.jsx'));

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className="app">
                <Suspense fallback={<div>Loading...</div>}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/about" element={<About />} />
                        <Route path="/edit-post/:id" element={<EditPost />} />
                        <Route path="/blog" element={<Blog />} />
                        <Route path="/mysync" element={<MyCycle />} />
                        <Route path="/create-post" element={<CreatePost />} />
                        <Route path="/connect" element={<Connect />} />
                        <Route path="*" element={<NotFound />} />
                    </Routes>
                </Suspense>
            </div>
        </>
    );
}

export default App;
