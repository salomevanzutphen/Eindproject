import { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../../context/AuthContext.jsx';
import axios from 'axios';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';

const Login = ({ close }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, toggleError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault();
        toggleError(false);
        setLoading(true);

        try {
            // Send the login request
            const result = await axios.post(
                'http://localhost:8080/authenticate',
                {
                    username: username,
                    password: password,
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                    },
                }
            );

            console.log("Login successful", result.data);

            // Extract JWT and roles from the response data
            const { jwt, roles } = result.data;

            if (!jwt) {
                throw new Error("Token is missing");
            }

            if (!roles || !Array.isArray(roles) || roles.length === 0) {
                throw new Error("Roles are missing or improperly formatted");
            }

            // Pass both JWT and roles to the login function
            login(jwt, roles);

            // Redirect based on the user's role
            if (roles.includes('ROLE_ADMIN')) {
                navigate('/blogPage');
            } else if (roles.includes('ROLE_USER')) {
                navigate('/mysync');
            } else {
                // Default redirection if no role matches
                navigate('/');
            }

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
