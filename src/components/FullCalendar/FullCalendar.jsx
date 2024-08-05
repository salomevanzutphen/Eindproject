import React, { useState, useEffect } from 'react';
import './FullCalendar.css';

const FullCalendar = ({ onClose }) => {
    const [currentDate, setCurrentDate] = useState(new Date(2024, 6, 1)); // Start with July 2024
    const [selectedDate, setSelectedDate] = useState(null);
    const [phases, setPhases] = useState([]);
    const [editMode, setEditMode] = useState(false);

    const getDaysInMonth = (year, month) => new Date(year, month + 1, 0).getDate();
    const getFirstDayOfMonth = (year, month) => new Date(year, month, 1).getDay();

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
            const phase = phases.find(phase => date >= new Date(phase.startDate) && date <= new Date(phase.endDate));
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
        try {
            console.log('Selected date:', selectedDate.toISOString().split('T')[0]); // Debug log
            const response = await fetch('http://localhost:8080/cycles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ startDate: selectedDate.toISOString().split('T')[0] }),
            });
            if (!response.ok) {
                throw new Error('Failed to save cycle');
            }
            const data = await response.json();
            console.log('Phases received:', data.phases); // Debug log
            setPhases(data.phases);
            setEditMode(false);
        } catch (error) {
            console.error('Error saving cycle:', error);
        }
    };

    useEffect(() => {
        const fetchCycle = async () => {
            try {
                const response = await fetch('http://localhost:8080/cycles/1'); // Fetch the current cycle for the user (ID 1 as an example)
                const data = await response.json();
                setPhases(data.phases);
            } catch (error) {
                console.error('Error fetching cycle:', error);
            }
        };
        fetchCycle();
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
                    <button className="save-button" onClick={handleSave}>Save</button>
                </div>
            </div>
        </div>
    );
};

export default FullCalendar;
