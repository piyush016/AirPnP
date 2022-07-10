import React from "react";
import { AiFillStar } from 'react-icons/ai';
import '../style.css'

export default function Card(props) {
    let badgeText
    let dotColor
    if(props.item.openSpots === 0){
        badgeText = "SOLD OUT"
        dotColor = "red"
    }else if(props.item.location === "Online"){
        badgeText = "ONLINE"
        dotColor = "green"
    }
    return (
        <div className="card">
            { badgeText? (<div className="card--badge"> <span className={dotColor}> &bull; </span>{badgeText}</div>) : (<div></div>) }
            {/*To insert an image locally use require*/}
            <img src={ require(`../images/${props.item.coverImg}`) } alt="card" className="card--image"/> 
            <div className="card--stats">
                <AiFillStar className="card--star neon" />
                <span className="light">{props.item.stats.rating}</span>
                <span className="gray">({props.item.stats.reviewCount}) &bull; </span>
                <span className="gray">{props.item.location}</span> 
            </div>
            <p className="light bold">{props.item.title}</p>
            <p className="gray card--price"><span className="bold"> From ${props.item.price} / </span> person</p>
        </div>
    )
}