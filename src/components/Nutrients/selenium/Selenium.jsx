import React, { useState } from "react";
import "./Selenium.css";


function Selenium2({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="selenium-container">
            <div className={`selenium ${backgroundColorClass}`} onClick={onClick}>
                <h3>Selenium</h3>
            </div>
            {showDescription && (
                <div className="selenium-description">

                    <div className="selenium-description-content">
                        <p>{description}
                        </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Selenium2;