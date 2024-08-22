import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../CreateEditPost.css';
import { AuthContext } from '../../../../context/AuthContext.jsx'; // Zorg ervoor dat het pad correct is

function CreatePost() {
    const [title, setTitle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [addSuccess, setAddSuccess] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();
    const { roles } = useContext(AuthContext);

    useEffect(() => {
        const isAdmin = roles.some(role => role.authority === 'ROLE_ADMIN');
        if (!isAdmin) {
            navigate('/unauthorized');
        }
    }, [roles, navigate]);

    async function addPost(e) {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('subtitle', subtitle);
        formData.append('description', description);

        if (fileInputRef.current.files[0]) {
            formData.append('image', fileInputRef.current.files[0]);
        } else {
            console.error('No image file selected');
            return;
        }

        try {
            const token = localStorage.getItem('token');
            const response = await axios.post('http://localhost:8080/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`,
                },
            });

            console.log(response.data);
            setAddSuccess(true);

            setTitle('');
            setSubtitle('');
            setDescription('');
            setImage(null);
            fileInputRef.current.value = null;

            navigate('/blog');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    }

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="create-post-page">
            <h1>Create a New Post</h1>
            {addSuccess && <p>Post created successfully!</p>}
            <form onSubmit={addPost}>
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
                    <label htmlFor="post-subtitle">Subtitle</label>
                    <input
                        type="text"
                        name="post-subtitle-field"
                        id="post-subtitle"
                        value={subtitle}
                        onChange={(e) => setSubtitle(e.target.value)}
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
                        required
                    />
                    {image && <img src={image} alt="Preview" className="image-preview" />}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default CreatePost;
