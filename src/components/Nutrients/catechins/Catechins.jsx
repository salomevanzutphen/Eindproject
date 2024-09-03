import React from 'react';
import "./Catechins.css";
function Catechins({ backgroundColorClass, description, showDescription, onClick }){


    return (
        <div className="catechins-container">
            <div className={`catechins ${backgroundColorClass}`} onClick={onClick}>
                <h3>Catechins</h3>
            </div>
            {showDescription && (
                <div className="catechins-description">
                    <div className="catechins-description-content">
                        <p>
                            {description}
                        </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Catechins;