import React, { useState, useEffect } from 'react';
import './Calendar.css';
import FullCalendar from '../FullCalendar/FullCalendar.jsx';

const Calendar = () => {
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

    const handlePrevDay = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() - 1)));
    const handleNextDay = () => setCurrentDate(new Date(currentDate.setDate(currentDate.getDate() + 1)));

    const nextSixDays = getNextSixDays(currentDate);

    const fetchCycle = async () => {
        try {
            const response = await fetch('http://localhost:8080/cycles/1'); // Fetch the current cycle for the user (ID 1 as an example)
            const data = await response.json();
            setPhases(data.phases);
        } catch (error) {
            console.error('Error fetching cycle:', error);
        }
    };

    useEffect(() => {
        fetchCycle();
    }, []);

    const getPhaseForDate = (date) => {
        return phases.find(phase => date >= new Date(phase.startDate) && date <= new Date(phase.endDate));
    };

    return (
        <div className="calendar-container">
            <h3>Welcome to your</h3>
            <h2>Menstruation Phase</h2>
            <div className="calendar-date-display">
                <button onClick={handlePrevDay}>&lt;</button>
                <div>
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
                        if (phase.phaseName === 'Menstruation') className += " red";
                        if (phase.phaseName === 'Follicular') className += " green";
                        if (phase.phaseName === 'Ovulation') className += " orange";
                        if (phase.phaseName === 'Luteal') className += " blue";
                    }
                    return (
                        <div className={className} key={index}>
                            <div className="calendar-date-number">{date.getDate()}</div>
                            <div className="calendar-day-name">{date.toLocaleString('default', { weekday: 'short' }).toUpperCase()}</div>
                        </div>
                    );
                })}
            </div>
            <div className="calendar-buttons">
                <button className="log-period">Log period</button>
                <button className="view-calendar" onClick={() => setShowFullCalendar(true)}>Calendar</button>
            </div>
            {showFullCalendar && <FullCalendar onClose={() => { setShowFullCalendar(false); fetchCycle(); }} />}
        </div>
    );
};

export default Calendar;
