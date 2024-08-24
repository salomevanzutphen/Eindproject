import {useState} from "react";
import './Phase4.css';

import Calcium from "../../../components/Nutrients/calcium/Calcium.jsx";
import Zinc from "../../../components/Nutrients/zinc/Zinc.jsx";
import Magnesium from "../../../components/Nutrients/magnesium/Magnesium.jsx";
import VitaminD from "../../../components/Nutrients/d/VitaminD.jsx";
import Calendar from "../../../components/calendar/Calendar.jsx";
import Keyword from "../../../components/keyword/Keyword.jsx";



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