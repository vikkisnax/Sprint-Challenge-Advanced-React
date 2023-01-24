import React from "react";

function Card(props) {
    console.log("Rendering Card component")
    console.log(props)

    return (
    <div className="card-wrapper">
        <p>CARD:</p>
        {props.data.map((eachCard) => (
            <div 
                key={eachCard.name} className="card-follower">  
               <h4>{eachCard.name}</h4>
            </div>
        ))}
    </div>
    )
}

export default Card;