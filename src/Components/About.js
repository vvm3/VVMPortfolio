import React from "react";
import "./About.css";

const About = () => {
    return (
        <>
            <main className="about">
                <h1 className="title">About</h1>
                <div className="aboutinfo">
                    <p className="about">A Enthusiastic and adaptable engineer with a foundation in Mechanical Engineering and a PG diploma in Advanced Computing/ CS/ IT
                        from CDAC. This academic journey sparked my enthusiasm for creating innovative solutions in the ever-evolving tech landscape. 
                        <br/>As a fresher entering the professional arena, bring a fresh perspective, a quick learning ability, problem solving and a dedication to contributing
                        meaningfully to projects. Eager to apply my skills in a practical setting and I am actively seeking opportunities in the IT field.</p>
                </div>
                <div className="edu">
                    <h2 className="title">EDUCATION</h2>
                    <p className="titleinfo">• PG-DAC (Advanced Computing) 2023
                    CDAC 73.64%
                    • B.Tech (Mechanical Engineering) 2022
                    D Y Patil College of Engineering and Technology, Kolhapur 80.74%
                    • HSC (12th) 2018
                    Sou. S.M. Lohia Jr. College, Kolhapur 66%
                    • SSC (10th) 2016
                    Shri Lal Bahadur Shastri Highschool, Kolhapur 87.4%</p>
                    <h2 className="title">HOBBIES</h2>
                    <p className="titleinfo"></p>
                </div>
            </main>
        </>
    )
}

export default About;