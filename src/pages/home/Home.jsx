import "./Home.css";
import {useNavigate} from "react-router-dom";
import mainimage from "../../assets/backgroundsalome.jpg";


function Home() {
    const navigate = useNavigate();

    return (
        <div className="home-page-wrapper">
            <section className="home-part1">
                <img className="background-image1" src={mainimage} alt="background-image"/>
                <p>Transform your Health, < br/> Connect to your Cycle’s Rhythm</p>
            </section>

            <section className="home-part2">

                <p className="cycleliving-title">Cycle-synced Living</p>
                <p className="cycleliving-subtitle">Finding Balance Through</p>
                <div className="homepage-pillars">
                    <div>
                        <img className="home-image" src="https://i.pinimg.com/564x/aa/a3/96/aaa39653b588c5700e5d58d7fc79d729.jpg" alt="home-image"/>
                    <p>Nutrition</p>
                    </div>
                    <div>
                        <img className="home-image" src="https://i.pinimg.com/564x/4d/d6/fc/4dd6fc53137ed0180d9f2d5a49f82e81.jpg" alt="home-image"/>
                        <p>Mindfulness</p>
                    </div>
                    <div>
                        <img className="home-image" src="https://i.pinimg.com/564x/0c/9a/1a/0c9a1ad6a638c1fa84a974ea9782abdc.jpg" alt="home-image"/>
                        <p>Movement</p>
                    </div>
                </div>

                <blockquote className="homepage-quote">
                    "When my mother got sick, I wanted to find the root of the problem. Or is medication the only solution?" - Salomé
                </blockquote>
                    <button className="mystory" onClick={() => navigate('/about')}>Read my story</button>



            </section>

        </div>
    );
}

export default Home;