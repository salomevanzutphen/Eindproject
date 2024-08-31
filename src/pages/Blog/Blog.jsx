import { useState, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import './Blog.css';
import PostView from './postView/PostView.jsx';
import ImageCard from './imageCard/ImageCard.jsx';
import { AuthContext } from '../../context/AuthContext';
import Button from '../../components/button/Button.jsx';

const Blog = () => {
    const [posts, setPosts] = useState([]);
    const [selectedPost, setSelectedPost] = useState(null);
    const { roles } = useContext(AuthContext);
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
        <div className="blog-page-container">
            <div className="blog-page">
                {roles.length > 0 && roles[0].authority === 'ROLE_ADMIN' && (
                    <Button
                        text="Create Post"
                        backgroundColor="#90BE6D"
                        onClick={handleCreateNewPost}
                    />
                )}
                <div className="posts">
                    {posts.map((post) => (
                        <PostView key={post.id} post={post} onImageClick={handleImageClick} />
                    ))}
                </div>
                <ImageCard
                    selectedPost={selectedPost}
                    onClose={handleCloseModal}
                    onEdit={handleEditPost}
                    onDelete={handleDeletePost}
                />
            </div>
        </div>
    );
};

export default Blog;
