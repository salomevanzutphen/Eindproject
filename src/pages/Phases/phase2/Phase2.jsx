import {useState} from "react";
import './Phase2.css';

import estrogenimage from "../../../assets/estrogen.jpg";

import Magnesium from "../../../components/Nutrients/magnesium/Magnesium.jsx";
import Glycine from "../../../components/Nutrients/glycine/Glycine.jsx";
import Catechins from "../../../components/Nutrients/catechins/Catechins.jsx";
import Indole3Carbinol from "../../../components/Nutrients/indole-3Carbinol/Indole.jsx";
import Selenium from "../../../components/Nutrients/selenium/Selenium.jsx";
import Calendar from "../../../components/calendar/Calendar.jsx";
import Keyword from "../../../components/keyword/Keyword.jsx";


function Phase2() {
    const [openDescription, setOpenDescription] = useState(null);

    const handleToggleDescription = (name) => {
        if (openDescription === name) {
            setOpenDescription(null);
        } else {
            setOpenDescription(name);
        }
    };


    const descriptionMagnesium2 = "Magnesium is a cofactor for various enzymes involved in detoxification pathways, aiding in the elimination of toxins from the liver. It also helps to regulate inflammation, maintain healthy blood sugar levels and promotes overall liver health.";
    const descriptionSelenium2 = "Selenium is an antioxidant that is used to make glutathione, which is essential for the detoxification process of the liver. The mineral also helps to reduce the toxicity of heavy metals like cadmium and mercury from the body. Be mindful of cooking methods as selenium content can be affected. Steaming and baking tend to preserve selenium better than boiling.";
    const descriptionCatechins2 = 'Catechins have antioxidant properties which help reduce oxidative stress and inflammation that harms the liver. They protect the liver cells from damage caused by toxins and free radicals, promoting detoxification and improving liver function.'
    const descriptionIndole2 = 'Indole-3 Carbinol supports liver health by boosting its detoxification processes, helping convert harmful toxins into less harmful forms that are easier for the body to eliminate. Moreover, I3C plays a role in hormonal balance by aiding in the metabolism of estrogen, which can contribute to overall hormonal health. It is naturally found in cruciferous vegetables.'
    const descriptionGlycine2 = 'Glycine supports synthesis of glutathione, an antioxidant which is essential for the detoxification process of the liver. It is also involved in collagen synthesis, which helps to maintain the structural integrity of the liver. Glycine also helps reduce the harmful effects of high-fat diets on the liver.'



    return (
        <div className="phase2-wrapper">
            <p className="phase-welcome-script">Welcome to your</p>
            <h1 className="phase2-title">Follicular Phase</h1>
            <div className="keyword-container">
                <Keyword text="Grow" />
                <Keyword text="Explore" />
                <Keyword text="Empower" />
            </div>
            <div className="phase-introduction">
                <Calendar />
                <div className="phase2-intro-text">
                    <h3 className="phase2-intro-title">Boost of Energy</h3>
                    <p>The follicular phase brings a surge of energy and enthusiasm for life! Your creativity and problem-solving skills are increasing, making it an ideal period for tackling complex tasks or learning a new skill. This is the perfect time to go out of your comfort zone, as your tolerance to stress and anxiety is much higher than before. Use this energy to take on any challenges with confidence! Initiate new projects, start a hobby and engage in networking opportunities. Expand your physical, social and mental horizons.
                    </p>
                </div>
            </div>



            <div className="phase-activities">
                <div className="phase2-activity">
                    <img className="innovate-image" src="https://i.pinimg.com/564x/2c/be/7f/2cbe7fec868a62ef8d92b6409d1175cc.jpg" alt="tempimage" />
                    <p>Strength</p>
                </div>
                <div className="phase2-activity">
                    <img className="read-image" src="https://i.pinimg.com/564x/62/29/16/622916128cc043bf404dc51bf3fb497c.jpg" alt="tempimage" />
                    <p>Read</p>
                </div>
                <div className="phase2-activity">
                    <img className="travel-image" src="https://i.pinimg.com/564x/bf/88/02/bf880281566e8419aeb58cf542748cc0.jpg" alt="tempimage" />
                    <p>Travel</p>
                </div>



            </div>


                <img className="cycle-graph-image" src="https://i.pinimg.com/736x/0f/fc/30/0ffc30e35bb8d15055c268e83a0c26bd.jpg" alt="tempimage" />
            <h3 className="cycle-graph-image-subtext">
                Right after your period ends, the follicular phase starts with your body prepping some eggs and thickening the uterine lining.
                Estrogen starts to rise here.
            </h3>


            <div className="estrogen-information">
                <div className="estrogen-description">
                    <h2>Estrogen Dominance</h2>
                    <p>
                        During the follicular phase, estrogen rises. As a result, you're likely to be in a better mood and feel more energized. However, many women struggle with estrogen dominance. This refers to an imbalance of too much estrogen compared to progesterone. If this is you, you might suffer from irregular periods, sensitive breasts, low libido, fatigue, difficulty concentrating and an increased risk of certain cancers. You are also likely to have increased PMS (premenstrual syndrome) symptoms, which are a mixture of physical and emotional symptoms during the luteal phase (phase before menstruation).
                    </p>

                </div>
                <iframe className="estrogen-video" src="https://player.vimeo.com/video/1002123534?h=4259258ace" width="640" height="360" frameBorder="0"    allowFullScreen></iframe>
            </div>



            <div className="nutrient-wrapper">
                <h2 className="nutrient-title-p2">Nutrients that support the liver</h2>
                <div className="nutrient-wrapper2">

                    <iframe className="nutrient-video" src="https://player.vimeo.com/video/1002128743?h=1ab45de5a4" width="640" height="360" frameBorder="0"    allowFullScreen></iframe>
                    <div className="nutrient-wrapper3-p2">
                        <p className="liver-information">
                            The liver plays an important role in detoxifying the body from harmful substances, including excess estrogen.
                        </p>
                        <p className="nutrient-subtitle-p2">Select a nutrient for more information</p>
                        <div className="nutrients">
                            <Glycine
                                backgroundColorClass="green-background"
                                description={descriptionGlycine2}
                                showDescription={openDescription === 'Glycine'}
                                onClick={() => handleToggleDescription('Glycine')}
                            />
                            <Catechins
                                backgroundColorClass="green-background"
                                showDescription={openDescription === 'Catechins'}
                                description={descriptionCatechins2}
                                onClick={() => handleToggleDescription('Catechins')}
                            />
                            <Magnesium
                                backgroundColorClass="green-background"
                                description={descriptionMagnesium2}
                                showDescription={openDescription === 'Magnesium'}
                                onClick={() => handleToggleDescription('Magnesium')}
                            />
                            <Indole3Carbinol
                                backgroundColorClass="green-background"
                                showDescription={openDescription === 'Indole3Carbinol'}
                                description={descriptionIndole2}
                                onClick={() => handleToggleDescription('Indole3Carbinol')}
                            />
                            <Selenium
                                backgroundColorClass="green-background"
                                description={descriptionSelenium2}
                                showDescription={openDescription === 'Selenium'}
                                onClick={() => handleToggleDescription('Selenium')}
                            />

                        </div>
                        <div className="hormones-info-p2">
                            <h3 className="hormones-title-p2">Hormones during the follicular phase</h3>
                            <p>
                                The follicular phase is all about preparing the body for pregnancy. The follicle-stimulating hormone (FSH) helps the ovaries produce several small sacs, each containing an immature egg. As the days progress, one dominant follicle will continue to develop and mature, while the others will degenerate. This process is simultaneously met with a rise in estrogen, which causes the uterus lining to get thicker. As a result of this rise, you may experience increased energy, enhanced libido, improved mood and greater tolerance to stress or anxiety.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Phase2;