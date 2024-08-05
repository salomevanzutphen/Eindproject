import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        fetchPosts();
    }, []);

    const fetchPosts = async () => {
        try {
            const response = await fetch('http://localhost:8080/posts');
            const data = await response.json();
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
                <button className="create-post-button" onClick={handleCreateNewPost}>
                    Create New Post
                </button>
                <div className="posts">
                    {posts.map((post) => (
                        <div className="post" key={post.id} onClick={() => handleImageClick(post)}>
                            <div className="image-container">
                                <img src={`data:image/jpeg;base64,${post.image}`} alt={post.title} />
                                <div className="overlay">
                                    <div className="text">
                                        <div className="title-artist">{post.title}</div>
                                        <div className="name-artist">{post.artist}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                {selectedPost && (
                    <div className="modal" onClick={handleCloseModal}>
                        <div className="modal-content" onClick={e => e.stopPropagation()}>
                            <span className="close" onClick={handleCloseModal}>&times;</span>
                            <div className="modal-content-innercontainer">
                                <img src={`data:image/jpeg;base64,${selectedPost.image}`} alt={selectedPost.title} />
                                <div className="post-information">
                                    <div className="modal-text">
                                        <h2>{selectedPost.title}</h2>
                                        <h3>by {selectedPost.artist}</h3>
                                        <p>{selectedPost.description}</p>
                                    </div>
                                    <div className="admin-editing">
                                        <button className="edit-button" onClick={() => handleEditPost(selectedPost)}>Edit</button>
                                        <button className="delete-button" onClick={() => handleDeletePost(selectedPost.id)}>Delete</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Blog;
