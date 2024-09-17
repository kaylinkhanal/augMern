"use client";
import { Card, CardFooter, CardHeader } from "@nextui-org/react";
import Image from "next/image";

const Products = () => {
  return (
    <div className="flex gap-3 m-4">
      <Card classNames="w-72">
        <CardHeader>
          <Image
            src="/jeans.jpeg"
            className="w-full"
            width={200}
            height={200}
          />
        </CardHeader>
        <CardFooter></CardFooter>
      </Card>
    </div>
  );
};
export default Products;
