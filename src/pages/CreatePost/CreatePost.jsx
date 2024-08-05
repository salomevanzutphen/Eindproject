import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import './CreatePost.css';

const CreatePost = ({ fetchPosts }) => {
    const [title, setTitle] = useState('');
    const [artist, setArtist] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const fileInputRef = useRef(null);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('artist', artist);
        formData.append('description', description);
        formData.append('image', fileInputRef.current.files[0]);

        try {
            console.log(formData)
            const response = await fetch('http://localhost:8080/posts', {
                method: 'POST',
                body: formData,
            });

            if (!response.ok) {
                throw new Error('Failed to create post');
            }

            await fetchPosts();

            // Reset form
            setTitle('');
            setArtist('');
            setDescription('');
            setImage(null);
            fileInputRef.current.value = null;

            // Navigate back to the blog page
            navigate('/blog');
        } catch (error) {
            console.error('Error creating post:', error);
        }
    };

    const handleImageChange = (e) => {
        setImage(URL.createObjectURL(e.target.files[0]));
    };

    return (
        <div className="create-post-page">
            <h1>Create a New Post</h1>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Title</label>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Artist</label>
                    <input
                        type="text"
                        value={artist}
                        onChange={(e) => setArtist(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Description</label>
                    <textarea
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label>Image</label>
                    <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        ref={fileInputRef}
                    />
                    {image && <img src={image} alt="Preview" className="image-preview" />}
                </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

CreatePost.propTypes = {
    fetchPosts: PropTypes.func.isRequired,
};

export default CreatePost;
