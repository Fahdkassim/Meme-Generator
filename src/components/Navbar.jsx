import React from "react";
import icon from "../assets/TrollFace.png"

export default function Navbar(){

    return (
        <div className="nav-container">
            <img src={icon} rel="troll-face" className="nav-icon"/>
             <h1 className="nav-title">Meme Generator</h1>
             <h3 className="nav-project">React Course - Project 3</h3>    
        </div>
    )
}