import React, { useState, useContext } from 'react';
import './ImageCard.css';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import DeleteConfirmation from '../../../components/deleteConfirmation/DeleteConfirmation.jsx';
import { AuthContext } from '../../../context/AuthContext';


const ImageCard = ({ selectedPost, onClose }) => {
    const navigate = useNavigate();
    const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
    const { roles } = useContext(AuthContext);

    if (!selectedPost) return null;

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
        setShowDeleteConfirmation(false);
        handleDelete();
    };

    const handleCancelDelete = () => {
        setShowDeleteConfirmation(false);
    };

    // Convert new lines to <br> tags
    const formatDescription = (text) => {
        return text.split('\n').map((str, index) => (
            <React.Fragment key={index}>
                {str}
                <br />
            </React.Fragment>
        ));
    };

    return (
        <div className="blogmodal" onClick={onClose}>
            <div className="blogmodal-content" onClick={(e) => e.stopPropagation()}>
                <img src={`data:image/jpeg;base64,${selectedPost.imgdata}`} alt={selectedPost.title} />
                <div className="blogpost-info">
                    <div className="blogpost-text">
                        <h2>{selectedPost.title}</h2>
                        <h3>{selectedPost.subtitle}</h3>
                        <p>{formatDescription(selectedPost.description)}</p>
                    </div>

                    {roles.length > 0 && roles[0].authority === 'ROLE_ADMIN' && (
                        <div className="admin-editing">
                            <button className="edit-button" onClick={handleEdit}>Edit</button>
                            <button className="delete-button" onClick={() => setShowDeleteConfirmation(true)}>Delete</button>
                        </div>
                    )}
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

export default ImageCard;
