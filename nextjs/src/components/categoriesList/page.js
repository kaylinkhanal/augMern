"use client";
import React, { useEffect, useState } from "react";
import CategoriesCard from "../categoriesCard/page";
import { PaginationDemo } from "../pagination-demo";

const CategoriesList = () => {
  const [categoriesList, setCategoriesList] = useState([]);
  const [totalItems, setTotalItems] = useState(0)
  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    const data = await fetch("https://api.escuelajs.co/api/v1/categories");
    let categories = await data.json();
    setTotalItems(categories.length)
    setCategoriesList(categories);
  };
  return (
    <div className="flex gap-4">
      <div className="flex flex-col">
     
        <div className="flex">
          {categoriesList.map((item) => {
            return <CategoriesCard item={item} />;
          })}
        </div>
        <div>
          <PaginationDemo totalItems={totalItems}/>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
