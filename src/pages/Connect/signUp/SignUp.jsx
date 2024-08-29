import { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import SuccessModal from '../../../components/signUpSuccess/SignUpSuccess.jsx';
import Button from '../../../components/button/Button.jsx';

const SignUp = ({ close }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const [usernameError, setUsernameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [generalError, setGeneralError] = useState('');
    const [loading, toggleLoading] = useState(false);
    const [success, setSuccess] = useState(false);

    const [passwordError, setPasswordError] = useState('');

    function validatePassword(password) {
        if (password.length < 8) {
            setPasswordError('Password must be at least 8 characters long.');
            return false;
        }
        if (!/[a-z]/.test(password)) {
            setPasswordError('Password must contain at least one lowercase letter.');
            return false;
        }
        if (!/[A-Z]/.test(password)) {
            setPasswordError('Password must contain at least one uppercase letter.');
            return false;
        }
        setPasswordError('');
        return true;
    }

    async function handleSubmit(e) {
        e.preventDefault();
        setUsernameError('');
        setEmailError('');
        setGeneralError('');
        toggleLoading(true);


        if (!validatePassword(password)) {
            toggleLoading(false);
            return;
        }

        try {
            await axios.post('http://localhost:8080/users', {
                username: username,
                email: email,
                password: password,
                name: name,
                birthday: birthday,
            });

            setSuccess(true);
        } catch (e) {
            console.error("Signup failed:", e.response);
            if (e.response && e.response.data) {
                const errorMessage = e.response.data;
                if (errorMessage.includes("Username is already taken")) {
                    setUsernameError('Username is already taken.');
                } else if (errorMessage.includes("Email already exists")) {
                    setEmailError('Email is already taken.');
                } else {
                    setGeneralError('There was an error signing up. Please try again.');
                }
            } else {
                setGeneralError('There was an error signing up. Please try again.');
            }
        }

        toggleLoading(false);
    }

    const closeModal = () => {
        setSuccess(false);
        close();
    };

    return (
        <div>
            {success ? (
                <SuccessModal close={closeModal} />
            ) : (
                <div className="signup-container">
                    <button className="signup-close-button" onClick={close}>X</button>
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
                            {usernameError && <p className="error-message">{usernameError}</p>}
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
                            {passwordError && <p className="error-message">{passwordError}</p>}
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
                            {emailError && <p className="error-message">{emailError}</p>}
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

                        <div className="signupbutton-wrapper">
                            <Button
                                type="submit"
                                text={loading ? 'Signing Up...' : 'Sign Up'}
                                backgroundColor="#90BE6D"
                                onClick={handleSubmit}
                            />
                        </div>

                        {generalError && <p className="error-message">{generalError}</p>}
                    </form>
                </div>
            )}
        </div>
    );
};

export default SignUp;
