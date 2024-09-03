import React from 'react';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({ text, backgroundColor, onClick, style, ...props }) => {
    return (
        <button
            className="custom-button"
            onClick={onClick}
            style={{ backgroundColor, ...style }}
            {...props}
        >
            {text}
        </button>
    );
};

Button.propTypes = {
    text: PropTypes.string.isRequired,
    backgroundColor: PropTypes.string,
    onClick: PropTypes.func.isRequired,
    style: PropTypes.object,
};

Button.defaultProps = {
    backgroundColor: '#e0e0e0',
    style: {},
};

export default Button;
