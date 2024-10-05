'use client'
import React, { useEffect, useState } from 'react'
import CategoriesCard from '../categoriesCard/page'

const CategoriesList = () => {
    const [categoriesList, setCategoriesList] = useState([])
     useEffect(()=>{
        fetchCategories()
     },[])

     const fetchCategories = async ()=>{
        const data = await fetch('https://api.escuelajs.co/api/v1/categories')
        let categories = await data.json()
        setCategoriesList(categories)

     }
  return (
    <div className='flex gap-4'>
        {
        categoriesList.map((item)=>{
            return (
               <CategoriesCard item={item}/>
            )
        })
        }</div>
  )
}

export default CategoriesList