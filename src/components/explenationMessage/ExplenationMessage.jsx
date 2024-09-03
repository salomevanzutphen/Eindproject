import React from 'react';
import './ExplenationMessage.css';

const ExplenationMessage = ({ show, onClose }) => {
    if (!show) {
        return null;
    }

    return (
        <div className="expl-modal-overlay">
            <div className="expl-modal-content">
                <button className="expl-modal-close" onClick={onClose}>×</button>
                <h2>How to use the cycle calendar</h2>
                <p>
                    The calendar is based on a 28 day cycle, with a 5 day average menstruation date.
                    Do you remember the last time you were on your period? Add the start date to the calendar
                    & we will calculate every phase of your cycle. Not sure when this was? No worries!
                    You can update the start date anytime, for example on the day that your period actually arrives.
                </p>
            </div>
        </div>
    );
};

export default ExplenationMessage;
