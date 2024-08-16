import React, { useState } from 'react';
import './ImageModal.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteConfirmation from '../../../components/DeleteConfirmation/DeleteConfirmation.jsx';

const ImageModal = ({ selectedPost, onClose }) => {
    const navigate = useNavigate();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);

    if (!selectedPost) return null;

    const roles = JSON.parse(localStorage.getItem('roles') || '[]'); // Fetch roles from localStorage

    const handleEdit = () => {
        navigate(`/edit-post/${selectedPost.id}`, { state: { post: selectedPost } });
    };

    const handleDelete = async () => {
        try {
            const token = localStorage.getItem('token');
            await axios.delete(`http://localhost:8080/posts/${selectedPost.id}`, {
                headers: {
                    'Authorization': `Bearer ${token}`,
                }
            });
            navigate('/blog', { replace: true });
            window.location.reload();
        } catch (error) {
            console.error('Error deleting post:', error);
            alert('Failed to delete post. Please try again.');
        }
    };

    const handleConfirmDelete = () => {
        setShowDeleteConfirmation(false); // Close the confirmation dialog
        handleDelete(); // Proceed with deletion
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false); // Close the confirmation dialog
    };

    return (
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <span className="close" onClick={onClose}>&times;</span>
                <div className="modal-content-innercontainer">
                    <img src={`data:image/jpeg;base64,${selectedPost.imgdata}`} alt={selectedPost.title} />
                    <div className="post-information">
                        <div className="modal-text">
                            <h2>{selectedPost.title}</h2>
                            <h3>by {selectedPost.artist}</h3>
                            <p>{selectedPost.description}</p>
                        </div>
                        {/* Conditionally render Edit and Delete buttons for admins */}
                        {roles.length > 0 && roles[0].authority === 'ROLE_ADMIN' && (
                            <div className="admin-editing">
                                <button className="edit-button" onClick={handleEdit}>Edit</button>
                                <button
                                    className="delete-button"
                                    onClick={() => setShowDeleteConfirmation(true)}
                                >
                                    Delete
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {showDeleteConfirmation && (
                <DeleteConfirmation
                    onConfirm={handleConfirmDelete}
                    onCancel={handleCancelDelete}
                />
            )}
        </div>
    );
};

export default ImageModal;
