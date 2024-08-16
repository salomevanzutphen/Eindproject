import React, { useState, useRef, useEffect, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CreatePost.css';
import { AuthContext } from '../../context/AuthContext.jsx'; // Zorg ervoor dat het pad correct is

function CreatePost() {
    // Initialize state variables
    const [title, setTitle] = useState('');
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const [addSuccess, setAddSuccess] = useState(false);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    // Gebruik de authContext
    const { roles } = useContext(AuthContext);

    useEffect(() => {
        // Controleer of de gebruiker een admin is
        const isAdmin = roles.some(role => role.authority === 'ROLE_ADMIN');
        if (!isAdmin) {
            navigate('/unauthorized');
        }
    }, [roles, navigate]);

    async function addPost(e) {
        e.preventDefault();

        // Create a FormData object to handle file uploads
        const formData = new FormData();
        formData.append('title', title);
        formData.append('name', name);
        formData.append('description', description);

        if (fileInputRef.current.files[0]) {
            formData.append('image', fileInputRef.current.files[0]); // Add the image file
        } else {
            console.error('No image file selected');
            return;
        }

        try {
            // Send a POST request to the backend
            const token = localStorage.getItem('token'); // Assuming the token is stored in localStorage
            const response = await axios.post('http://localhost:8080/posts', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Bearer ${token}`, // Include the token in the Authorization header
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
            // Handle error (e.g., show an error message to the user)
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
