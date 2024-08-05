import React, {useState} from "react";
import './Phase3.css';

import tempimage from "../../../assets/cycle.jpg";
import cycle from "../../../assets/cycle.jpg";
import instagram from "../../../assets/instagram.png";

import Calcium from "../../../components/Nutrients/Calcium/Calcium.jsx";
import Zinc from "../../../components/Nutrients/Zinc/Zinc.jsx";
import Selenium from "../../../components/Nutrients/Selenium/Selenium.jsx";
import VitaminE from "../../../components/Nutrients/Vitamin E/VitaminE.jsx";
import Iodine from "../../../components/Nutrients/Iodine/Iodine.jsx";
import Folicacid from "../../../components/Nutrients/Folic Acid/Folicacid.jsx";
import Calendar from "../../../components/Calendar/Calendar.jsx";
import GoddessShuffle from "../../../components/Goddesses/GoddessShuffle/GoddessShuffle.jsx";

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
    const descriptionFolicacid3 = "Folic acid plays a significant role in managing stress and inflammation in the body. High stress levels increase the body's need for folate. Factors such as advanced maternal age and lifestyle habits like smoking can affect a woman's fertility, but adequate folic acid intake can help manage these stress-related effects."
    const descriptionIodine3 = "Iodine plays a crucial role in fertility by supporting the production of thyroid hormones, which are essential for regulating ovulation, metabolism, and maintaining a healthy weight—key factors influencing fertility. Adequate iodine levels ensure proper thyroid function, which in turn helps to create a favorable environment for conception and pregnancy."
    const descriptionVitaminE3 = "Vitamin E is a powerful antioxidant that protects cells from oxidative stress. It also supports the blood flow to the arteries and increases the thickness of the uterine lining. A thicker uterine lining supports the conception process, thereby boosting fertility in women."


    const [divineFem, setDivineFem] = useState("The light feminine is nurturing, forgiving and patient. She makes a great partner, mother and friend because of her compassion and willingness to sacrifice herself for the other person. She is intuitive and sensitive, attuned to the emotions and needs of others, and she uses this awareness to foster connections and build strong, supportive relationships. She has cooperative, receptive, empathetic, submissive, gentle and innocent qualities. Her strength lies in her ability to uplift and nurture those around her, creating a harmonious and loving environment.");
    const [unbalancedText, setUnbalancedText] = useState("When the light feminine is unbalanced, she risks losing herself by prioritizing others' needs over her own. She may find herself in a pattern of people-pleasing, sacrificing her boundaries and personal health. It's crucial for her to prioritize self-care before catering to others, as neglecting her own needs can lead to burnout and diminished wellbeing. Her willingness to forgive can lead to her being taken advantage of. Her desire to create harmony can result in avoiding necessary conflicts, allowing unresolved issues to fester and grow. She may feel overly dependent on the validation of others, because her life is centered around being of service to them.");
    const [unbalancedTitle, setUnbalancedTitle] = useState("Unbalanced Light Feminine");
    const [isDarkActive, setIsDarkActive] = useState(false);
    const [isLightActive, setIsLightActive] = useState(true);

    const handleDarkButtonClick = () => {
        setDivineFem("The dark feminine is her unapologetic and authentic self, even if this goes against the mainstream or societal expectations. Perhaps she stands out from the crowd with a fierce group of lovers or haters, no in between. She has a sense of independence and fearlessness, because she doesn’t let negative judgment from others stop her from pursuing her path. Firm in her beliefs and boundaries, she prioritizes self-care and personal freedom above external judgments or control. Her confidence and passion drive her to live by her own moral compass, empowering her with a sense of liberation and inner strength.");
        setUnbalancedText("She represents chaos, death and transformation. She carries a lot of passion and rage that fuel her ambitions. When out of balance, this energy becomes destructive rather than empowering. Her independence can turn into isolation, as she pushes others away to maintain her autonomy. Her fearlessness can become recklessness, disregarding the consequences of her actions. Her emotional intensity can become overwhelming if she doesn’t have a productive outlet, causing her to struggle with mood swings and emotional instability. Instead of transforming and healing, she may become stuck in patterns of self-destruction, chaos and addiction.");
        setUnbalancedTitle("Unbalanced Dark Feminine");
        setIsDarkActive(true);
        setIsLightActive(false);
    };

    const handleLightButtonClick = () => {
        setDivineFem("The light feminine is nurturing, forgiving and patient. She makes a great partner, mother and friend because of her compassion and willingness to sacrifice herself for the other person. She is intuitive and sensitive, attuned to the emotions and needs of others, and she uses this awareness to foster connections and build strong, supportive relationships. She has cooperative, receptive, empathetic, submissive, gentle and innocent qualities. Her strength lies in her ability to uplift and nurture those around her, creating a harmonious and loving environment.");
        setUnbalancedText("When the light feminine is unbalanced, she risks losing herself by prioritizing others' needs over her own. She may find herself in a pattern of people-pleasing, sacrificing her boundaries and personal health. It's crucial for her to prioritize self-care before catering to others, as neglecting her own needs can lead to burnout and diminished wellbeing. Her willingness to forgive can lead to her being taken advantage of. Her desire to create harmony can result in avoiding necessary conflicts, allowing unresolved issues to fester and grow. She may feel overly dependent on the validation of others, because her life is centered around being of service to them.");
        setUnbalancedTitle("Unbalanced Light Feminine");
        setIsDarkActive(false);
        setIsLightActive(true);
    };

    return(

        <div className="phase3-wrapper">
            <h1 className="phase3-title">
                Ovulation Phase
            </h1>
            <div className="phase3-keywords">
                <h3>Connect</h3>
                <h3>Create</h3>
                <h3>Inspire</h3>
            </div>
            <div className="phase-introduction">
                <Calendar />
                <div className="phase-intro-text">
                    <h3 className="phase3-intro-title">Unlock your creativity</h3>
                    <p>During ovulation your creative energy is at its most high! Let your intuition guide your creative explorations, which can express itself in numerous ways. You may feel inspired by a new aesthetic and want to reinvent your style. Or maybe you feel a sudden curiosity to explore in the bedroom, because you feel more connected to your sexuality. Maybe creating art is where your passion lies, resparked by joining a painting class. Connect, create, share & inspire others! Let your creativity flow.
                    </p>
                </div>
            </div>

            <div className="phase-activities">
                <div className="phase3-activity">
                    <img className="move-image" src="https://i.pinimg.com/564x/c7/50/7e/c7507ed1c35dd9c9fd480b9d1ac4ee55.jpg" alt="move"/>
                    <p>Dress up</p>
                </div>
                <div className="phase3-activity">
                    <img className="DIY-image" src="https://i.pinimg.com/564x/8c/88/0b/8c880b5635703449d4b21e23417bacc8.jpg" alt="diy"/>
                    <p>DIY project</p>
                </div>
                <div className="phase3-activity">
                    <img className="socializing-image" src="https://i.pinimg.com/564x/f2/88/ef/f288efc656ebd4d670f78c064aa54716.jpg" alt="socialize"/>
                    <p>Socialize</p>
                </div>
            </div>

            <img className="menstrualcycle" src={cycle} alt="tempimage"/>
             <h3 className="menstrualcycle-subtext">
                 Welcome to ovulation! During this phase one of your eggs gets released from the ovary. It's the peak moment of your cycle, usually happening around day 14.
             </h3>


            <div className="nutrient-wrapper">
                <h2 className="nutrient-title-p3">Nutrients that boost fertility</h2>

                <div className="nutrient-wrapper2">

                        <img className="nutrient-video" src={tempimage} alt="tempimage"/>


                    <div className="nutrient-wrapper3">
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

                            <Iodine
                                backgroundColorClass="orange-background"
                                description={descriptionIodine3}
                                showDescription={openDescription === 'Iodine'}
                                onClick={() => handleToggleDescription('Iodine')}
                            />


                            <Folicacid
                                backgroundColorClass="orange-background"
                                description={descriptionFolicacid3}
                                showDescription={openDescription === 'Folicacid'}
                                onClick={() => handleToggleDescription('Folicacid')}
                            />


                        </div>

                        <div className="hormones-info-p3">
                            <h3 className="hormones-title-p3">Hormones during ovulation</h3>
                            <p>Your hormones reach their peak during ovulation, which is accompanied with increased libido and energy. The egg in the dominant follicle that grew and matured during the follicular phase will now be released from the ovary. This egg then goes into the fallopian tube, ready for a chance to be fertilized. The boost of testosterone in this phase will give you increased sex drive and energy.
                            </p>
                        </div>


                        <h2 className="connect-p3">Let's connect! </h2>

                        <div className="socialmedia">
                            <img className="instagram-icon" src={instagram} alt="tempimage"/>
                            <a className="socialhandle"
                               href="https://www.instagram.com/salome__vz/" target="_blank">@salome__vz</a>
                        </div>

                    </div>


                </div>
                <div className="feminine-wrapper">
                    <h3 className="feminine-intro">The power of feminine creativity</h3>
                    <p className="feminine-intro-text">
                        Your womb is located in the sacral chakra, an energetic center of creativity, pleasure and emotional expression. This sacred space not only nurtures the physical potential for creation, but also mirrors the duality of feminine energy - both light and dark. The light feminine embodies qualities of nurturing compassion and intuitive wisdom, fostering growth and harmony within oneself and others. In contrast, the dark feminine channels strength, transformation, and the power to delve deep into introspection and healing. When these energies are harmonized, they empower you to access your divine feminine creative abilities.
                    </p>
                    <h3 className="switch-title">Choose a side...</h3>
                    <div className="feminine-buttons-wrapper">
                        <button
                            className={`divinefembutton ${isLightActive ? 'active' : ''}`}
                            onClick={handleLightButtonClick}
                            style={{
                                backgroundColor: isLightActive ? 'orange' : 'grey',
                            }}
                        >
                            Light feminine
                        </button>
                        <button
                            className={`divinefembutton ${isDarkActive ? 'active' : ''}`}
                            onClick={handleDarkButtonClick}
                            style={{
                                backgroundColor: isDarkActive ? 'orange' : 'grey',
                            }}
                        >
                            Dark feminine
                        </button>
                    </div>

                    <p className="divinefemtext">{divineFem}</p>
                    <div className="ending-ovulation">
                        <div className="rectangle rectangle1"></div>
                        <div className="rectangle rectangle2"></div>
                        <h2 className="unbalanced-title">{unbalancedTitle}</h2>
                        <p className="unbalanced-text">{unbalancedText}</p>
                    </div>

                  <GoddessShuffle />

                </div>

            </div>

        </div>




);
}
export default Phase3;