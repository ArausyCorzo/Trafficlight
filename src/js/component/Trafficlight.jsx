import React, { useState } from "react";

const Trafficlight = () => {
	const [red, setRed] = useState("");
	const [yellow, setYellow] = useState("");
	const [green, setGreen] = useState("");

	function changeColor(color) {
		if (color === "red") {
			setRed("shadow");
			setYellow("");
			setGreen("");
		} else if (color === "yellow") {
			setYellow("shadow");
			setRed("");
			setGreen("");
		} else {
			setGreen("shadow");
			setRed("");
			setYellow("");
		}
	}

	return (
		<div className="container">
			<div className="square"></div>
			<div className="traffic-light">
				<div
					onClick={() => {
						changeColor("red");
					}}
					className={`light red ${red}`}></div>
				<div
					onClick={() => {
						changeColor("yellow");
					}}
					className={`light yellow ${yellow}`}></div>
				<div
					onClick={() => {
						changeColor("green");
					}}
					className={`light green ${green}`}></div>
			</div>
		</div>
	);
};

export default Trafficlight;
