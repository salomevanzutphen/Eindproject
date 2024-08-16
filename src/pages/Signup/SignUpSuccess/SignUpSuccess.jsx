import React from 'react';
import './SignUpSuccess.css';

const SignUpSuccess = ({ close }) => {
    return (
        <div className="modal-overlay">
            <div className="modal-content">
                <button className="close-button" onClick={close}>X</button>
                <h2>Sign Up Successful!</h2>
                <p>You can now log in with your new details.</p>
            </div>
        </div>
    );
};

export default SignUpSuccess;