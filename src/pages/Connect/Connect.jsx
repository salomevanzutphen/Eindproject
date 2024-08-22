import React, { useState, useContext } from 'react';
import './Connect.css';
import Login from './login/Login.jsx';
import SignUp from './signUp/SignUp.jsx';
import logo2 from '../../assets/logotrans.png';
import { AuthContext } from '../../context/AuthContext.jsx'; // Ensure this path is correct

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
                        Join our community to stay in sync with your wellness journey.
                        Here, we value your health data and ensure it's used to enhance your well-being.
                        We encourage all users to consult with a healthcare professional before making health decisions.
                        Imagine extra text just to fill up the space and give any extra information about the health concerns,
                        privacy concerns and everything in between.
                    </p>
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
