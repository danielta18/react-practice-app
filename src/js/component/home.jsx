import React from "react";
import CardGenerator from "./card-generator";
import Card from "./card";

let people = [
	{ name: "Daniel", gender: "male", ethnicity: "Italian"},
	{ name: "George", gender: "male", ethnicity: "Bulgarian"},
	{ name: "Derek", gender: "male", ethnicity: "Lebanese"},
	{ name: "Nate", gender: "male", ethnicity: "Ethiopian"},
	{ name: "Marjorie", gender: "female", ethnicity: "Ecuadorian"},
	{ name: "Redando", gender: "male", ethnicity: "Haitian"}
]


const Home = () => {
	return (
		<div className="text-center">
			<CardGenerator people={people}/>
		</div>
	);
};

export default Home;
