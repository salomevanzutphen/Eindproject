import {useState} from "react";
import './Phase3.css';

import Calcium from "../../../components/Nutrients/calcium/Calcium.jsx";
import Zinc from "../../../components/Nutrients/zinc/Zinc.jsx";
import Selenium from "../../../components/Nutrients/selenium/Selenium.jsx";
import VitaminE from "../../../components/Nutrients/e/VitaminE.jsx";
import Calendar from "../../../components/calendar/Calendar.jsx";
import Keyword from "../../../components/keyword/Keyword.jsx";

function Phase3(){
    const [openDescription, setOpenDescription] = useState(null);

    const handleToggleDescription = (name) => {
        if (openDescription === name) {
            setOpenDescription(null);
        } else {
            setOpenDescription(name);
        }
    };

    const descriptionCalcium3 = "Calcium plays a crucial role in regulating various hormones, including those that govern the menstrual cycle. It also helps strengthen bones, teeth, and muscles, including the uterine muscles. Effective muscle function within the reproductive system is essential for the release of a mature egg during ovulation."
    const descriptionZinc3 = "Zinc is crucial for regulating estrogen and progesterone levels. Studies indicate that higher zinc intake in the 90 days before ovulation results in healthier follicles and eggs."
    const descriptionSelenium3 = "Selenium plays a role in the synthesis and metabolism of thyroid hormones, which are crucial for regulating the menstrual cycle and reproductive hormonal balance. Therefore, imbalances in thyroid function can negatively influence fertility."
    const descriptionVitaminE3 = "Vitamin E is a powerful antioxidant that protects cells from oxidative stress. It also supports the blood flow to the arteries and increases the thickness of the uterine lining. A thicker uterine lining supports the conception process, thereby boosting fertility in women."


    return(

        <div className="phase3-wrapper">
            <p className="phase-welcome-script">Welcome to your</p>
            <h1 className="phase3-title">
                Ovulation Phase
            </h1>
            <div className="keyword-container">
                <Keyword text="Connect" />
                <Keyword text="Create" />
                <Keyword text="Inspire" />
            </div>
            <div className="phase-introduction">
                <Calendar />
                <div className="phase3-intro-text">
                    <h3 className="phase3-intro-title">Unlock your creativity</h3>
                    <p>During ovulation your creative energy is at its most high!
                        Let your intuition guide your creative explorations, which can express itself in numerous ways.
                        You may feel inspired by a new aesthetic and want to reinvent your style. Or maybe you feel a sudden curiosity to explore in the bedroom, because your sex drive is at an all time high.
                        If you have been stuck creatively, now is the time to brainstorm innovative solutions. Allow yourself to be inspired, connect to others and let your creativity flow!

                    </p>
                </div>
            </div>



            <div className="nutrient-wrapper">
                <h2 className="nutrient-title-p3">Nutrients that boost fertility</h2>

                <div className="nutrient-wrapper2">
                    <iframe className="nutrient-video" src="https://player.vimeo.com/video/1002110934?h=1b6298ba9a" width="640" height="564" frameBorder="0" allow="autoplay; fullscreen" allowFullScreen></iframe>


                    <div className="nutrient-wrapper3">
                        <div className="mealtip-phase3">
                            <img className="meal3" src="https://i.pinimg.com/564x/be/98/67/be9867c9d3f45ab5bc20df7b49d7ebd6.jpg" alt="socialize"/>
                            <blockquote className="tip-phase3">
                                'Aside from the many nutrients it has, did you know that oysters are also an aphrodesiac?'
                            </blockquote>
                        </div>
                        <p className="nutrient-subtitle">Select a nutrient for more information</p>
                        <div className="nutrients">

                            <Calcium
                                backgroundColorClass="orange-background"
                                description={descriptionCalcium3}
                                showDescription={openDescription === 'Calcium'}
                                onClick={() => handleToggleDescription('Calcium')}
                            />

                            <Zinc
                                backgroundColorClass="orange-background"
                                description={descriptionZinc3}
                                showDescription={openDescription === 'Zinc'}
                                onClick={() => handleToggleDescription('Zinc')}
                            />


                            <Selenium
                                backgroundColorClass="orange-background"
                                description={descriptionSelenium3}
                                showDescription={openDescription === 'Selenium'}
                                onClick={() => handleToggleDescription('Selenium')}
                            />


                            <VitaminE
                                backgroundColorClass="orange-background"
                                description={descriptionVitaminE3}
                                showDescription={openDescription === 'VitaminE'}
                                onClick={() => handleToggleDescription('VitaminE')}
                            />





                        </div>

                        <div className="hormones-info-p3">
                            <h3 className="hormones-title-p3">Hormones during ovulation</h3>
                            <p>Your hormones reach their peak during ovulation, which is accompanied with increased libido and energy. The egg in the dominant follicle that grew and matured during the follicular phase will now be released from the ovary. This egg then goes into the fallopian tube, ready for a chance to be fertilized. The boost of testosterone in this phase will give you increased sex drive and energy.
                            </p>
                        </div>

                    </div>



                </div>



            </div>

        </div>




);
}
export default Phase3;