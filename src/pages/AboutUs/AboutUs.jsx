import React from 'react';
import "./AboutUs.css";
import logo from '../../assets/logo.jpg';
import instagram from "../../assets/instagram.png";
import letsconnectsticker from "../../assets/letsconnectsticker.png";
function AboutUs() {
    return (


        <div className="aboutus-page">


                <div className="profile-header">
                    <img className="headshot" src="https://i.pinimg.com/736x/3b/3c/a1/3b3ca1a8415ec99dd632c57fb40813f5.jpg" alt="Salomé van Zutphen Logo" />
                    <img className="namelogo" src={logo} alt="Salomé van Zutphen Logo" />
                    <blockquote className="aboutus-quote">
                        'I aspire to break taboos about the menstrual cycle. < br/> It should be celebrated as a natural and empowering aspect of womanhood!'
                    </blockquote>
                </div>
            <p className="aboutus-maintext">
                <div className="aboutus-maintext1">
                Cycle syncing is a holistic approach that aligns your lifestyle and nutrition choices with the rhythm of your menstrual cycle. By understanding the natural ebbs and flows of your body, you can recognize that not every day needs to be highly productive. Many of us put immense pressure on ourselves, which can lead to burnout, especially when paired with a nutrient-deficient diet.

                My mother’s long struggle with hormonal issues initially sparked my interest in women's healthcare. When she reached a low point in her illness, I began to do a lot of research to help out. I wanted to know the root of the problem and how I could adjust my life now to avoid getting sick later.


                </div>
                <div className="aboutus-maintext2">
                Did you know that before 1993, women were rarely included in clinical trials? Unfortunately this research disparity continues to affect women today. For example, many women go undiagnosed for ADHD, because the symptoms show up differently for them than it does for men. Without enough research, women won’t find the help from the healthcare system that they need.

                We can bridge this healthcare inequality between men and women by using technology as a tool for education. That is the mission of this platform: to empower women with knowledge about their body, mind and spirit, to improve their wellbeing. Feel free to contact me with more interesting topics and insights! I look forward to expanding the platform with more ideas.

                Please note: This platform is for entertainment purposes only and should not replace professional medical advice. Always seek guidance from a qualified healthcare provider.
                </div>
            </p>

            <div className="aboutus-socialmedia">
                <img className="sticker" src={letsconnectsticker} alt="Salomé van Zutphen Logo" />
                   <img className="aboutus-instagram-icon" src={instagram} alt="tempimage"/>
                   <a className="aboutus-socialhandle"
                      href="https://www.instagram.com/salome__vz/" target="_blank">@salome__vz</a>



            </div>


        </div>
    );
}

export default AboutUs;