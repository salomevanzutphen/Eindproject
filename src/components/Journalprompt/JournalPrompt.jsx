import React, { useState, useEffect } from 'react';
import "./JournalPrompt.css";


const JournalPrompts = () => {
    const prompts = [
        "What coping mechanism do you opt for when you feel stressed? Could you improve this?",
        "Think of 3 people that are influencing your life positively at the moment and why.",
        "How do you stay motivated during challenging times, and what inspires you to keep going?",
        "What triggers emotions in you? What are you most sensitive to?",
        "What did you learn most from the people who raised you?",
        "How do you nurture your relationships?",
        "How can the people around you make you feel heard & appreciated? Have you communicated this to them / are they aware of this?",
        "Reflect on the past year. What are the biggest hurdles that are repeatedly in your way? Improvise on a new approach that could help you tackle it better.",
        "What are the 5 most important goals on your vision board?",
        "What is your definition of a balanced routine? Draw out your ideal weekly schedule.",
        "When was the last time you had some me-time?",
        "Think of a time where you betrayed your boundaries or morals in order to be accepted by the group. What unique qualities make you different? What kind of community would people with similar qualities be in?",
        "Reflect on an achievement that you are proud of. Did you doubt yourself a lot in the process? Would you say you have a good idea of your capabilities or do you need more self-trust?"
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

export default JournalPrompts;