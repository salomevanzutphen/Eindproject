import React from 'react';
import "./Zinc.css";

function Zinc3({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="zinc-container">
            <div className={`zinc ${backgroundColorClass}`} onClick={onClick}>
                <h3>Zinc</h3>
            </div>
            {showDescription && (
                <div className="zinc-description-container">
                    <div className="zinc-arrow"></div>
                    <div className="zinc-description">
                        <p>{description} </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Zinc3;