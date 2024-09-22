import "./Indole.css";

function Indole3Carbinol({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="indole-container">
            <div className={`indole ${backgroundColorClass}`} onClick={onClick}>
                <h3>Indole-3 Carbinol</h3>
            </div>
            {showDescription && (
                <div className="indole-description">

                    <div className="indole-description-content">
                        <p>
                            {description}
                        </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Indole3Carbinol;