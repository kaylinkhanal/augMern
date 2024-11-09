import Link from 'next/link'
import React from 'react'
const food =[
    {
        "isFavouriteProduct": true,
        "productImage": "https://i.ytimg.com/vi/aa-w9PD6ctg/maxresdefault.jpg",
        "itemDisplayTag": "Bakery",
        "name": "Sel roti",
        "price": 20,
        "productDescription": "Round sel roti, a traditional sweet rice flour doughnut.",
        "productId": 1
    },
    {
        "isFavouriteProduct": false,
        "productImage": "https://via.placeholder.com/150",
        "itemDisplayTag": "Bakery",
        "name": "Chhaku",
        "price": 15,
        "productDescription": "A crispy and flaky pastry filled with a mixture of sugar and sesame seeds.",
        "productId": 2
    },
    {
        "isFavouriteProduct": true,
        "productImage": "https://via.placeholder.com/150",
        "itemDisplayTag": "Bakery",
        "name": "Momo",
        "price": 30,
        "productDescription": "Soft steamed dumplings filled with spiced meat or vegetables.",
        "productId": 3
    },
    {
        "isFavouriteProduct": false,
        "productImage": "https://via.placeholder.com/150",
        "itemDisplayTag": "Bakery",
        "name": "Bhakka",
        "price": 25,
        "productDescription": "A traditional rice cake, often enjoyed with tea.",
        "productId": 4
    },
    {
        "isFavouriteProduct": true,
        "productImage": "https://via.placeholder.com/150",
        "itemDisplayTag": "Bakery",
        "name": "Puri",
        "price": 10,
        "productDescription": "Deep-fried flatbread that is crispy on the outside and soft inside.",
        "productId": 5
    }
]

const RotiHome = () => {
  return (
    <div className="flex gap-2">
      {food.map((item) => {
        return (
            <Link href={"/roti-home/"+item.productId}>
            <img src={item.productImage} width={100} height={100} />
            {item.name} {item.price}
            </Link>
        );
      })}
    </div>
  );
}

export default RotiHome