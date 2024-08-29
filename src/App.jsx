import { Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from "./components/navigation/Navigation.jsx";
import MyCycle from "./pages/myCycle/MyCycle.jsx";
import Blog from "./pages/Blog/Blog.jsx";
import CreatePost from "./pages/Blog/posts/createPost/CreatePost.jsx";
import Connect from "./pages/Connect/Connect.jsx";
import ScrollToTop from './helpers/ScrollToTop.jsx';
import EditPost from "./pages/Blog/posts/editPost/EditPost.jsx";
import NotFound from './pages/notFound/NotFound.jsx';
import About from "./pages/about/About.jsx";
import Home from "./pages/home/Home.jsx";

function App() {
    return (
        <>
            <Navbar />
            <ScrollToTop />
            <div className="app">
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
            </div>
        </>
    );
}

export default App;
