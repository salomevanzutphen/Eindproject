import React from "react";
import './WelcomePhase.css';
import Calendar from "../../../components/Calendar/Calendar.jsx";

function WelcomePhase() {
    return (
        <div className="welcome-phase-wrapper">
            <h1>Welcome to Your Cycle Calendar</h1>

            <div className="welcome-phase-innercontainer">
            <Calendar />
            <div className="welcome-info">
                <p>This is your personalised cycle tracker. You can look into the future to see when your phases occur. Each phase has its own set of tips & advice, which will be made available when you are in it.

                </p>
                <h3>Let's get started!</h3>
                <ul>
                    <li>Click on the ‘Calendar’ button. this should open the full calendar.
                        </li>
                    <li>Click on ‘edit period date’ and select the last startdate of your period.</li>
                    <li>Save the date and close the calendar. Now you will receive all the lifestyle guidance for the phase you’re currently in!
                    </li>
                </ul>

            </div>
            </div>
        </div>
    );
}

export default WelcomePhase;
