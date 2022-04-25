import React from "react";
import './card.style.css'

export const Card = (props)=>{
    // console.log(props)
    return( 
        <div className="card-container">
            <img alt="monster" src={`https://robohash.org/${props.hero.id}&size=180x180`}></img>
            <h1 key={props.hero.id}>{props.hero.name}</h1>
            <h2>{props.hero.email}</h2>
        </div> )
}