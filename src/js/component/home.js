import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	const [state, setState] = useState("Hello World!");
	const myFunction = () => {
		console.log("This is an example");
		setState("Good Bye World!");
	};
	return (
		<div className="text-center mt-5" onClick={myFunction}>
			<h1>{state}</h1>
		</div>
	);
}
