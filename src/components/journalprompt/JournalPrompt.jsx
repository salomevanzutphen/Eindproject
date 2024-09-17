import { useState, useEffect } from 'react';
import "./JournalPrompt.css";


const JournalPrompt = () => {
    const prompts = [
        "What coping mechanism do you opt for when you feel stressed?",
        "What did you learn most from the people who raised you?",
        "What are the 5 most important goals on your vision board?",
        "What is your definition of a balanced routine?",
        "What do you want to be known for in this life?",
        "How do you handle criticism?",
        "How often do you resort to others before making a decision?",
        "What are your core values?",
        "What boundaries do you set to protect your well-being?",
        "What are the lessons you've learned from your biggest failures?",
        "What are your strategies for staying resilient in tough situations?",
        "What does living authentically mean to you?",
        "When did you last step out of your comfort zone?",
        "When do you feel most like yourself?"
    ];

    const getRandomPrompt = () => {
        const randomIndex = Math.floor(Math.random() * prompts.length);
        return prompts[randomIndex];
    };

    const [currentPrompt, setCurrentPrompt] = useState(getRandomPrompt);

    useEffect(() => {
        setCurrentPrompt(getRandomPrompt());
    }, []);

    const shufflePrompt = () => {
        setCurrentPrompt(getRandomPrompt());
    };

    return (
        <div className="journalprompts">
            <h3>Your journal inspo:</h3>
            <p>{currentPrompt}</p>
            <button className="journal-button" onClick={shufflePrompt}>Shuffle</button>
        </div>
    );
};

export default JournalPrompt;