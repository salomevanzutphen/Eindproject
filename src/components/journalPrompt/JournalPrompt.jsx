import React, { useState, useEffect } from 'react';
import "./JournalPrompt.css";


const JournalPrompts = () => {
    const prompts = [
        "What coping mechanism do you opt for when you feel stressed? Is it healthy for you?",
        "Do the important people in your life know how to nurture and be there for you?",
        "What is your communication style when you feel upset? Do you know how to express yourself effectively when you're not feeling your best?",
        "Reflect on the past year. What (unexpected) changes made you grow and how?",
        "What are the 5 most important goals on your vision board? Why are these goals important for you, what motivates you?",
        "What is your definition of a balanced routine? Draw out your ideal weekly schedule and compare it to your current lifestyle.",
        "When was the last time you had some me-time?",
        "When do you feel most like yourself?",
        "What has been the hardest thing to forgive yourself for?",
        "What risks are you scared of taking, what are you afraid to lose?",
        "What are your core values? Do your choices align with them?",
        "When do you feel most confident?",
        "When did you last feel insecure?",
        "What song do you identify with mostly during this time?",
        "What would you do if you knew you could not fail?"
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
            <h3>Your Journal Inspo:</h3>
            <p>{currentPrompt}</p>
            <button className="journal-button" onClick={shufflePrompt}>Shuffle</button>
        </div>
    );
};

export default JournalPrompts;