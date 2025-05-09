import React from "react";
import "./WorkChild.css";
import "./Work";

const WorkChild = (props) => {
    return (
        <>
            <main className="card">
                <a href={props.link} target="_blank">
                    <img className="pimg" src={props.img} alt="ProjectImg" />
                </a>
                <div className="proinfo">
                    <h3 className="proname">{props.proname}</h3>
                    <p className="ptechnologies"> {props.technologies}</p>
                </div>
                <a href={props.link} target="_newpage">
                    <button className="trynow">{props.btnname}</button>
                </a>
            </main>
        </>
    )
}

export default WorkChild;
