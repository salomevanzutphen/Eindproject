import { useState, useContext } from 'react';
import './Connect.css';
import Login from './login/Login.jsx';
import SignUp from './signUp/SignUp.jsx';
import logo2 from '../../assets/logotrans.png';
import { AuthContext } from '../../context/AuthContext.jsx';

const Connect = () => {
    const [showLogin, setShowLogin] = useState(false);
    const [showSignUp, setShowSignUp] = useState(false);
    const { isAuth, logout } = useContext(AuthContext);

    return (
        <div className="connect-container">
            {showLogin && (
                <div className="login-modal">
                    <Login close={() => setShowLogin(false)} />
                </div>
            )}
            {showSignUp && (
                <div className="signup-modal">
                    <SignUp close={() => setShowSignUp(false)} />
                </div>
            )}

            <div className="overlay" style={{ display: (showLogin || showSignUp) ? 'block' : 'none' }}></div>
            <div className="connectpage">
                <img className="transparent-logo" src={logo2} alt="Living in Sync" />
                <div className="connect-innercontainer">
                    <h1>Start tracking your cycle today!</h1>
                    <p>
                        Welcome to living in sync! Transform your health, by connecting to your cycle’s rhythm. However, please remember that all the information provided here is meant to guide, not replace, professional medical advice. We can't be held responsible for any outcomes from using the information provided. Its purpose is merely to help spread awareness and help women live a healthier, more mindful lifestyle. </p>
                </div>
                <div className="connect-buttons">
                    {isAuth ? (
                        <button onClick={logout}>Sign Out</button>
                    ) : (
                        <>
                            <button onClick={() => setShowLogin(true)}>Log in</button>
                            <button onClick={() => setShowSignUp(true)}>Sign up</button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Connect;
