import React from 'react';
import "./Home.css";
import {useNavigate} from "react-router-dom";
import mainimage from "../../assets/backgroundsalome.jpg";

function Home() {
    const navigate = useNavigate(); // If you need navigation

    return (
        <div className="home-page-wrapper">
            <section className="home-part1">
                <img className="background-image1" src={mainimage} alt="background-image"/>
                <p>Transform your Health, < br/> Connect to your Cycle’s Rhythm</p>
            </section>

            <section className="home-part2">
                <img className="intro-image" src="https://i.pinimg.com/736x/87/2d/b7/872db7503d2347cc15483e31b70413f7.jpg" alt="Profileshot"/>
                <div className="home-part2-info">
                    <p className="homepage-quote"> 'My mother's health issues were a wake-up call for me.
                    Now I strive to be a role-model for those who want to also
                    I'm not sure what I'm writing here but im trying my best hahah' </p>

                    <div className="home-part2-images">
                        <img className="home-image" src="https://i.pinimg.com/564x/ca/bc/30/cabc30dc52bcb870cb5a6af69d603439.jpg" alt="home-image"/>
                        <img className="home-image" src="https://i.pinimg.com/564x/04/cd/71/04cd718725f9d5878375b72e007bdc89.jpg" alt="home-image"/>
                        <img className="home-image" src="https://i.pinimg.com/564x/20/3a/c8/203ac84719f087f7da3ff51a6fa718c0.jpg" alt="home-image"/>
                    </div>

                    <h2>Cycle-synced living</h2>
                    <p className="cycleliving-p">Find out what inspired me < br/> to create this application</p>
                    <button className="mystory" onClick={() => navigate('/aboutus')}>Read my story</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
