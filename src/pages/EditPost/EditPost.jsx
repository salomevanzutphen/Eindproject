import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate, useLocation, useParams } from 'react-router-dom';
import axios from 'axios';
import '../CreatePost/CreatePost.css';
import { AuthContext } from '../../context/AuthContext.jsx';

function EditPost() {
    const { id } = useParams(); // Get the post ID from the URL
    const location = useLocation();
    const { post } = location.state || {}; // Get the post data from the state passed via navigate
    const [title, setTitle] = useState(post?.title || '');
    const [name, setName] = useState(post?.name || '');
    const [description, setDescription] = useState(post?.description || '');
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const { roles } = useContext(AuthContext);

    useEffect(() => {
        const isAdmin = roles.some(role => role.authority === 'ROLE_ADMIN');
        if (!isAdmin) {
            navigate('/unauthorized');
        }
    }, [roles, navigate]);

    async function updatePost(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('name', name);
        formData.append('description', description);

        if (fileInputRef.current.files[0]) {
            formData.append('image', fileInputRef.current.files[0]);
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.put(`http://localhost:8080/posts/${id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log(response.data);
            navigate('/blog'); // Redirect to the blog page after successful update
        } catch (error) {
            console.error('Error updating post:', error);
        }
    }

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="create-post-page">
            <h1>Edit Post</h1>
            <form onSubmit={updatePost}>
                <div className="form-group">
                    <label htmlFor="post-title">Title</label>
                    <input
                        type="text"
                        name="post-title-field"
                        id="post-title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="post-name">Name</label>
                    <input
                        type="text"
                        name="post-name-field"
                        id="post-name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="post-description">Description</label>
                    <textarea
                        name="post-description-field"
                        id="post-description"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="post-image">Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        id="post-image"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                    />
                    {image && <img src={image} alt="Preview" className="image-preview" />}
                </div>
                <button type="submit">Update</button>
            </form>
        </div>
    );
}

export default EditPost;
