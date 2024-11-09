//  //Solution1
//"use client";
// import React, { useEffect, useState } from "react";

// const HangMan = () => {
// 	const keyboard = [
// 		["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
// 		["a", "s", "d", "f", "g", "h", "j", "k", "l"],
// 		["z", "x", "c", "v", "b", "n", "m"],
// 	];
// 	const hangmanArr = ["|", `-O-`, `|`, `/  /`];
// 	//to store all the selections in a array

// 	const [question, setQuestion] = useState(["_", "h", "_", "_", "o"]);
// 	const answer = ["r", "h", "i", "n", "o"];
// 	const [hangCount, setHangcount] = useState(0);

// 	// useEffect(()=>{

// 	// },[selectedKeys.length])

// 	function addSelection(item) {
// 		// check if item is in the answer
// 		const isIncluded = answer.includes(item);
// 		if (isIncluded) {
// 			//check what index it exists on
// 			const id = answer.indexOf(item);

// 			//create new copy of question
// 			const currentQuestion = [...question];
// 			//change the index in question to the item that is clicked
// 			currentQuestion[id] = item;
// 			//set the output as new question
// 			setQuestion(currentQuestion);
// 		} else {
// 			setHangcount(hangCount + 1);
// 		}
// 	}

// 	return (
// 		<div>
// 			Guess the animal
// 			<br />
// 			{question} <br />
// 			{keyboard.map((item) => {
// 				return (
// 					<div className="flex gap-4 p-2 m-2">
// 						{item.map((item) => {
// 							return (
// 								<div
// 									onClick={() => addSelection(item)}
// 									className="bg-black p-4 border-round-md text-white">
// 									{item}
// 								</div>
// 							);
// 						})}
// 					</div>
// 				);
// 			})}
// 			<div className="flex justify-center items-center w-[60%] text-4xl">
// 				<div className="flex flex-col justify-center items-center w-[400px] text-4xl">
// 					{hangmanArr.map((item, id) => {
// 						if (id > hangCount) return null;
// 						return <div>{item}</div>;
// 					})}
// 				</div>

// 				<div>hello</div>
// 			</div>
// 		</div>
// 	);
// };

// export default HangMan;

//Solution 2

"use client";
import React, { useEffect, useState } from "react";

const questionsAndAnswers = [
	{
		question: ["_", "h", "_", "_", "o"],
		answer: ["r", "h", "i", "n", "o"],
		hint: "An animal",
	},
	{
		question: ["_", "o", "_", "_", "t"],
		answer: ["r", "o", "h", "i", "t"],
		hint: "A Cricket player",
	},
	{
		question: ["m", "_", "s", "_", "i"],
		answer: ["m", "e", "s", "s", "i"],
		hint: "A football player",
	},
];
const HangMan = () => {
	const [page, setPage] = useState(0);
	const keyboard = [
		["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"],
		["a", "s", "d", "f", "g", "h", "j", "k", "l"],
		["z", "x", "c", "v", "b", "n", "m"],
	];
	const hangmanArr = ["|", `-O-`, `|`, `/  /`];
	//to store all the selections in a array

	const [question, setQuestion] = useState(questionsAndAnswers[0].question);
	const [answer, setAnswer] = useState(questionsAndAnswers[0].answer);

	const [hangCount, setHangcount] = useState(0);

	useEffect(() => {
		if (hangCount === 3) {
			alert("Game over");
			setQuestion(questionsAndAnswers[page].answer);
		}
	}, [hangCount]);

	useEffect(() => {
		if (question.join() === answer.join()) {
			alert("You won");
		}
	}, [question]);

	useEffect(() => {
		setQuestion(questionsAndAnswers[page].question);
		setAnswer(questionsAndAnswers[page].answer);
	}, [page]);

	function addSelection(item) {
		const isIncluded = answer.includes(item);
		if (isIncluded) {
			const currentQuestion = [...question];
			answer.map((val, id) => {
				if (val == item) currentQuestion[id] = item;
			});
			setQuestion(currentQuestion);
		} else {
			setHangcount(hangCount + 1);
		}
	}

	return (
		<div>
			Guess the animal
			<br />
			{question} <br />
			{hangCount !== 3 &&
				question.join() !== answer.join() &&
				keyboard.map((item) => {
					return (
						<div className="flex gap-4 p-2 m-2">
							{item.map((item) => {
								return (
									<div
										onClick={() => addSelection(item)}
										className="bg-black p-4 text-white">
										{item}
									</div>
								);
							})}
						</div>
					);
				})}
			<div className="flex flex-col justify-center items-center w-[300px] text-4xl">
				{hangmanArr.map((item, id) => {
					if (id > hangCount) return null;
					return <div>{item}</div>;
				})}
			</div>
			<button onClick={() => setPage(page + 1)}>Next</button>
		</div>
	);
};

export default HangMan;
