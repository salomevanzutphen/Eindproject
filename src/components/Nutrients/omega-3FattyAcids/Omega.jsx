import React, { useState } from "react";
import "./Omega.css";


function Omega3({ backgroundColorClass, description, showDescription, onClick }){

    return (
        <div className="omega-container">
            <div className={`omega ${backgroundColorClass}`} onClick={onClick}>
                <h3>Omega-3 Fatty Acids</h3>
            </div>
            {showDescription && (
                <div className="omega-description-container">
                    <div className="omega-arrow"></div>
                    <div className="omega-description">
                        <p>
                            {description}
                        </p>


                    </div>
                </div>
            )}
        </div>
    );
}

export default Omega3;