import React from 'react';
import "./Glycine.css";

function Glycine({ backgroundColorClass, description, showDescription, onClick }){

    return (
        <div className="glycine-container">
            <div className={`glycine ${backgroundColorClass}`} onClick={onClick}>
                <h3>Glycine</h3>
            </div>
            {showDescription && (
                <div className="glycine-description">

                    <div className="glycine-description-content">
                        <p>
                            {description}
                        </p>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Glycine;