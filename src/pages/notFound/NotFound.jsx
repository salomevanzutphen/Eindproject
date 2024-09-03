import React from 'react';
import './NotFound.css';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
    const navigate = useNavigate();

    const handleRedirect = () => {
        navigate('/');
    };

    return (
        <div className="not-found-container">
            <h1>404</h1>
            <p>Sorry! The page you're looking for doesn't exist...</p>
            <button onClick={handleRedirect}>Go to Homepage</button>
        </div>
    );
};

export default NotFound;
