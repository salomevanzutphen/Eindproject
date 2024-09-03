import React from 'react';
import "./VitaminC.css";

function VitaminC({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="vitaminC-container">
            <div className={`vitaminC ${backgroundColorClass}`} onClick={onClick}>
                <h3>C</h3>
            </div>
            {showDescription && (
                <div className="vitaminC-description">

                    <div className="vitaminC-description-content">
                        <p className="vitaminC-intro">
                            {description} </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default VitaminC;