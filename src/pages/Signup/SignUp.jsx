import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import SuccessModal from './SignUpSuccess/SignUpSuccess.jsx'; // Import the SuccessModal component

const SignUp = ({ close }) => { // Receive the close function as a prop

    // State for signup data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    // Functionality state
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, setSuccess] = useState(false); // State to control modal visibility

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        toggleLoading(true);

        try {
            await axios.post('http://localhost:8080/users', {
                username: username,
                email: email,
                password: password,
                name: name,
                birthday: birthday,
            });

            // Show success modal and hide the signup form
            setSuccess(true);

        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    // Close modal and navigate to /connect page
    const closeModal = () => {
        setSuccess(false);
        close();  // Close the sign-up modal as well
    };

    return (
        <div>
            {success ? (
                <SuccessModal close={closeModal} />
            ) : (
                <div className="signup-container">
                    <button className="close-button" onClick={close}>X</button>
                    <h1>Welcome, join today!</h1>
                    <form className="signup-form" onSubmit={handleSubmit}>
                        <div className="form-group">
                            <label htmlFor="username">Username</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                value={username}
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="birthday">Birthday</label>
                            <input
                                type="date"
                                id="birthday"
                                name="birthday"
                                value={birthday}
                                onChange={(e) => setBirthday(e.target.value)}
                                required
                            />
                        </div>
                        <button type="submit" className="signup-button">
                            {loading ? 'Signing Up...' : 'Sign Up'}
                        </button>
                        {error && <p className="error-message">There was an error signing up. Please try again.</p>}
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignUp;
