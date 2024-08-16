import React, { useState, useEffect } from 'react';
import './MySync.css';
import Phase1 from "../Phases/Phase1/Phase1.jsx";
import Phase2 from "../Phases/Phase2/Phase2.jsx";
import Phase3 from "../Phases/Phase3/Phase3.jsx";
import Phase4 from "../Phases/Phase4/Phase4.jsx";
import WelcomePhase from "../Phases/WelcomePhase/WelcomePhase.jsx";
import axios from 'axios';

function MySync() {
    const [currentPhase, setCurrentPhase] = useState('Welcome');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);

    useEffect(() => {
        checkAuthenticationAndFetchCycleData();
    }, []);

    const checkAuthenticationAndFetchCycleData = () => {
        const token = localStorage.getItem('token');
        if (token) {
            setIsAuthenticated(true);
            fetchCycleData(token);
        } else {
            setIsAuthenticated(false);
            setCurrentPhase('Welcome');
        }
    };

    const fetchCycleData = async (token) => {
        setLoading(true);

        const config = {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        };

        try {
            const response = await axios.get('http://localhost:8080/cycles/mycycle', config);
            if (response.status === 200 && response.data && response.data.phases) {
                if (response.data.phases.length === 0) {
                    // No cycle data available, render the welcome phase
                    setCurrentPhase('Welcome');
                } else {
                    determineCurrentPhase(response.data.phases);
                }
            } else {
                throw new Error("Invalid data structure or response");
            }
        } catch (error) {
            console.error('Error fetching cycle data:', error);
            setError('Failed to fetch cycle data. Please try again later.');
            setCurrentPhase('Welcome');
        } finally {
            setLoading(false);
        }
    };

    const determineCurrentPhase = (phases) => {
        const today = new Date();
        today.setHours(0, 0, 0, 0);

        const currentPhase = phases.find(phase => {
            const startDate = new Date(phase.startDate);
            const endDate = new Date(phase.endDate);
            startDate.setHours(0, 0, 0, 0);
            endDate.setHours(23, 59, 59, 999);
            return today >= startDate && today <= endDate;
        });

        if (currentPhase) {
            setCurrentPhase(currentPhase.phaseName);
        } else {
            setCurrentPhase('Welcome');
        }
    };

    const renderPhaseComponent = () => {
        if (loading) {
            return <div>Loading...</div>;
        }

        if (error || !isAuthenticated) {
            // Render the welcome phase if there's an error or if the user is not authenticated
            return <WelcomePhase />;
        }

        switch (currentPhase) {
            case 'Menstruation':
                return <Phase1 />;
            case 'Follicular':
                return <Phase2 />;
            case 'Ovulation':
                return <Phase3 />;
            case 'Luteal':
                return <Phase4 />;
            default:
                return <WelcomePhase />;
        }
    };

    return (
        <div className="mysync">
            {renderPhaseComponent()}
        </div>
    );
}

export default MySync;
