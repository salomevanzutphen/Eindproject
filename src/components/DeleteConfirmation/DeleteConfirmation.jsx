import React from 'react';
import './DeleteConfirmation.css';

const DeleteConfirmation = ({ onConfirm, onCancel }) => {
    return (
        <div className="delete-confirmation-overlay">
            <div className="delete-confirmation-box">
                <h2>Are you sure?</h2>
                <div className="delete-confirmation-actions">
                    <button className="confirm-button" onClick={onConfirm}>Delete</button>
                    <button className="cancel-button" onClick={onCancel}>Cancel</button>
                </div>
            </div>
        </div>
    );
};

export default DeleteConfirmation;
