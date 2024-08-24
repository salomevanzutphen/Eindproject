import { useState } from 'react';
import './SignUp.css';
import axios from 'axios';
import SuccessModal from '../../../components/signUpSuccess/SignUpSuccess.jsx';

const SignUp = ({ close }) => {


    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [birthday, setBirthday] = useState('');

    const [error, toggleError] = useState(false);
    const [loading, toggleLoading] = useState(false);
    const [success, setSuccess] = useState(false);

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

            setSuccess(true);

        } catch (e) {
            console.error(e);
            toggleError(true);
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
