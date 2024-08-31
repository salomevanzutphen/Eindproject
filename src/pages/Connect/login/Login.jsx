import { useContext, useState } from 'react';
import './Login.css';
import { AuthContext } from '../../../context/AuthContext.jsx';
import PropTypes from 'prop-types';
import axios from "axios";

const Login = ({ close }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    const { login } = useContext(AuthContext);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(false);
        setLoading(true);

        try {
            const result = await axios.post('http://localhost:8080/authenticate', {
                username: username,
                password: password,
            }, {
                headers: {
                    "Content-Type": "application/json",
                }
            });

            console.log("Login successful", result.data);
            login(result.data.jwt);

        } catch (e) {
            console.error("Login failed", e);
            setError(true);
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

                <div className="loginbutton-wrapper">
                    <button
                        type="submit"
                        className="login-button"
                        style={{ backgroundColor: loading ? '#8DAA9D' : '#90BE6D' }}
                        disabled={loading}
                    >
                        {loading ? 'Logging In...' : 'Log In'}
                    </button>
                </div>

                {error && <p className="error-message">Error logging in. Please try again.</p>}
            </form>
        </div>
    );
};

Login.propTypes = {
    close: PropTypes.func.isRequired,
};

export default Login;
