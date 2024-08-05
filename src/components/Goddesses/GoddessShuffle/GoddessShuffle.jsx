import React, { useState } from 'react';
import './GoddessShuffle.css';
import Aphrodite from '../Aphrodite/Aphrodite.jsx';
import Gaia from '../Gaia/Gaia.jsx';
import Artemis from '../Artemis/Artemis.jsx';
import Athena from '../Athena/Athena.jsx';
import Persephone from '../Persephone/Persephone.jsx';

const GoddessShuffle = () => {
    const components = [
        <Aphrodite key="Aphrodite" />,
        <Gaia key="Gaia" />,
        <Artemis key="Artemis" />,
        <Athena key="Athena" />,
        <Persephone key="Persephone" />
    ];

    const getRandomComponent = () => {
        const randomIndex = Math.floor(Math.random() * components.length);
        return components[randomIndex];
    };

    const [currentComponent, setCurrentComponent] = useState(getRandomComponent);

    const shuffleComponent = () => {
        setCurrentComponent(getRandomComponent());
    };

    return (
        <div className="Goddess-picker">
            <h3 className="card-title">Your lucky Goddess this cycle:</h3>
            {currentComponent}
            <button className="Goddess-shuffle" onClick={shuffleComponent}>Shuffle</button>
        </div>
    );
};

export default GoddessShuffle;
