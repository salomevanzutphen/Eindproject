import React, { useState } from 'react';
import './Phase1.css';

import VitaminD from "../../../components/Nutrients/d/VitaminD.jsx";
import VitaminB from "../../../components/Nutrients/b/VitaminB.jsx";
import Magnesium from "../../../components/Nutrients/magnesium/Magnesium.jsx";
import Iron from "../../../components/Nutrients/iron/Iron.jsx";
import Calendar from "../../../components/calendar/Calendar.jsx";
import Keyword from "../../../components/keyword/Keyword.jsx";
import JournalPrompt from "../../../components/journalprompt/JournalPrompt.jsx";
import Fiber from "../../../components/Nutrients/fiber/Fiber.jsx";
import VitaminC from "../../../components/Nutrients/c/VitaminC.jsx";

function Phase1() {
    const [openDescription, setOpenDescription] = useState(null);
    const [currentPhase, setCurrentPhase] = useState('');

    const handleToggleDescription = (name) => {
        if (openDescription === name) {
            setOpenDescription(null);
        } else {
            setOpenDescription(name);
        }
    };

    // Function to handle phase change
    const handlePhaseChange = (phaseName) => {
        console.log("Current phase is:", phaseName);
        setCurrentPhase(phaseName); // Update the phase state
    };

    const descriptionMagnesium1 = "Magnesium can reduce water retention, bloating and relax your muscles...";
    const descriptionVitaminD1 = 'Vitamin D is important for your immune system, regulating your hormone cycle...';
    const descriptionVitaminB1 = 'B vitamins, especially B6 and B12, can help alleviate mood swings and fatigue...';
    const descriptionVitaminC1 = 'Vitamin C improves iron absorption, strengthens your immune system...';
    const descriptionIron1 = "Menstruation can lead to the loss of iron-rich blood...";
    const descriptionFiber1 = 'Fiber can contribute to a feeling of fullness and may help to reduce bloating...';

    return (
        <div className="phase1-wrapper">
            <p className="phase-welcome-script">Welcome to your</p>
            <h1 className="phase1-title">Menstrual Phase</h1>
            <div className="keyword-container">
                <Keyword text="Reflect" />
                <Keyword text="Recharge" />
                <Keyword text="Renew" />
            </div>
            <div className="phase1-introduction">

                {/* Pass handlePhaseChange to Calendar component */}
                <Calendar onPhaseChange={handlePhaseChange} />
        <div className="phase1-intro-text">
            <h3 className="phase1-intro-title">Cycle of Renewal</h3>
            <p>
                Embrace menstruation as a natural cycle of renewal, where the body undergoes a transformative process of shedding old layers.
                Take the time to rest and release, allowing yourself to reflect on what no longer aligns with your goals. What aspects of your life could benefit from a renewal?
                What patterns should you let go off?
                Prioritize self-care, rest and reflection during this phase.
                Use your intuition, which is extra strong at this time, to figure out what type of self-care you would benefit from most.
            </p>
        </div>
    </div>

    <div className="phase-activities">
        <div className="phase1-activity">
            <img className="detox-image" src="https://i.pinimg.com/564x/43/cd/e7/43cde7dfd7da09811bfaf73a754379b6.jpg" alt="selfcare" />
            <p>Self-care</p>
        </div>
        <div className="phase1-activity">
            <img className="cook-image" src="https://i.pinimg.com/564x/19/67/dd/1967ddeb64c46314f41e085beafd12a8.jpg" alt="cook"/>
            <p>Cook</p>
        </div>
        <div className="phase1-activity">
            <img className="journal-image" src="https://i.pinimg.com/564x/d3/86/c4/d386c4ab5f1fe835952e46fc198ba240.jpg" alt="journal"/>
            <p>Journal</p>
        </div>
    </div>
    <JournalPrompt />
    <img className="menstrualcycle" src="https://i.pinimg.com/736x/0f/fc/30/0ffc30e35bb8d15055c268e83a0c26bd.jpg" alt="cyclegraph"/>
    <h3 className="menstrualcycle-subtext">Your cycle starts when you have your period. During this phase your body is clearing out last month's buildup by getting rid of the old uterine lining. Estrogen and progesterone levels are at their lowest now.
    </h3>

    <div className="nutrient-wrapper">
        <h2 className="nutrient-title-p1">Nutrients that support menstruation</h2>

        <div className="nutrient-wrapper2">

            <iframe className="nutrient-video" src="https://player.vimeo.com/video/1002130259?h=631adeae56" width="640" height="564" frameBorder="0"    allowFullScreen></iframe>
            <div className="nutrient-wrapper3">
                <div className="mealtip-phase1">
                    <img className="meal1" src="https://i.pinimg.com/564x/ba/92/f8/ba92f885cfcbc8be3d980a04a5264884.jpg" alt="tempimage"/>
                    <blockquote className="tip-phase1">
                        'I like eating a meal with animal and plant based iron, like ground beef with spinach'
                    </blockquote>
                </div>
                <p className="nutrient-subtitle">Select a nutrient for more information</p>
                <div className="nutrients">
                    <VitaminD
                        backgroundColorClass="red-background"
                        description={descriptionVitaminD1}
                        showDescription={openDescription === 'VitaminD'}
                        onClick={() => handleToggleDescription('VitaminD')}
                    />

                    <Fiber
                        backgroundColorClass="red-background"
                        showDescription={openDescription === 'Fiber'}
                        description={descriptionFiber1}
                        onClick={() => handleToggleDescription('Fiber')}
                    />


                    <VitaminB
                        backgroundColorClass="red-background"
                        description={descriptionVitaminB1}
                        showDescription={openDescription === 'VitaminB'}
                        onClick={() => handleToggleDescription('VitaminB')}
                    />

                    <Magnesium
                        backgroundColorClass="red-background"
                        description={descriptionMagnesium1}
                        showDescription={openDescription === 'Magnesium'}
                        onClick={() => handleToggleDescription('Magnesium')}
                    />

                    <Iron
                        backgroundColorClass="red-background"
                        showDescription={openDescription === 'Iron'}
                        description={descriptionIron1}
                        onClick={() => handleToggleDescription('Iron')}
                    />

                    <VitaminC
                        backgroundColorClass="red-background"
                        showDescription={openDescription === 'VitaminC'}
                        description={descriptionVitaminC1}
                        onClick={() => handleToggleDescription('VitaminC')}
                    />


                </div>

                <div className="hormones-info-p1">
                    <h2 className="hormones-title-p1">Hormones during menstruation</h2>
                    <p>
                        Your hormones are at their lowest during your period. This drop releases a hormone-like compound called prostaglandins, which causes the muscles in your uterine to contract. These contractions are very useful, because they help the flow of the menstrual blood from the uterus out of the body. Unfortunately, this process can also be very painful and cause discomfort.
                    </p>
                </div>


            </div>

        </div>

    </div>


    <div className="well-beingtips">
        <h2>Well-being tip: Managing stress!</h2>
        <p>
            Managing stress becomes crucial during this time, as it can intensify menstrual discomfort. Ease up on physical exercise, instead, prioritize calming activities such as going for a walk, reading or cooking.
            Being in a meditative state can help your mind to relax and improves your focus. Social media has a bad influence on your attention span, due to the amount of information that your brain processes in a short window.
            A break could be beneficial during this time! Instead, journal about any emotions that may come up and give yourself space to address and process them.

        </p>
    </div>




</div>
);


}

export default Phase1;