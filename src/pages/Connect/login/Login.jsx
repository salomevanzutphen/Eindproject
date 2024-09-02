import { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../../context/AuthContext.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';

const Login = ({ close }) => {  // Accept a 'close' function prop
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        setLoading(true);

        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password,
            });

            console.log("Login successful", result.data);
            login(result.data.jwt);
        } catch (e) {
            console.error("Login failed", e);
            toggleError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="login-container">
            <button className="close-button" onClick={close}>X</button>
            <h1>Welcome back!</h1>
            <form className="login-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="login-button">
                    {loading ? 'Logging In...' : 'Log In'}
                </button>
                {error && <p className="error-message">Error logging in. Please try again.</p>}
            </form>
        </div>
    );
};

Login.propTypes = {
    close: PropTypes.func.isRequired,
};

export default Login;
