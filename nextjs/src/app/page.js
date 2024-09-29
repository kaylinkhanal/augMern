// /*import React from "react";

// const page = () => {
// 	return (
// 		<div>
// 			<h1>INput</h1>

// 			<h1>Table</h1>
// 			<table>
// 				<tr>
// 					<th>Id</th>
// 					<th>Name</th>
// 					<th>phone</th>
// 					<th>email</th>
// 				</tr>

// 				<tr>
// 					<td>2</td>
// 					<td>sishir</td>
// 					<td>7654324567</td>
// 					<td>a@gmail.com</td>
// 				</tr>
// 				<tr>
// 					<td>3</td>
// 					<td>bishwas</td>
// 					<td>435678965643</td>
// 					<td>6@gmail.com</td>
// 				</tr>
// 			</table>
// 		</div>
// 	);
// };
// export default page;

// */

// {
// 	/**-----------New rafce---------------------	 */
// }
// import React from "react";

// const Home = () => {
// 	return (
// 		<div className="Home">
// 			<p>Home</p>
// 			<input
// 				type="text"
// 				placeholder="enter your name"
// 			/>
// 			<input type="password" />
// 			<input type="file" />
// 			<button>click me</button>
// 			<h1>hi</h1>
// 			<li>orange</li>
// 			<li>ball</li>
// 			<p>hi guys</p>
// 			<h1>table</h1>
// 			<tr>
// 				<th>Id</th>
// 				<th>Name</th>
// 				<th>age</th>
// 				<th>roll no</th>
// 			</tr>
// 			<tr>
// 				<td>1</td>
// 				<td>aakash</td>
// 				<td>12</td>
// 				<td>2</td>
// 			</tr>
// 			<tr>
// 				<td>2</td>
// 				<td>sishir</td>
// 				<td>10</td>
// 				<td>1</td>
// 			</tr>
// 			<tr>
// 				<td>3</td>
// 				<td>bishwas</td>
// 				<td>4</td>
// 				<td>2</td>
// 			</tr>
// 		</div>
// 	);
// };

// export default Home;




'use client'
import React, { useState } from 'react'

const Main = () => {
	const [increment, setIncrement] = useState(1)
	const [decrement, setDecrement] = useState(10)
	const [number, setNumber] = useState(5)
	function handleIncrement() {
		if (increment < 10)
			setIncrement(increment + 1)
	}
	function handleDecrement() {
		if (decrement > 0)
			setDecrement(decrement - 1)
	}

	function handleIncrementNumber() {
		if (number < 10)
			setNumber(number + 1)
	}

	function handleDecrementNumber() {
		if (number > 0)
			setNumber(number - 1)

	}


	return (
		<div className="flex flex-col">
			<div>Increase decrease two different numbers with two different increment /decrement butttons</div>
			<div className="flex gap-2">
				<span>{increment}</span>
				<button className="w-20 h-4 bg-green-100" onClick={handleIncrement}>	+		</button>
			</div>
			<br />
			<div className="flex gap-2">
				<span className="w-20 h-4">{decrement}</span>
				< button className="w-20 h-4 bg-red-100" onClick={handleDecrement}>		-		</button>
			</div>
			<br />
			<br />
			<div>Increase same  number or decrease same number with two different increment /decrement butttons</div>
			<div className="flex flex-col gap-2">


				<span className="w-20 h-4">
					{number}
				</span>
				<div className="flex gap-4">
					< button className="w-20 h-4 bg-green-100" onClick={handleIncrementNumber}>		+		</button>
					< button className="w-20 h-4 bg-red-100" onClick={handleDecrementNumber}>		-		</button>
				</div>

			</div>

		</div >

	)
}

export default Main