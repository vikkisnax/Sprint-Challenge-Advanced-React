import React from "react";


function Card(props) {
    console.log("Rendering Card component")
    console.log(props)

    return (
    <div className="card-wrapper">
        <p>PLAYER NAMES:</p>
        <p>{props.search}</p>

        {props.data.map((eachCard) => (
            <div 
                //bc they don't have a key... maybe add a key
                key={eachCard.name} className="card-follower">  

               <h3> {eachCard.name}</h3>
            </div>
        ))}
    </div>
    )
}

export default Card;