import React from "react";
import Card from "./card";

const CardGenerator = (props) => {
    return (
        <div>
        {props.people == "" ? <div> There is no data </div> 
            : 
            props.people.map((person, index) => {
            return (
                <Card key={index} person={person}/>
            )
        })}
        </div>
    )
}


export default CardGenerator;