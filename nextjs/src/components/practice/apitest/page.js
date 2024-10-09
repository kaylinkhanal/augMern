"use client";

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
		const data = await fetch("https://api.escuelajs.co/api/v1/products");
		let products1 = await data.json();
		setProductsList(products1);
	};

	return (
		<div>
			<div>
				{productsList.map((item) => {
					return <div>{item.id}</div>;
				})}
			</div>
		</div>
	);
};

export default ApiTesting1;
