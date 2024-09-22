import './SignUpSuccess.css';

const SignUpSuccess = ({ close }) => {
    return (
        <div className="success-modal-overlay">
            <div className="success-modal-content">
                <button className="success-close-button" onClick={close}>X</button>
                <h2>You are signed up!</h2>
                <p>You can now log in with your new details.</p>
            </div>
        </div>
    );
};

export default SignUpSuccess;