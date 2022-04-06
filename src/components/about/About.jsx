import React from 'react'
import "./about.css";
import beachPhoto from "../../assets/profile.jpg"

function About() {
  return (
    <div className='about'>
        <div className="about-left">
            <div className="about-card bg"></div>
            <div className="about-card">
                <img src={beachPhoto} alt="" className="about-img" />    
            </div>
        </div>    
        <div className="about-right">
            <h1 className="about-title">About Me</h1>
            <p className="about-subt">Passionate Full-stack Developer</p>
            <p className="about-desc first">I consider myself a passionate Learner <br/> 
            I am actively communicating with developers from all around the world and try to build the best product<br/>
            <br/><br/>
            </p>
            <p className='about-desc second'>
            🌱 <b>Tech stacks</b><br/>
            <b>Back-end : </b>Node.js, Spring framework, Spring boot<br/>
            <b>Front-end : </b>React.js, html, css, javascript<br/>
            <b>Database :</b> MongoDB, Mysql & MariaDB, oracleDB<br/>
            <b>Infrastructure: </b> Docker, AWS
            </p>
        </div>    
    </div>
  )
}

export default About