import React from "react";
import "./About.css";
import Footer from './Footer';

const About = () => {
    return (
        <>
            <h1 className="abmaintitle"><span className="a">A</span>bout</h1>
            <main className="about">
                <div className="aboutinfo">
                    <h5 className="aboutext">Hello! I am <span className="vm">Vineet Magadum,</span> a passionate and adaptable engineer with a background in Mechanical Engineering and recent certification in  Adavanced Computing/ CS/ IT  from CDAC. This academic journey sparked my enthusiasm for creating innovative solutions in the ever-evolving tech landscape. <br /> As a fresher entering the professional arena, I bring a fresh perspective, a quick learning ability, and a dedication to contributing meaningfully to projects. I am excited about the prospect of applying my skills in a practical setting and am actively seeking opportunities in the IT field.</h5>
                </div>
                <div className="edu">
                    <h3 className="abtitle">EDUCATION :-</h3>
                    <ul className="abtitleinf">
                        <li> <span className="per">PG-DAC -</span> (Advanced Computing) 2023 - CDAC <span className="per">73.64%</span> </li><br />
                        <li> <span className="per">B.Tech - </span> (Mechanical Engineering) 2022 - D Y Patil College of Engineering and Technology, Kolhapur <span className="per">80.74%</span></li><br />
                        <li> <span className="per">HSC - </span> (12th) 2018 - Sou. S.M. Lohia Jr. College, Kolhapur <span className="per">66%</span></li><br />
                        <li> <span className="per">SSC - </span> (10th) 2016 - Shri Lal Bahadur Shastri Highschool, Kolhapur <span className="per">87.4%</span></li>
                    </ul>
                    <br />
                    <hr />
                    <div className="abtitleinfo">
                        <h3 className="abtitle">KNOWN LANGAUGES :-</h3>
                        <ul >
                            <li>Marathi</li> <br />
                            <li>English</li> <br />
                            <li>Hindi</li>
                        </ul><br />

                        <h3 className="abtitle">HOBBIES :-</h3>
                        <ul >
                            <li>Photography/Videography</li><br />
                            <li>Music</li><br />
                            <li>Playing Chess, Football, Cricket</li><br />
                            <li>Reading</li>
                        </ul>
                    </div>
                </div>
            </main>
            <Footer/>
        </>
    )
}

export default About;