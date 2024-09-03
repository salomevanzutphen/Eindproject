import React from 'react';
import "./VitaminB.css";

function VitaminB({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="vitaminB-container">
            <div className={`vitaminB ${backgroundColorClass}`} onClick={onClick}>
                <h3>B</h3>
            </div>
            {showDescription && (
                <div className="vitaminB-description">
                    <div className="vitaminB-description-content">
                        <p>
                            {description} </p>

                    </div>
                </div>
                )}
        </div>
    );
}

export default VitaminB;