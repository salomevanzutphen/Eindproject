import './Magnesium.css';

function Magnesium({ backgroundColorClass, description, showDescription, onClick }){

    return (
        <div className="magnesium-container">
            <div className={`magnesium ${backgroundColorClass}`} onClick={onClick}>
                <h3>Magnesium</h3>
            </div>
            {showDescription && (
                <div className="magnesium-description">

                    <div className="magnesium-description-content">
                        <p className="magnesium-intro">
                            {description} </p>

                    </div>
                </div>
            )}
        </div>
    );
}

export default Magnesium;