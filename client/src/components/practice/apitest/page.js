"use client";

import Image from "next/image";
import React, { useEffect, useState } from "react";

const ApiTesting1 = () => {
	//useState------------------------------------------
	const [productsList, setProductsList] = useState([]);

	//useEffect------------------------------------------
	useEffect(() => {
		fetchProducts();
	}, []);

	//fetchProducts from fetchAPI-----------------------------------
	const fetchProducts = async () => {
		const data = await fetch("https://fakestoreapi.com/products");
		let products1 = await data.json();
		setProductsList(products1);
	};

	return (
		<div>
			<div>
				{productsList.map((item) => {
					return (
						<div className="">
							<div className="flex  gap-4 w-[400px] h-[100px]">
								<div>{item.id}</div>

								<div>{item.price}</div>
								<br/>
								{/* <div>{item.title}</div>
								<div>{item.description}</div>
								<div>{item.category}</div> */}
								<div className="flex flex-col">
									{item.rating.rate}
									{item.rating.count}
								</div>
							</div>
							<img
								src={item?.image?.replace('["', "")?.replace('"]', "")}

								// optional chaining
								width={100}
								height={100}
							/>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default ApiTesting1;
