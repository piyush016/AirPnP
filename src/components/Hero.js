import React from "react";
import Photo from '../images/photo-grid.png'
import '../style.css'

export default function Hero() {
    return (
        <section className="hero"> 
            <img src={Photo} alt="group of photos" className="hero--photo"/>
            <h1 className="hero--header light">Online Experiences</h1>
            <p className="hero--text gray">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            <hr />
        </section>
    )
}