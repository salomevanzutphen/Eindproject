import React from 'react';
import "./VitaminD.css";

function VitaminD({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="vitaminD-container">
            <div className={`vitaminD ${backgroundColorClass}`} onClick={onClick}>
                <h3>D</h3>
            </div>
            {showDescription && (
                <div className="vitaminD-description">
                    <div className="vitaminD-description-content">
                        <p>
                            {description}
                          </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default VitaminD;
