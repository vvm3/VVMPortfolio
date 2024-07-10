import React from "react";
import "./Work.css";
import WorkChild from "./WorkChild";
import portfolioImg from "./Content/vm.jpeg";
import game from "./Content/TicTacToeProject.png";
import todoreact from "./Content/To-Do ReactProject.png";
import cal from "./Content/CalculatorProject.png";
import quiz from "./Content/QuizProject.png";
import todo from "./Content/ToDoProject.png";
import github from "./Content/GitHubProject.jpg";
import Footer from './Footer';

const Work = () => {
    return (
        <>
            <h1 className="wmaintitle"><span className="my">My</span> Work</h1>
            <main className="wmain">
                <WorkChild link=" " img={portfolioImg} proname="Peronal Portfolio" technologies="Technolohies : React.js, JS, CSS3, HTML5" btnname="Try Now" />
                <WorkChild link="https://tvm8.github.io/VMTIC-TAC-TOE-GAME/" img={game} proname="TIC-TAC-TOE Game" technologies="Technolohies : JavaScript, CSS3, HTML5" btnname="Try Now" />
                <WorkChild link="https://tvm8.github.io/To-Do-React/" img={todoreact} proname="To-Do React App" technologies="Technolohies : React.js, JS, CSS3, HTML5" btnname="Try Now" />
                <WorkChild link="https://tvm8.github.io/VMCalculator/" img={cal} proname="Fully Functional Calculator" technologies="Technolohies : JS, CSS3, HTML5" btnname="Try Now" />
                <WorkChild link="https://tvm8.github.io/Quiz-App/" img={quiz} proname="Quiz Web App" technologies="Technolohies : JS, CSS3, HTML5" btnname="Try Now" />
                <WorkChild link="https://tvm8.github.io/ToDo-app/" img={todo} proname="To-Do Web App" technologies="Technolohies : JavaScript, CSS3, HTML5" btnname="Try Now" />
                <WorkChild link="https://github.com/tVM8" img={github} proname="My GitHub Account" technologies="Here Is My All Projects" btnname="Click Here" />
            </main>
            <button className="wbtn" onClick={() => { alert("Now only these projects have been completed, a full stack project is in the process. Please visit on my GitHub account") }}>See More</button>
            <Footer/>
        </>
    )
}

export default Work;