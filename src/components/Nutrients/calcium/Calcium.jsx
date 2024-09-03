import React from 'react';
import "./Calcium.css";

function Calcium({ backgroundColorClass, description, showDescription, onClick }){

    return (
        <div className="calcium-container">
            <div className={`calcium ${backgroundColorClass}`} onClick={onClick}>
                <h3>Calcium</h3>
            </div>
            {showDescription && (
                <div className="calcium-description">

                    <div className="calcium-description-content">
                        <p>{description}</p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Calcium;