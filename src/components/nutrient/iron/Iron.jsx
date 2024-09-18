import './Iron.css';

function Iron({ backgroundColorClass, description, showDescription, onClick }){
    return (
        <div className="iron-container">
            <div className={`iron ${backgroundColorClass}`} onClick={onClick}>
                <h3>Iron</h3>
            </div>
            {showDescription && (
                <div className="iron-description">
                    <div className="iron-description-content">
                        <p className="iron-intro">
                            {description}
                    </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Iron;