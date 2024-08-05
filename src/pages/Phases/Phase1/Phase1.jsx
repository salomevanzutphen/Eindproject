import React, {useState} from 'react';
import './Phase1.css';

import cycle from "../../../assets/cycle.jpg";
import instagram from "../../../assets/instagram.png";
import tempimage from "../../../assets/cycle.jpg";

import VitaminD from "../../../components/Nutrients/Vitamin D/VitaminD.jsx";
import Fiber from "../../../components/Nutrients/Fiber/Fiber.jsx";
import VitaminB from "../../../components/Nutrients/Vitamin B/VitaminB.jsx";
import Magnesium from "../../../components/Nutrients/Magnesium/Magnesium.jsx";
import Iron from "../../../components/Nutrients/Iron/Iron.jsx";
import VitaminC from "../../../components/Nutrients/Vitamin C/VitaminC.jsx";
import Calendar from "../../../components/Calendar/Calendar.jsx";
import JournalPrompts from "../../../components/Journalprompt/JournalPrompt.jsx";


function Phase1() {
    const [openDescription, setOpenDescription] = useState(null);

    const handleToggleDescription = (name) => {
        if (openDescription === name) {
            setOpenDescription(null);
        } else {
            setOpenDescription(name);
        }
    };

    const descriptionMagnesium1 = "Magnesium can reduce water retention, bloating and relax your muscles. This may ease up any stomach cramps and contribute to deeper sleep. Craving sugar could be a sign that your body has a magnesium deficiency, because it also regulates your glucose and insulin levels. This might be helpful if you struggle with weight gain due to hormonal cravings."
    const descriptionVitaminD1 ='Vitamin D is important for your immune system, regulating your hormone cycle and it contains anti-inflammatory properties. This can help alleviate menstrual pain and discomfort, as your body is better equipped to handle the stress and inflammation. Vitamin D also contributes to the adrenaline and dopamine production. These hormones are known as the ‘feel-good’ hormones, because they elevate your mood. Bone pain, muscle weakness, low mood, hair loss, fatigue and slow wound healing could be a sign of deficiency.'
    const descriptionVitaminB1 ='B vitamins, especially B6 and B12, can help alleviate mood swings and fatigue. Vitamin B6 aids in the production of serotonin and dopamine, which can stabilize and uplift your mood, while B12 supports red blood cell formation and energy production. During menstruation you lose red blood cells, so this is key! Concentration issues, insatiable mood, weak immune system and fatigue could signal deficiency.'
    const descriptionVitaminC1 = 'Vitamin C improves iron absorption, strengthens your immune system, boosts energy levels and reduces inflammation. It also helps with the regulation of adrenal glands and cortisol production, thereby reducing feelings of stress and anxiety. These factors help to alleviate menstrual discomfort. Fatigue, irritability, bruising easily, brittle hair, dry skin and poor gum health could signal deficiency.'
    const descriptionIron1 = "Menstruation can lead to the loss of iron-rich blood, which can significantly impact a woman's overall health if not replenished. Adequate iron levels are essential for maintaining energy levels, overall vitality, and cognitive function. Pair the intake with vitamin C, which enhances the absorption of iron into the body. Brittle nails, cold hands and feet, headaches, poor appetite, hair loss, difficulty concentrating and fatigue could signal deficiency."
    const descriptionFiber1 = 'Fiber can contribute to a feeling of fullness and may help to reduce bloating. It can also stabilize your blood sugar levels.  If you struggle with tiredness after eating and constantly crave snacks to boost your energy, try eating vegetables before consuming carbohydrates and sugars. This decreases your blood sugar spike and keeps your energy more stable throughout the day.'




    return (
<div className="phase1-wrapper">
    <h1 className="phase1-title">
        Menstrual Phase
    </h1>
    <div className="keywords">
        <h3>Reflect</h3>
        <h3>Recharge</h3>
        <h3>Renew</h3>
    </div>
    <div className="phase-introduction">
        <Calendar />
        <div className="phase-intro-text">
            <h3 className="phase1-intro-title">Cycle of Renewal</h3>
            <p>
                Embrace menstruation as a natural cycle of renewal, where the body undergoes a transformative process of shedding old layers. Take the time to rest and release, allowing yourself to reflect on what no longer aligns with your goals. What aspects of your life could benefit from a renewal? Do you need to release any thinking patterns? What are you grateful for this month?Prioritize self-care, rest and reflection during this phase. Use your intuition, which is extra strong at this time, to figure out what type of self-care you would benefit from most.
            </p>
        </div>
    </div>





    <div className="phase-activities">
        <div className="phase1-activity">
            <img className="detox-image" src="https://i.pinimg.com/originals/c3/9a/e2/c39ae2791311fe412efb492c9f62980b.jpg" alt="selfcare" />
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

   <JournalPrompts />



    <img className="menstrualcycle" src={cycle} alt="tempimage"/>
    <h3 className="menstrualcycle-subtext">Your cycle starts when you have your period. During this phase your body is clearing out last month's buildup by getting rid of the old uterine lining. Estrogen and progesterone levels are at their lowest now.
    </h3>



    <div className="nutrient-wrapper">
        <h2 className="nutrient-title-p1">Nutrients that support menstruation</h2>

        <div className="nutrient-wrapper2">

                <img className="nutrient-video" src={tempimage} alt="tempimage"/>

            <div className="nutrient-wrapper3">
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

                    <Iron backgroundColorClass="red-background"
                          showDescription={openDescription === 'Iron'}
                          description={descriptionIron1}
                          onClick={() => handleToggleDescription('Iron')}
                    />


                    <VitaminC backgroundColorClass="red-background"
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

                <h2 className="connect-p1">Let's connect! </h2>

                <div className="socialmedia">
                <img className="instagram-icon" src={instagram} alt="tempimage"/>
                <a className="socialhandle"
                   href="https://www.instagram.com/salome__vz/" target="_blank">@salome__vz</a>
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