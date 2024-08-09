import React, { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ close }) => {  // Add a close function prop

    // State for signup data
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    // Functionality state
    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const navigate = useNavigate();

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
            //terug naar de connect pagina wanneer registratie gelukt is
            navigate('/connect');
        } catch (e) {
            console.error(e);
            toggleError(true);
        }

        toggleLoading(false);
    }

    return (
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
    );
};

export default SignUp;
