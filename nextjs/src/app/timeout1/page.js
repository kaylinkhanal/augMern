"use client";

import { useState, useEffect } from "react";
// import ReactDOM from "react-dom/client";

const Timer = () => {
	const [count, setCount] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			setCount((count) => count + 1);
		}, 1000);
	},[count]);
	return (
		<div>
			<h1>I have rendered {count} times!</h1>
		</div>
	);
};

export default Timer;
