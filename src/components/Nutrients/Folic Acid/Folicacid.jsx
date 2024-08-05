import React, { useState } from "react";
import "./Folicacid.css";


function Folicacid({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="folicacid-container">
            <div className={`folicacid ${backgroundColorClass}`} onClick={onClick}>
                <h3>Folic Acid</h3>
            </div>
            {showDescription && (
                <div className="folicacid-description">
                    <div className="folicacid-arrow"></div>
                    <div className="folicacid-description-content">
                        <p>
                            {description}
                        </p>



                    </div>
                </div>
            )}
        </div>
    );
}

export default Folicacid;