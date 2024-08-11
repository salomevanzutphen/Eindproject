import React, { useState, useEffect } from 'react';
import './Calendar.css';
import FullCalendar from '../FullCalendar/FullCalendar.jsx';

const Calendar = ({ onPhaseChange }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [showFullCalendar, setShowFullCalendar] = useState(false);
    const [phases, setPhases] = useState([]);

    const getNextSixDays = (date) => {
        const dates = [];
        for (let i = 1; i <= 6; i++) {
            const newDate = new Date(date);
            newDate.setDate(date.getDate() + i);
            dates.push(newDate);
        }
        return dates;
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

    const fetchCycle = async () => {
        try {
            const token = localStorage.getItem('token');
            const response = await fetch('http://localhost:8080/cycles/mycycle', {
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
            updateCurrentPhase(currentDate);
        } catch (error) {
            console.error('Error fetching cycle:', error);
        }
    };

    useEffect(() => {
        fetchCycle();
    }, []);

    const getPhaseForDate = (date) => {
        const startOfDay = (date) => new Date(date.getFullYear(), date.getMonth(), date.getDate());

        // Ensure the 'date' parameter is set to the start of the day for accurate comparison
        const targetDate = startOfDay(date);

        return phases.find(phase => {
            const startDate = startOfDay(new Date(phase.startDate));
            const endDate = new Date(new Date(phase.endDate).setHours(23, 59, 59, 999)); // Ensuring the end date includes the entire day

            return targetDate >= startDate && targetDate <= endDate;
        });
    };


    const updateCurrentPhase = (date) => {
        const phase = getPhaseForDate(date);
        if (phase) {
            onPhaseChange(phase.phaseName);
        } else {
            onPhaseChange("No Phase"); // Or "Your cycle calendar" if no phases are set
        }
    };

    const formatDate = (date) => {
        return date.toLocaleString('default', { weekday: 'short' }).toUpperCase(); // Only weekday is shown
    };

    const nextSixDays = getNextSixDays(currentDate);

    const currentPhase = getPhaseForDate(currentDate);
    const title = currentPhase ? currentPhase.phaseName : (phases.length === 0 ? "Your cycle calendar" : "No Phase");
    const phaseClass = currentPhase ? currentPhase.phaseName.toLowerCase() : "";

    return (
        <div className="calendar-container">
            <h2 className={phaseClass}>{title}</h2>
            <div className="calendar-date-display">
                <button onClick={handlePrevDay}>&lt;</button>
                <div className={`calendar-current-day ${phaseClass}`}>
                    <div className="calendar-day-number">{currentDate.getDate()}</div>
                    <div className="calendar-day-name">{currentDate.toLocaleString('default', { weekday: 'long' }).toUpperCase()}</div>
                </div>
                <button onClick={handleNextDay}>&gt;</button>
            </div>
            <div className="calendar-month-year">
                {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
            </div>
            <div className="calendar-grid">
                {nextSixDays.map((date, index) => {
                    const phase = getPhaseForDate(date);
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
            </div>
            {showFullCalendar && <FullCalendar onClose={() => { setShowFullCalendar(false); fetchCycle(); }} />}
        </div>
    );
};

export default Calendar;
