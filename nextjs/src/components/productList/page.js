"use client";
import React, { useEffect, useState } from "react";
import CategoriesCard from "../categoriesCard/page";
import { PaginationDemo } from "../pagination-demo";

const ProductList = () => {
  const [productList, setProductList] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async (offset=0) => {
    const data = await fetch(`https://api.escuelajs.co/api/v1/products?offset=${offset}&limit=5`);
    let products = await data.json();

    const countData = await fetch(`https://api.escuelajs.co/api/v1/products`);
    let totalProducts = await countData.json();
    setTotalItems(totalProducts.length)
    setProductList(products);
  };
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
     
        <div className="flex">
          {productList.map((item) => {
            return <CategoriesCard item={item} />;
          })}
        </div>
        <div>
          <PaginationDemo totalItems={totalItems} fetchCategories={fetchCategories}/>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
