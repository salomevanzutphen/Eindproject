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
                <p className="homepage-tagline">Transform your Health, < br/> Connect to your Cycle’s Rhythm</p>
            </section>

            <section className="home-part2">
                <img className="home-profile-image" src="https://i.pinimg.com/736x/87/2d/b7/872db7503d2347cc15483e31b70413f7.jpg" alt="Profileshot"/>
                <div className="home-part2-info">
                    <p className="homepage-quote"> 'My mother's health issues were a wake-up call for me.
                    Now I strive to be a role-model for those who want to also
                    I'm not sure what I'm writing here but im trying my best hahah' </p>

                    <div className="home-part2-images">
                        <img className="home-image" src="https://i.pinimg.com/564x/5f/7f/70/5f7f70b54ee07e1a90f5a10cc7e66474.jpg" alt="home-image"/>
                        <img className="home-image" src="https://i.pinimg.com/564x/c1/fe/f6/c1fef632beabb5417911744c7c2d0c2a.jpg" alt="home-image"/>
                        <img className="home-image" src="https://i.pinimg.com/736x/cf/f7/2e/cff72e1067f3e8c14cc3d762afa34e76.jpg" alt="home-image"/>
                    </div>

                    <p className="cycle-synced">Cycle-synced living</p>
                    <p className="cycleliving-p">Find out what inspired me < br/> to create this application</p>
                    <button className="mystory" onClick={() => navigate('/aboutus')}>Read my story</button>
                </div>
            </section>
        </div>
    );
}

export default Home;
