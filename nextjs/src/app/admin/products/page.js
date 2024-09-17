"use client";
import { Button, Card, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="flex gap-3 m-4">
      <Card className="w-72 h-96">
        <CardHeader>
          <Image
            src="/jeans.jpeg"
            className="w-full"
            width={200}
            height={200}
          />
        </CardHeader>
        <CardFooter className="flex flex-col mb-4">
          <span className="font-semibold">Funky Denim Grunge Jeans</span>
          <div className="mt-1">
            <span className="text-red-500 items-start">Rs. 1,899</span>
            <Button className="ml-6 font-bold bg-lime-400" variant="bordered">
              ADD TO CART
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
};
export default Products;
