import Sidebar from "@/components/sidebar/page";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

import React from "react";

const dashboard = () => {
  return (
    <div className="flex gap-4 m-12 justify-center">
      <div className="flex flex-col bg-yellow-100 w-48 h-72 shadow-md rounded-2xl justify-center items-center p-4">
        <span className="font-semibold">Total Student</span>
        <span className="font-bold text-xl">1500</span>
      </div>
      <div className="flex flex-col bg-green-100 w-48 h-72 shadow-md rounded-xl justify-center items-center p-4">
        <span className="font-semibold">Total Teacher</span>
        <span className="font-bold text-xl">200</span>
      </div>
      <div className="flex flex-col bg-red-100 w-48 h-72 shadow-md rounded-xl justify-center items-center p-4">
        <span className="font-semibold">Total parents</span>
        <span className="font-bold text-xl">200</span>
      </div>
      <div className="flex flex-col bg-blue-100 w-48 h-72 shadow-md rounded-xl justify-center items-center p-4">
        <span className="font-semibold">Total Earning</span>
        <span className="font-bold text-xl">200</span>
      </div>
      <div>
        <Card className="py-4">
          <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
            <p className="text-xl font-bold">Student Stats</p>
          </CardHeader>
          <CardBody className="overflow-visible py-2">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="https://nextui.org/images/hero-card-complete.jpeg"
              width={270}
            />
          </CardBody>
        </Card>
      </div>
    </div>
  );
};

export default dashboard;
