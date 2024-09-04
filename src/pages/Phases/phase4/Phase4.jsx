import React from 'react';
import {useState} from "react";
import './Phase4.css';

import Calcium from "../../../components/Nutrients/calcium/Calcium.jsx";
import Zinc from "../../../components/Nutrients/zinc/Zinc.jsx";
import Magnesium from "../../../components/Nutrients/magnesium/Magnesium.jsx";
import VitaminD from "../../../components/Nutrients/d/VitaminD.jsx";
import Calendar from "../../../components/calendar/Calendar.jsx";
import Keyword from "../../../components/keyword/Keyword.jsx";
import Fiber from "../../../components/Nutrients/fiber/Fiber.jsx";
import Omega3 from "../../../components/Nutrients/omega3/Omega3.jsx";
import PMSsymptoms from "../../../assets/pms-sympomts.png";


function Phase4() {
    const [openDescription, setOpenDescription] = useState(null);

    const handleToggleDescription = (name) => {
        if (openDescription === name) {
            setOpenDescription(null);
        } else {
            setOpenDescription(name);
        }
    };

    const descriptionZinc4 = "Zinc is essential for the production of progesterone and the detoxification of estrogen, both of which strongly influence PMS symptoms. It reduces inflammation that exacerbates PMS symptoms and supports your immune system, making your body more equipped to handle stress and physical pain."
    const descriptionCalcium4 = "Studies have shown that women with PMS who take up to 1,000 mg of calcium a day can benefit from reduced levels of fatigue, appetite changes, and depression. It is among one of the supplements who has the strongest evidence to back its evidence."
    const descriptionMagnesium4 = "Magnesium can reduce water retention, bloating and relax your muscles. This may ease up any stomach cramps and contribute to deeper sleep. Craving sugar could be a sign that your body has a magnesium deficiency, because it also regulates your glucose and insulin levels. This might be helpful if you struggle with weight gain due to hormonal cravings. "
    const descriptionOmega4 = 'Research has shown that omega-3 fatty acids may reduce psychiatric symptoms like nervousness, lack of concentration, anxiety and depression, as well as physical symptoms like bloating, headaches and breast tenderness.'
    const descriptionFiber4 = 'Fiber can contribute to a feeling of fullness and may help to reduce bloating. It can also stabilize your blood sugar levels.  If you struggle with tiredness after eating and constantly crave snacks to boost your energy, try eating vegetables before consuming carbohydrates and sugars. This decreases your blood sugar spike and keeps your energy more stable throughout the day.'
    const descriptionVitaminD4 = 'Vitamin D helps to regulate the body’s adrenaline and dopamine production. These hormones contribute to elevating your mood and are also known as the feel-good hormones. Low mood, hot flushes and a low mood is a sign of vitamin D deficiency, which can also lead to lower estrogen levels.'

    return (
        <div className="phase4-wrapper">
            <p className="phase-welcome-script">Welcome to your</p>
            <h1 className="phase4-title">
               Luteal Phase
            </h1>
            <div className="keyword-container">
                <Keyword text="Organise" />
                <Keyword text="Ground" />
                <Keyword text="Evaluate" />
            </div>
            <div className="phase-introduction">
                <Calendar />
                <div className="phase-intro-text">
                    <h3 className="phase4-intro-title">Time to wrap up!</h3>
                    <p>The luteal phase is a great time for organizing yourself and planning ahead. Wrap up any pending
                        tasks on your to-do list, declutter your space and ease up on the intensity of your workouts.
                        Soon you will be needing a lot more rest, as the menstrual phase is approaching. You may already
                        start to feel a dip in energy towards the end of this phase, making you more sensitive to stress
                        and anxiety. Therefore it is wise to use your time effectively now, so that you have more time
                        to rest later.
                    </p>
                </div>
            </div>

            <div className="phase-activities">
                <div className="phase4-activity">
                    <img className="declutter-image" src="https://i.pinimg.com/564x/3f/48/df/3f48dfec1ef0c6c9e5dc6f1b279e2f4d.jpg" alt="tempimage"/>
                    <p>Declutter</p>
                </div>
                <div className="phase4-activity">
                    <img className="to-dolist-image" src="https://i.pinimg.com/564x/8a/61/1e/8a611e6c4e67a2bdeb1f1752e790b075.jpg" alt="tempimage"/>
                    <p>Routine</p>
                </div>
                <div className="phase4-activity">
                    <img className="planning-image" src="https://i.pinimg.com/564x/bc/42/9a/bc429a426eebc4d9e4fcdb3c55b11d1d.jpg" alt="tempimage"/>
                    <p>Planning</p>
                </div>
            </div>



            <img className="menstrualcycle" src="https://i.pinimg.com/736x/0f/fc/30/0ffc30e35bb8d15055c268e83a0c26bd.jpg" alt="cyclegraph"/>
            <div className="progesterone-info">
                <h2>How progesterone shapes your luteal phase experience</h2>
                <p>As estrogen levels drop, progesterone begins to rise, playing a crucial role in your body's hormonal balance. Progesterone helps soothe your mood by stimulating GABA receptors in your brain, making you feel more calm and collected. Its mild sedative properties also promote better sleep. Additionally, progesterone acts as a natural diuretic, helping to release excess fluid from your body. Therefore, if you experience increased anxiety, mood swings, insomnia, and excessive bloating during the this phase, it could indicate that your progesterone levels are too low.
                </p>

            </div>

            <div className="PMS-info">

                <img className="PMS-symptoms" src={PMSsymptoms} alt="PMS-symptoms"/>
                <p>PMS is a range of physical, emotional and behavioural symptoms that women experience during the luteal phase. Although the direct cause is unknown, low progesterone, stress, lack of sleep, hormonal imbalances and a deficient diet can exacerbate the symptoms. Find out below what nutrients can aid you most during this time.  </p>

            </div>


            <div className="nutrient-wrapper">
                <h2 className="nutrient-title-p4">Nutrients that aid PMS symptoms</h2>

                <div className="nutrient-wrapper2">
                    <iframe className="nutrient-video" src="https://player.vimeo.com/video/1002116495?h=0b075435e5" width="640" height="360" frameBorder="0"    allowFullScreen></iframe>
                    <div className="nutrient-wrapper3">
                        <div className="mealtip-phase4">
                            <img className="meal4" src="https://i.pinimg.com/564x/08/a5/45/08a545461a6ca71323b2024a7835a198.jpg" alt="tempimage"/>
                            <blockquote className="tip-phase4">
                                'Dark chocolate is my favourite treat to get a boost of magnesium!'
                            </blockquote>
                        </div>
                        <p className="nutrient-subtitle">Select a nutrient for more information</p>
                        <div className="nutrients">

                            <VitaminD
                                backgroundColorClass="blue-background"
                                description={descriptionVitaminD4}
                                showDescription={openDescription === 'VitaminD'}
                                onClick={() => handleToggleDescription('VitaminD')}
                            />

                            <Calcium
                                backgroundColorClass="blue-background"
                                description={descriptionCalcium4}
                                showDescription={openDescription === 'Calcium'}
                                onClick={() => handleToggleDescription('Calcium')}
                            />


                            <Zinc
                                backgroundColorClass="blue-background"
                                   description={descriptionZinc4}
                                   showDescription={openDescription === 'Zinc'}
                                   onClick={() => handleToggleDescription('Zinc')}
                            />

                            <Magnesium
                                backgroundColorClass="blue-background"
                                description={descriptionMagnesium4}
                                showDescription={openDescription === 'Magnesium'}
                                onClick={() => handleToggleDescription('Magnesium')}
                            />

                            <Omega3
                                backgroundColorClass="blue-background"
                                description={descriptionOmega4}
                                showDescription={openDescription === 'Omega3'}
                                onClick={() => handleToggleDescription('Omega3')}
                            />

                            <Fiber
                                backgroundColorClass="blue-background"
                                description={descriptionFiber4}
                                showDescription={openDescription === 'Fiber'}
                                onClick={() => handleToggleDescription('Fiber')}
                            />



                        </div>
                        <div className="hormones-info-p4">
                            <h3 className="hormones-title-p4">Hormones during the luteal phase</h3>
                            <p>
                                Your body increases progesterone to get the uterine lining ready for a potential pregnancy. If pregnancy doesn’t occur, hormones start to drop and your cycle will be restarted with your period.
                                Additionally, serotonin levels can drop during this phase, which may cause you to crave carbohydrates, as these foods help boost serotonin production.
                            </p>
                        </div>

                    </div>

                </div>

            </div>

        </div>
    );
}
export default Phase4;