import React from 'react';
import './ImageModal.css';
import { useNavigate } from 'react-router-dom';

const ImageModal = ({ selectedPost, onClose, onEdit, onDelete }) => {
    const navigate = useNavigate();

    if (!selectedPost) return null;

    const handleEdit = () => {
        navigate(`/edit-post/${selectedPost.id}`, { state: { post: selectedPost } });
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
                        <div className="admin-editing">
                            <button className="edit-button" onClick={handleEdit}>Edit</button>
                            <button className="delete-button" onClick={() => onDelete(selectedPost.id)}>Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageModal;
