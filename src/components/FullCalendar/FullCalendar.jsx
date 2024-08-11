import React, { useState, useEffect } from 'react';
import './FullCalendar.css';


const FullCalendar = ({ onClose }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [phases, setPhases] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');


    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();


    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);
        const startOfDay = (date) => {
            return new Date(date.getFullYear(), date.getMonth(), date.getDate());
        };

        const days = [];
        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div className="full-calendar-day empty" key={`empty-${i}`} />);
        }
        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const phase = phases.find(phase => {
                const startDate = startOfDay(new Date(phase.startDate));
                const endDate = startOfDay(new Date(phase.endDate));
                endDate.setDate(endDate.getDate());  // Ensuring the end date is included
                return startDate <= date && date <= endDate;
            });
            let className = "full-calendar-day";
            if (phase) {
                if (phase.phaseName === 'Menstruation') className += " red";
                if (phase.phaseName === 'Follicular') className += " green";
                if (phase.phaseName === 'Ovulation') className += " orange";
                if (phase.phaseName === 'Luteal') className += " blue";
            }
            if (selectedDate && date.toDateString() === selectedDate.toDateString()) {
                className += " selected";
            }
            days.push(
                <div className={className} key={day} onClick={() => editMode && setSelectedDate(date)}>
                    {day}
                </div>
            );
        }
        return days;
    };


    const handlePrevMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1));
    const handleNextMonth = () => setCurrentDate(new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1));


    const handleSave = async () => {
        if (!selectedDate) return;
        const token = localStorage.getItem('token');
        if (!token) {
            setErrorMessage('Authentication token not found. Please log in again.');
            return;
        }


        // Adjusting date to include timezone offset
        const offset = selectedDate.getTimezoneOffset();
        const adjustedDate = new Date(selectedDate.getTime() - (offset * 60 * 1000));
        const dateToSend = adjustedDate.toISOString().split('T')[0];


        try {
            const response = await fetch('http://localhost:8080/cycles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                },
                body: JSON.stringify({ startDate: dateToSend })
            });
            if (!response.ok) {
                throw new Error(`Failed to save cycle, status: ${response.status}`);
            }
            const data = await response.json();
            setPhases(data.phases);
            setEditMode(false);
        } catch (error) {
            console.error('Error saving cycle:', error);
            setErrorMessage(error.message || 'Error saving cycle');
        }
    };


    useEffect(() => {
        const fetchUserCycle = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setErrorMessage('Authentication token not found. Please log in again.');
                return;
            }
            try {
                const response = await fetch(`http://localhost:8080/cycles/mycycle`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                if (!response.ok) {
                    throw new Error(`Failed to fetch cycle, status: ${response.status}`);
                }
                const data = await response.json();
                setPhases(data.phases);
            } catch (error) {
                console.error('Error fetching user cycle:', error);
                setErrorMessage(error.message || 'Error fetching user cycle');
            }
        };
        fetchUserCycle();
    }, []);


    return (
        <div className="full-calendar-overlay">
            <div className="full-calendar">
                <button className="close-button" onClick={onClose}>×</button>
                <div className="full-calendar-header">
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <span>
                       {currentDate.toLocaleString('default', { month: 'long' })} {currentDate.getFullYear()}
                   </span>
                    <button onClick={handleNextMonth}>&gt;</button>
                </div>
                <div className="full-calendar-grid">
                    {['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'].map((day, index) => (
                        <div className="full-calendar-day-name" key={index}>{day}</div>
                    ))}
                    {renderDays()}
                </div>
                <div className="full-calendar-actions">
                    <button className="edit-period-dates" onClick={() => setEditMode(true)}>Edit period dates</button>
                    <button
                        type="submit"
                        className={`save-button ${selectedDate ? 'active' : ''}`}
                        onClick={handleSave}
                        disabled={!selectedDate}
                    >
                        Save
                    </button>
                </div>
                {errorMessage && <p className="error-message">{errorMessage}</p>}
            </div>
        </div>
    );
};


export default FullCalendar;
