import React from 'react';
import "./Home.css";
import powerStandImage from "../../../src/assets/powerstand.jpg";
import cyclegraph from "../../../src/assets/cycle.jpg";
import food from "../../assets/food-plate.jpg";
import {useNavigate} from "react-router-dom";

function Home() {
    const navigate = useNavigate();

    const handleSignUp = () => {
        navigate('/signup');
    };

    const handleLogIn = () => {
        navigate('/login');
    };

    return (

        <div className="home-page-wrapper">
            <section className="home-intro">
                <img className="background-image" src={food} alt="background-image"/>

                <article className="home-inner-container">
                    <div className="title">
                        <h2>Living in Sync</h2>
                        <p>Track your cycle <br/>& optimise your wellbeing</p>
                    </div>
                </article>
                <h3 className="reference">
                    Image designed by Freepik
                </h3>
            </section>

            <section className="welcome-section">
                <img className="intro-image" src={powerStandImage} alt="Power Stand"/>
                <article className="welcome-article">
                    <h2>Welcome,</h2>
                    <p className="welcome-text">
                        to a holistic health platform that I designed to improve the wellbeing of women. A few years ago, I became very interested in women's healthcare after my mom fell ill from a cyst on one of her ovaries. Upon research, I found out that iron deficiency is very common among many women, and this motivated me to create a resource that addresses such critical health issues.
                    </p>
                    <button className="read-further-button"> Read my story </button>
                </article>
            </section>

            <section className="science-part">
                <div className="science-intro">
                    <h2>Connect to your Cycle</h2>
                    <p>
                        Every woman goes through a monthly cycle of fluctuating hormones. Find out when you have the most strength to be highly productive, when you should rest and what nutrition you benefit from most. Live in sync with the rhythm of your body.
                    </p>
                    <img className="cycle" src={cyclegraph} alt="cycle"/>
                </div>
                <article>
                    <div className="homepage-ending">
                        <button className="sign-up-homepage" onClick={handleSignUp}>Sign up</button>
                        <button className="log-in-homepage" onClick={handleLogIn}>Log in</button>
                    </div>
                </article>
            </section>

        </div>
    );
}

export default Home;