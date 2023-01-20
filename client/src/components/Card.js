//this shows the NAMES from the data that you passed down from App

import React from "react";


function Card(props) {
    console.log("Rendering Card component")
    console.log(props)

    return (
    <div className="card-wrapper">
        <p>CARD:</p>
        {props.data.map((eachCard) => (
            <div 
                //bc they don't have a key... maybe add a key
                key={eachCard.name} className="card-follower">  

               <h4>{eachCard.name}</h4>
            </div>
        ))}
    </div>
    )
}

export default Card;