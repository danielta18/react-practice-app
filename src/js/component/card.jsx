import React from "react";

const Card = (props) => {
    return (
        <div className="card" style={{width: "18rem"}}>
            <div className="card-body">
                <h5 className="Name">{props.person.name}</h5>
                <h6 className="Gender mb-2 text-body-secondary">{props.person.gender}</h6>
                <p className="card-text">{props.person.ethnicity}</p>
            </div>
        </div>
    )
}

export default Card;