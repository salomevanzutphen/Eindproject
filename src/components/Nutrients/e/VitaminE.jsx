import React, { useState } from "react";
import "./VitaminE.css";


function VitaminE({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="vitaminE-container">
            <div className={`vitaminE ${backgroundColorClass}`}  onClick={onClick}>
                <h3>E</h3>
            </div>
            {showDescription && (
                <div className="vitaminE-description">

                    <div className="vitaminE-description-content">
                        <p>
                            {description} </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default VitaminE;