"use client";
import React, { isValidElement, useState } from "react";
import { version } from "react-dom";

const Game1 = () => {
	//const [num, setNum] = useState(0);
	const [selections, setSelections] = useState([]);
	const [isGameOver, setIsGameOver] = useState(false);
	const arrBox = [
		[1, 7, "", "bomb"],
		[5, 6, 10, 2],
		["bomb", 0, "", 50],
		[3, "", "bomb", ""],
	];

	function resultFinder(val) {
		if (val == "bomb") {
			alert("Game over!!");
			setIsGameOver(true);
			return;
		}
		setSelections([...selections, val]);
	}

	const handleRestart = () => {
		setIsGameOver(false);
		setSelections([]);
	};
	return (
		<div>
			{/* <div
				onClick={() => {
					setNum(num + 1);
				}}>
				Game1
			</div>
			<br />
			<span>{num}</span> */}
			{/* editing */}
			<div className="flex flex-col gap-2 m-auto h-[40%] w-[40%] bg-gray-100">
				{!isGameOver ? (
					arrBox.map((item) => (
						<div className="flex bg-blue-100 ">
							{item.map((value) => (
								<span
									onClick={() => resultFinder(value)}
									className="flex gap-4 text-3xl text-center h-32 w-32 m-2 bg-green-600">
									{selections.includes(value) ? value : ""}
								</span>
							))}
						</div>
					))
				) : (
					<button onClick={() => handleRestart()}>Restart</button>
				)}
			</div>
		</div>
	);
};

export default Game1;
