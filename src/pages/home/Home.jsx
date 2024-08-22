import React from 'react';
import "./Home.css";
import {useNavigate} from "react-router-dom";
import mainimage from "../../assets/backgroundsalome.jpg";

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page-wrapper">
            <section className="home-part1">
                <img className="background-image1" src={mainimage} alt="background-image"/>
                <p className="homepage-tagline">Transform your Health, < br/> Connect to your Cycle’s Rhythm</p>
            </section>

            <section className="home-part2">
                <p className="cycle-synced">Cycle-synced living</p>
                <p className="homepage-subtitle">Finding Balance Through</p>
                <div className="home-part2-pillars">
                    <div className="pillar">
                    <img className="home-image" src="https://i.pinimg.com/564x/d6/b8/cc/d6b8cc9a742d178c5502d3c65f0b75ed.jpg" alt="home-image"/>
                     <h3>Nutrition</h3>
                    </div>

                    <div className="pillar">
                        <img className="home-image" src="https://i.pinimg.com/564x/91/c5/7b/91c57b6b899c8109e4db1ec811026176.jpg" alt="home-image"/>
                        <h3>Mindfulness</h3>
                    </div>

                    <div className="pillar">
                    <img className="home-image" src="https://i.pinimg.com/564x/3a/48/58/3a4858185b87780de49e4dbd83b810d6.jpg" alt="home-image"/>
                        <h3>Movement</h3>
                    </div>
               </div>

                    <p className="homepage-quote"> 'My mother's health issues were a wake-up call for me.
                    Now I strive to be a role-model for those who want to also
                    I'm not sure what I'm writing here but im trying my best hahah'<br/> - Salomé, Founder </p>

                    <button className="mystory" onClick={() => navigate('/aboutus')}>Read my story</button>

            </section>

        </div>
    );
}

export default Home;
