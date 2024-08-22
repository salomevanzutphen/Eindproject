import React, { useState } from "react";
import "./Iodine.css";


function Iodine({ backgroundColorClass, description, showDescription, onClick }){

    return (
        <div className="iodine-container">
            <div className={`iodine ${backgroundColorClass}`} onClick={onClick}>
                <h3>Iodine</h3>
            </div>
            {showDescription && (
                <div className="iodine-description">

                    <div className="iodine-description-content">
                        <p>
                            {description}
                        </p>



                    </div>
                </div>
            )}
        </div>
    );
}

export default Iodine;