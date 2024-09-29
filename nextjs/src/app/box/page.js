"use client";
import React, { useState } from "react";

const Box = () => {
	const [width, setWidth] = useState(50);
	const [height, setHeight] = useState(50);
	const [backgroundColor, setBackgroundColor] = useState("red");
	const [borderRadius, setBorderRadius] = useState(0);
	const [marginLeft, setMarginLeft] = useState(10);

	return (
		<div>
		// do the movement of box with arrowup, arrowdown, arrowleft & arrowright key
			<div

				style={{
					height,
					width,
					backgroundColor,
					marginLeft,
					borderRadius,
				}}></div>
			<div className="flex flex-col gap-4">
				<button
					className="border-2 h-12 w 20"
					onClick={() => setWidth(width + 10)}>
					Increase width
				</button>
				<input onChange={(e) => setBackgroundColor(e.target.value)} />


				<button onClick={() => setMarginLeft(marginLeft + 10)}>
					Move right
				</button>
			
			</div>
		</div>
	);
};

export default Box;
