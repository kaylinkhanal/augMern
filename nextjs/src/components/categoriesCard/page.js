'use client'
import { Trash2 } from 'lucide-react'
import React from 'react'

const CategoriesCard = (props) => {
    const handleDelete = ()=>{
        fetch('https://api.escuelajs.co/api/v1/categories/'+props.item.id,{method:'DELETE'})
    }
  return (
    <div >
        <Trash2 onClick={handleDelete}/>
        {props.item.title}
        {props.item.price}

        <img src={props.item?.images[0]?.replace('["','')?.replace('"]','')} width={100} height={100}/>
    </div>
  )
}

export default CategoriesCard