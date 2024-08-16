import React, { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import ImageCard from './ImageCard/ImageCard.jsx'; // Import the ImageCard component
import ImageModal from './ImageModal/ImageModal.jsx'; // Import the ImageModal component
import { AuthContext } from '../../context/AuthContext'; // Import AuthContext to access roles

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const { roles } = useContext(AuthContext); // Access roles from AuthContext
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
            console.log(data);
            setPosts(data);
        } catch (error) {
            console.error('Error fetching posts:', error);
        }
    };

    const handleCreateNewPost = () => {
        navigate('/create-post');
    };

    const handleImageClick = (post) => {
        setSelectedPost(post);
    };

    const handleCloseModal = () => {
        setSelectedPost(null);
    };

    const handleEditPost = (post) => {
        navigate(`/edit-post/${post.id}`);
    };

    const handleDeletePost = async (postId) => {
        try {
            await fetch(`http://localhost:8080/posts/${postId}`, {
                method: 'DELETE',
            });
            setPosts(posts.filter(post => post.id !== postId));
            setSelectedPost(null);
        } catch (error) {
            console.error('Error deleting post:', error);
        }
    };

    return (
        <>
            <div className="blog-page">
                {/* Conditionally render the Create New Post button for admins */}
                {roles.length > 0 && roles[0].authority === 'ROLE_ADMIN' && (
                    <button className="create-post-button" onClick={handleCreateNewPost}>
                        Create New Post
                    </button>
                )}
                <div className="posts">
                    {posts.map((post) => (
                        <ImageCard key={post.id} post={post} onImageClick={handleImageClick} />
                    ))}
                </div>
                <ImageModal
                    selectedPost={selectedPost}
                    onClose={handleCloseModal}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                />
            </div>
        </>
    );
};

export default Blog;
