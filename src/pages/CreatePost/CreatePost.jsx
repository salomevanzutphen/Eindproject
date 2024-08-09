import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';
import axios from 'axios';

function CreatePost() {
    // Initialize state variables
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [addSuccess, setAddSuccess] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    async function addPost(e) {
        e.preventDefault();

        // Create a FormData object to handle file uploads
        const formData = new FormData();
        formData.append('title', title);
        formData.append('name', name);
        formData.append('description', description);

        if (fileInputRef.current.files[0]) {
            formData.append('file', fileInputRef.current.files[0]); // Add the image file
        } else {
            console.error('No image file selected');
            return;
        }

        try {
            // Send a POST request to the backend
            const response = await axios.post('http://localhost:8080/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            console.log(response.data); // Log the response data
            setAddSuccess(true); // Update success flag

            // Reset form fields
            setTitle('');
            setName('');
            setDescription('');
            setImage(null);
            fileInputRef.current.value = null;

            // Redirect to the blog page after successful submission
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
