import React from 'react';
import myProfilePicpic from "./profile-pic.png";
import "./Home.css";

const Home = () =>
 {
  return (
    <>
      <main className='home'>
        <div className='homeinfo'>
            <span>Hello,</span>
            <h1>I am <span className='vin'>Vineet,</span></h1>
            <h1>Full Stack Developer</h1>
            <p>Seeking an entry level position with growing organization,</p>
            <p>where I can utilize my analytical thinking, technical & management skills.</p>
            <button className='hireme'>Hire Me</button>
            <button className='resume'>Download Resume</button>
        </div>
        <div className='img'>
             <img src={myProfilePicpic} alt="myProfilePic"/>
        </div>
      </main>
    </>
  );
}

export default Home;