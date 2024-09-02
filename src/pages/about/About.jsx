import "./About.css";
import logo from '../../assets/namelogo.png';
import instagram from "../../assets/instagram.png";
import letsconnectsticker from "../../assets/letsconnectsticker.png";
function About() {
    return (


        <div className="aboutus-page">


            <div className="profile-header">
                <img className="headshot" src="https://i.pinimg.com/736x/3b/3c/a1/3b3ca1a8415ec99dd632c57fb40813f5.jpg" alt="Salomé van Zutphen Logo" />
                <img className="namelogo" src={logo} alt="Salomé van Zutphen Logo" />
                <blockquote className="aboutus-quote">
                    ""When my mother got sick, I wanted to find the root of the problem. Or is medication the only solution?" </blockquote>
            </div>
            <div className="aboutus-maintext">
                <p className="aboutus-maintext1">
                    My passion for women’s healthcare began when my mother got sick in 2022. She suffered from hormonal imbalances that led to the growth of a cyst on her ovary. It resulted in her struggling with weakness, fatigue and intense menstrual discomfort due to excessive blood loss. Simple daily tasks became a struggle for her.
                    She regularly needed trips to the hospital for blood transfusions, and sometimes her levels were so low that the doctor was surprised she hadn't fainted already. During this time, I didn’t live at home, because I was studying abroad in Amsterdam. The distance weighed heavily on me because I couldn’t physically be there to help my mom out. She had to look after my three younger siblings, work full-time and my dad was often abroad for work. Determined to still help in any way I could, I dove into research. What could be the root cause of this illness? Is it stress? Is something in our diet secretly super unhealthy? I wanted to find out everything I could to help her, because I don’t believe that being on medication is the only option for our body to heal. It doesn’t always tackle the root cause and makes you dependable on pharmaceuticals.
                </p>
                <p className="aboutus-maintext2">
                    I also began to examine my own hormonal health, wondering if my mother’s condition was a sign of what might come if I didn’t make any lifestyle changes. My hormonal issues mainly stemmed from using birth control. When I was on the pill I suffered from depression, weight gain and being overly emotional. I’ve heard of many more negative symptoms from my friends that were caused by the pill or other types of birth control. From periods that last up to weeks long, to excruciating stomach pains or severe cases of depression that even lead to suicidal thoughts. I've heard plenty of horror stories. Despite the immensely long list of side effects, the pill is still commonly prescribed for acne or heavy periods—a quick fix that doesn’t address the root cause. Are we merely masking symptoms without understanding why they exist? Could this be the reason why many women today, including my mom, are battling hormonal health issues?
                </p>
                <p className="aboutus-maintext3">
                    For a long time, women’s healthcare has been undervalued. Did you know that before 1993, women were scarcely included in clinical trials, even for medications that were designed for them? If men had to be on hormonal birth control pills, would they be more effective? Would more research be dedicated to avoid leaving them to deal with the long list of side effects that can be detrimental for your mental and physical well-being? I believe that we desperately need more funding and research into women’s hormonal health. We’re still in the dark about the root cause of many issues, and for many, current birth control options are far from ideal solutions. I created this platform to offer an alternative, holistic way of looking at healthcare. Maybe you are passionate about your health and you want to learn more. Maybe you’re like me, on a break from birth control and wanting to rebalance your hormones naturally. Maybe you’re sick, like my mother was, and you desperately seek new ways of living to heal yourself.
                </p>
                <p className="aboutus-maintext4">
                    "Living in Sync" focuses on three main pillars: nutrition, mindfulness and movement. Nutrition emphasises nutrient-dense foods, promoting greater awareness of what we consume. Mindfulness is about being in the present moment and learning how to listen to your body's needs. Movement is important because it helps to alleviate stress, boosts dopamine and aids in recovery. Unfortunately, I realised that many of our lifestyles today aren’t organised to value these three pillars. Processed unhealthy foods are often the cheaper option, widely available and addictive. Many people have a sedentary desk job and commute to work without needing much bodily movement. On top of that, our job and personal life may be causing a build-up of stress. With all that stress we can never be in the present moment, always worrying about the future and our never ending to-do list. With our lack of physical activity, the body can't get rid of the stress and the build-up only increases. These lifestyle issues can be the root that cause hormonal imbalances, over time leading to dangerous health issues. Educate yourself with this application and start making a positive change! Women have a hormonal cycle of (on average) 28 days, constantly influencing our mood, energy and sense of balance. By syncing with our cycles, we honor the natural rhythm of our bodies. This application is designed to help you track your cycle and provide you with the information you need.
                </p>
                <p className="aboutus-maintext5">
                    Feel free to reach out to me! I would love to hear your feedback, we can always learn more from each other! Tell me your health stories and anything that helped you with your journey. Let's create a community where we help & inform one another, making a positive difference for us and the younger generations to come.

                </p>
            </div>

            <div className="aboutus-socialmedia">
                <img className="sticker" src={letsconnectsticker} alt="Salomé van Zutphen Logo" />
                <img className="aboutus-instagram-icon" src={instagram} alt="tempimage"/>
                <a className="aboutus-socialhandle"
                   href="https://www.instagram.com/salome__vz/" target="_blank">@salome__vz</a>



            </div>


        </div>
    );
}

export default About;