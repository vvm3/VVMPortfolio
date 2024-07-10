import React from 'react';
import './Skills.css';
import { IoLogoJavascript } from "react-icons/io5";
import Footer from './Footer';
import { SiMysql, SiApachetomcat, SiHibernate, SiCsharp, SiSpring, SiMicrosoftword, SiDotnet } from 'react-icons/si';
import { FaHtml5, FaCss3Alt, FaReact, FaJava, FaProjectDiagram, FaDatabase, FaSitemap, FaUserTie, FaHandshake, FaCogs } from 'react-icons/fa';

const Skills = () => {
    return (<>
        <h1 className='skilltitle'><span className='my'>My</span> Skills</h1>
        <main className="skillmain">
            <div className="skill">
                <FaHtml5 className="icon html" />
                <h2 className='h2'>HTML5</h2>
            </div>
            <div className="skill">
                <FaCss3Alt className="icon css" />
                <h2 className='h2'>CSS3</h2>
            </div>
            <div className="skill">
                <IoLogoJavascript className="icon js" />
                <h2 className='h2'>JavaScript</h2>
            </div>
            <div className="skill">
                <FaReact className="icon react" />
                <h2 className='h2'>React.js</h2>
            </div>
            <div className="skill">
                <FaJava className="icon java" />
                <h2 className='h2'>JAVA</h2>
            </div>
            <div className="skill">
                <FaProjectDiagram className="icon oops" />
                <h2 className='h2'>OOPs</h2>
            </div>
            <div className="skill">
                <SiMysql className="icon sql" />
                <h2 className='h2'>MySql DB</h2>
            </div>
            <div className="skill">
                <FaDatabase className="icon jdbc" />
                <h2 className='h2'>JDBC</h2>
            </div>
            <div className="skill">
                <SiApachetomcat className="icon jsp" />
                <h2 className='h2'>Servlet/JSP</h2>
            </div>
            <div className="skill">
                <SiHibernate className="icon hibernate" />
                <h2 className='h2'>Hibernate</h2>
            </div>
            <div className="skill">
                <SiSpring className="icon spring" />
                <h2 className='h2'>Spring/SpringBoot</h2>
            </div>
            <div className="skill">
                <FaSitemap className="icon dsa" />
                <h2 className='h2'>DSA</h2>
            </div>
            <div className="skill">
                <SiCsharp className="icon c" />
                <h2 className='h2'>C#</h2>
            </div>
            <div className="skill">
                <SiDotnet className="icon dotnet" />
                <h2 className='h2'>ASP.NET MVC</h2>
            </div>
            <div className="skill">
                <SiMicrosoftword className="icon msoffice" />
                <h2 className='h2'>MS Office</h2>
            </div>
            <div className="skill">
                <FaUserTie className="icon leader" />
                <h2 className='h2'>Leadership</h2>
            </div>
            <div className="skill">
                <FaHandshake className="icon collab" />
                <h2 className='h2'>Collaborative</h2>
            </div>
            <div className="skill">
                <FaCogs className="icon solution" />
                <h2 className='h2'>Solution-Oriented</h2>
            </div>
        </main>
        <Footer/>
    </>
    );
};

export default Skills;
