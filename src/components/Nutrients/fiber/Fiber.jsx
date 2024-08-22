import React, { useState } from "react";
import "./Fiber.css";



function Fiber({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="fiber-container">
            <div className={`fiber ${backgroundColorClass}`} onClick={onClick}>
                <h3>Fiber</h3>
            </div>
            {showDescription && (
                <div className="fiber-description">
                    <div className="fiber-description-content">
                        <p>
                            {description} </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Fiber;