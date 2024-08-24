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
                        Menstruation can lead to the loss of iron-rich blood. Iron is a critical component of hemoglobin, the protein in red blood cells responsible for transporting oxygen throughout the body. This supports energy levels and overall vitality, deficiency in iron can lead to fatigue and weakness.
                    </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Iron;