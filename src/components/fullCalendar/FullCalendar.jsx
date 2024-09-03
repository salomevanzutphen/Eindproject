import React, { useState, useEffect } from 'react';
import './FullCalendar.css';
import { getDaysInMonth, getFirstDayOfMonth, findPhaseForDate, isSelectedDate } from '../../helpers/FullCalendarHelpers.jsx';

const FullCalendar = ({ onClose, onSave }) => {
    const [currentDate, setCurrentDate] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(null);
    const [phases, setPhases] = useState([]);
    const [editMode, setEditMode] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    useEffect(() => {
        const fetchUserCycle = async () => {
            const token = localStorage.getItem('token');
            if (!token) {
                setErrorMessage('Authentication token not found. Please log in again.');
                return;
            }
            try {
                const response = await fetch('http://localhost:8080/cycles', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                if (response.status === 404) {
                    setErrorMessage('Log the start date of your last menstruation.');
                    return;
                }
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

    const renderDays = () => {
        const year = currentDate.getFullYear();
        const month = currentDate.getMonth();
        const daysInMonth = getDaysInMonth(year, month);
        const firstDayOfMonth = getFirstDayOfMonth(year, month);

        const days = [];

        for (let i = 0; i < firstDayOfMonth; i++) {
            days.push(<div className="full-calendar-day empty" key={`empty-${i}`} />);
        }

        for (let day = 1; day <= daysInMonth; day++) {
            const date = new Date(year, month, day);
            const phase = findPhaseForDate(date, phases);
            let className = "full-calendar-day";
            if (phase) {
                if (phase.phaseName === 'Menstruation') className += " red";
                if (phase.phaseName === 'Follicular') className += " green";
                if (phase.phaseName === 'Ovulation') className += " orange";
                if (phase.phaseName === 'Luteal') className += " blue";
            }
            if (isSelectedDate(selectedDate, date)) {
                className += " selected";
            }
            if (editMode) {
                className += " editable";
            }
            days.push(
                <div
                    className={className}
                    key={day}
                    onClick={() => editMode && setSelectedDate(date)}
                >
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

        const today = new Date();
        const offset = selectedDate.getTimezoneOffset();
        const adjustedDate = new Date(selectedDate.getTime() - (offset * 60 * 1000));

        if (adjustedDate > today) {
            setErrorMessage('Please choose a date in the past or present.');
            return;
        }

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
            setErrorMessage('');
            if (onSave) {
                onSave(data);
            }
        } catch (error) {
            console.error('Error saving cycle:', error);
            setErrorMessage(error.message || 'Error saving cycle');
        }
    };

    return (
        <div className="full-calendar-overlay">
            <div className="full-calendar">
                <button className="close-button" onClick={() => { onClose(); window.location.reload(); }}>×</button>
                <div className="full-calendar-header">
                    <button onClick={handlePrevMonth}>&lt;</button>
                    <span>
                        {currentDate.toLocaleString('en-US', { month: 'long' })} {currentDate.getFullYear()}
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
                    <button
                        className={`period-button ${editMode ? 'grey' : ''}`}
                        onClick={() => setEditMode(true)}
                    >
                        Select Date
                    </button>
                    <button
                        type="submit"
                        className={`save-button ${selectedDate ? 'active' : ''}`}
                        onClick={handleSave}
                        disabled={!selectedDate}
                    >
                        Save
                    </button>
                </div>
                {errorMessage && (
                    <div className="error-message-container">
                        <p className="error-message">{errorMessage}</p>
                        {errorMessage.includes('Log the start date') && (
                            <p className="error-subtext">
                                If you don't remember the exact date, don't worry, just take a guess! When your period arrives, you can update your cycle for more accurate results.
                            </p>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
};

export default FullCalendar;
