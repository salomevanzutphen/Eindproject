import React from 'react';
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
                    "When my mother got sick, I wanted to find the root of the problem. Is our modern-day lifestyle to blame?" </blockquote>
            </div>
            <div className="aboutus-maintext">
                <p className="aboutus-maintext1">
                    My passion for women’s healthcare began when my mother got sick in 2022. She started struggling with weakness, fatigue and intense menstrual discomfort due to excessive blood loss. Simple daily tasks exhausted her and she regularly needed the hospital for blood transfusions. Sometimes her blood levels were so low that the doctor was surprised she hadn’t fainted already… After a check-up, we found out that she had grown a cyst on her ovary. We didn’t know the exact cause, but she needed an operation as her condition got worse.
                </p>
                <p className="aboutus-maintext2">
                    During this time, I didn’t live at home, because I was studying abroad in Amsterdam. The distance weighed heavily on me because I couldn’t physically be there to help my mom out. She had to look after my three younger siblings, work full-time and my dad was often abroad for work. Determined to still help in any way I could, I dove into research. What could be the root cause of this illness? Is it stress? Is something in our diet secretly super unhealthy? Will it happen to me, is it genetic?
                </p>
                <p className="aboutus-maintext3">
                    And so I also examined my own hormonal health, wondering if my mother’s condition was a sign of what might come if I didn’t make any lifestyle changes. My hormonal issues mainly stemmed from being on the hormonal pill. During that time I suffered from depression, weight gain and being overly emotional. I wasn’t the only one who struggled with negative symptoms that  were caused by the pill or other types of birth control. I've heard plenty of horror stories: from periods that last up to weeks long, to excruciating stomach pain or severe cases of depression that even lead to suicidal thoughts. Despite the immensely long list of side effects, the pill is still commonly prescribed for acne or heavy periods—a quick fix that doesn’t address the root cause. Are we merely masking symptoms without understanding why they exist?
                </p>
                <p className="aboutus-maintext4">
                    After researching hormonal healthcare and reflecting on my own health journey, I realised that educating women about their menstrual cycle could greatly benefit their overall well-being. By addressing the root causes of many health issues through lifestyle changes, we can focus on prevention rather than waiting until it's too late to take action. "Living in Sync" emphasises three core pillars: nutrition, mindfulness, and movement. Nutrition emphasises nutrient-dense foods, promoting greater awareness of what we consume. Mindfulness is about being in the present moment and learning how to listen to your body's needs. Movement is important because it helps to alleviate stress, boosts dopamine and aids in recovery. Unfortunately, I realised that many of our lifestyles today aren’t organised to value these three pillars, even though they are very important to our health. Processed unhealthy foods are often the cheaper option, widely available and addictive. Many people have a sedentary desk job and commute to work without needing much bodily movement. On top of that, our job and personal life may be causing a build-up of stress. With all that stress we can never be in the present moment, always worrying about the future and our never ending to-do list. With our lack of physical activity, the body can't get rid of the stress and the build-up only increases. These lifestyle issues can possibly be the root that cause hormonal imbalances, over time leading to dangerous health issues. Educate yourself with this application and start making a positive change! Women have a hormonal cycle of (on average) 28 days, constantly influencing our mood, energy and sense of balance. By syncing with our cycles, we honour the natural rhythm of our bodies. This application is designed to help you track your cycle and provide you with the information you need.
                </p>
                <p className="aboutus-maintext5">
                    Feel free to reach out to me! I would love to hear your feedback, we can always learn more from each other! Tell me your health stories and anything that helped you with your journey. Let's create a community where we help & inform one another, making a positive difference for us and the younger generations to come. Please consult your doctor for medical advice. This application does not assume responsibility for your health, and merely exists to spread awareness.
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