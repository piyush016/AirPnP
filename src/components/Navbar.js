import React from "react";
import '../style.css'
import logo from '../images/logo.png'

export default function App() {
    return (
        <div>
            <nav>
                <img className="nav--img" src={logo} alt="logo" />
            </nav>
            <hr className="light"/>
        </div>
    )
}