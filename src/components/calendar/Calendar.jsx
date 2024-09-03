import React, { useState, useEffect } from 'react';
import './Calendar.css';
import FullCalendar from '../fullCalendar/FullCalendar.jsx';
import questionmark from "../../assets/question.png";
import ExplenationMessage from '../explenationMessage/ExplenationMessage.jsx';
import { getNextSixDays, getPhaseForDate, formatDate } from '../../helpers/calendarHelpers.jsx';

const Calendar = () => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showFullCalendar, setShowFullCalendar] = useState(false);
    const [phases, setPhases] = useState([]);
    const [currentPhase, setCurrentPhase] = useState(''); // State to store current phase
    const [showExplenation, setShowExplenation] = useState(false);

    useEffect(() => {
        fetchCycle();
    }, []);

    const fetchCycle = async () => {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                throw new Error("User is not authenticated");
            }

            const response = await fetch('http://localhost:8080/cycles', {
                method: 'GET',
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setPhases(data.phases);
            updateCurrentPhase(new Date(), data.phases); // Update phase with fetched data immediately
        } catch (error) {
            console.error('Error fetching cycle:', error);
        }
    };

    const updateCurrentPhase = (date, fetchedPhases = phases) => {
        const phase = getPhaseForDate(date, fetchedPhases);
        setCurrentPhase(phase ? phase.phaseName : "No Phase");
    };

    const handlePrevDay = () => {
        const newDate = new Date(currentDate.setDate(currentDate.getDate() - 1));
        setCurrentDate(newDate);
        updateCurrentPhase(newDate);
    };

    const handleNextDay = () => {
        const newDate = new Date(currentDate.setDate(currentDate.getDate() + 1));
        setCurrentDate(newDate);
        updateCurrentPhase(newDate);
    };

    const nextSixDays = getNextSixDays(currentDate);
    const phaseClass = currentPhase ? currentPhase.toLowerCase() : "";

    return (
        <div className="calendar-container">
            {/* Display current phase */}
            <h2 className={phaseClass}>{currentPhase}</h2>
            <div className="calendar-date-display">
                <button onClick={handlePrevDay}>&lt;</button>
                <div className={`calendar-current-day ${phaseClass}`}>
                    <div className="calendar-day-number">{currentDate.getDate()}</div>
                    <div className="calendar-day-name">{currentDate.toLocaleString('en-US', { weekday: 'long' }).toUpperCase()}</div>
                </div>
                <button onClick={handleNextDay}>&gt;</button>
            </div>
            <div className="calendar-month-year">
                {currentDate.toLocaleString('en-US', { month: 'long' })} {currentDate.getFullYear()}
            </div>
            <div className="calendar-grid">
                {nextSixDays.map((date, index) => {
                    const phase = getPhaseForDate(date, phases);
                    let className = "calendar-day";
                    if (phase) {
                        className += ` ${phase.phaseName.toLowerCase()}`;
                    }
                    return (
                        <div className={className} key={index}>
                            <div className="calendar-date-number">{date.getDate()}</div>
                            <div className="calendar-day-name">{formatDate(date)}</div>
                        </div>
                    );
                })}
            </div>
            <div className="calendar-buttons">
                <button className="view-calendar" onClick={() => setShowFullCalendar(true)}>Calendar</button>
                <img
                    className="questionmark"
                    src={questionmark}
                    alt="questionmark"
                    onClick={() => setShowExplenation(true)}
                />
            </div>
            {showFullCalendar && <FullCalendar onClose={() => { setShowFullCalendar(false); fetchCycle(); }} />}
            <ExplenationMessage show={showExplenation} onClose={() => setShowExplenation(false)} />
        </div>
    );
};

export default Calendar;
