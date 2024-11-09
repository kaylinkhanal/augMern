"use client"

import LineChart from "@/components/linechart/page";
import { Avatar } from "@nextui-org/react";
import React from "react";
import { IoNotifications } from "react-icons/io5";
import { MdChat } from "react-icons/md";
import { GiRead } from "react-icons/gi";
import { GiTeacher } from "react-icons/gi";

import { RiParentFill } from "react-icons/ri";
import { RiMoneyDollarCircleFill } from "react-icons/ri";

import BarChart from "@/components/barchart/page";

import CreateDoughnutData from "@/components/doughnutchart/page";
/** */
const Dashboard = () => {
  return (
    <div className="flex pl-8 pt-4 gap-4 flex-col w-full bg-blue-600">
      {/* Searchbar and avatar---------------------------------------------*/}
      <div className="flex bg-red-600 gap-80">
        <div className="w-3/5">
          <input
            className="p-2 w-4/5 rounded-lg"
            type="search"
            placeholder="Search Dashboard"
          />
        </div>

        <div className="flex gap-6 text-xl items-center">
          <MdChat />
          <IoNotifications />
          <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        </div>
      </div>
      <div className="flex gap-2">
        <div className="flex flex-col w-3/4">
          { /** -------4-cards below search bar----------------------------*/}
          <div className="flex flex-col  bg-yellow-600 ">
            <div className=" flex flex-wrap gap-8">
              <span className="flex  bg-yellow-100 hover:bg-yellow-200 h-48 w-44 shadow-md items-center justify-center text-center p-4 rounded-2xl font-family='verdana'">
                <span className="flex flex-col items-center ">
                  <GiRead className="flex justify-center items center p-2 w-20 rounded-full h-20  bg-gray-400  " />
                  <span>Total Students</span>
                  <span className="font-bold">
                    <span>15000</span>
                  </span>
                </span>
              </span>
              <span className="flex flex-col bg-green-100 hover:bg-yellow-200 h-48 w-44 shadow-md justify-center text-center p-4 rounded-2xl font-family='verdana'">
                <span className="flex flex-col justify-center items-center">
                  <GiTeacher className="flex justify-center p-2 w-20 rounded-full h-20  bg-gray-400  " />
                  <span>Total Teachers</span>
                  <span className="font-bold">120</span>
                </span>
              </span>

              <span className="flex flex-col bg-red-100 hover:bg-yellow-200 h-48 w-44 shadow-md justify-center text-center p-4 rounded-2xl font-family='verdana'">
                <span className="flex flex-col justify-center items-center">
                  <RiParentFill className="flex justify-center p-2 w-20 rounded-full h-20  bg-gray-400  " />
                  <span>Total parents</span>
                  <span className="font-bold">2500</span>
                </span>
              </span>
              <span className="flex flex-col bg-blue-100 hover:bg-yellow-200 h-48 w-44 shadow-md justify-center text-center p-4 rounded-2xl font-family='verdana'">
                <span className="flex flex-col justify-center items-center">
                  <RiMoneyDollarCircleFill className="flex justify-center p-2 w-20 rounded-full h-20  bg-gray-400  " />
                  <span>Total Earnings</span>
                  <span className="font-bold">$1600000</span>
                </span>
              </span>
              {/**----------------------------2-cards-below-4 cards----------------- */}
              <div className=" flex float-left w-full gap-8 ">
                <div className="flex flex-col h-60 w-3/5 bg-gray-100 hover:bg-gray-200 rounded-2xl ">
                  <LineChart className="" />
                </div>

                <div className="flex flex-col h-60 w-2/5 bg-gray-100 hover:bg-gray-200 rounded-2xl ">
                  <BarChart />
                </div>
              </div>
            </div>
          </div>

        </div>



        {/**------------ 2 cards at right -side-------------------------------------------- */}

        <div className="flex flex-col gap-4 mt-2">
          <div className=" h-80 w-64 bg-gray-100 hover:bg-gray-200 rounded-2xl ">
            <CreateDoughnutData />
          </div>

          <div className="h-60 w-64 bg-gray-100 hover:bg-gray-200 rounded-2xl ">
            qqqqqqqqqqqqqqqqqqqqqq
          </div>
        </div>
      </div>

    </div>
  );
};

export default Dashboard;

// import React from "react";

// const Dashboard = () => {
// 	return (
// 		<div className="">
// 			{/**------------------------side-menu----------------------------------------------- */}
// 			<div className="flex flex-wrap flex-col w-1/5 p-4 h-screen border border-r border-gray-300 /
//float-left ">
// 				<span>
// 					<img
// 						src="/pathao.svg"
// 						height={100}
// 						width={100}
// 					/>
// 				</span>
// 				<br />
// 				<span className="p-2 w-44 rounded-lg bg-blue-50 focus:bg-blue-200 hover:bg-blue-100">
// 					Dashboard
// 				</span>
// 				<span className="p-2 w-44 rounded-lg  focus:bg-blue-200 hover:bg-blue-100">
// 					Messenger
// 				</span>
// 				<span className="p-2 w-44 rounded-lg  focus:bg-blue-200 hover:bg-blue-100">
// 					Calender
// 				</span>
// 				<span className="p-2 w-44 rounded-lg  focus:bg-blue-200 hover:bg-blue-100">
// 					Database
// 				</span>
// 				<span className="p-2 w-44 rounded-lg  focus:bg-blue-200 hover:bg-blue-100">
// 					Attendance
// 				</span>
// 				<span className="p-2 w-44 rounded-lg  focus:bg-blue-200 hover:bg-blue-100">
// 					Setting
// 				</span>
// 			</div>
// 			<div className="float-left w-4/5 mt-0 bg-blue-100">
// 				<div className="ml-16 float-left bg-green-100">
// 					{/**----------search bar & account icon------------------------ */}
// 					<div className="float-left w-full mt-2 ml-0 bg-red-100">
// 						<div className="float-left">
// 							<label>
// 								<input
// 									className="w-80 h-10 border-t border-gray-600 rounded-md text-gray-900"
// 									type="search"
// 									placeholder="Search Dashboard"
// 								/>
// 							</label>
// 						</div>

// 						<div className=" flex float-right mr-8">
// 							<span className="h-full w-full text-white p-2 bg-gray-600">
// 								B1
// 							</span>
// 							&ensp;
// 							<span className="h-full w-full text-white p-2 bg-gray-600">
// 								B2
// 							</span>
// 							&ensp;
// 							<span className="h-full w-full text-white p-2 bg-gray-600">
// 								B3
// 							</span>
// 						</div>
// 					</div>

// 					{/**------------------------------------------------------------------------------ */}
// 					<div className="flex float-left gap-8 mt-8 justify-center">
// 						<div className="flex flex-col bg-yellow-100 hover:bg-yellow-200 h-44 w-36 shadow-md justify-center text-center p-4 rounded-2xl font-family:'Verdana'">
// 							<span>Total Student </span>
// 							<span className="font-bold">15593</span>
// 						</div>
// 						<div className="flex flex-col  hover:bg-green-200 h-44 w-36  shadow-md justify-center text-center p-4 rounded-2xl">
// 							<span>Total Teacher</span>
// 							<span className="font-bold">1500</span>
// 						</div>
// 						<div className="flex flex-col bg-red-100 hover:bg-red-200 h-44 w-36  shadow-md justify-center text-center p-4 rounded-2xl">
// 							<span>Total Parents</span>
// 							<span className="font-bold">2500</span>
// 						</div>
// 						<div className="flex flex-col bg-blue-100 hover:bg-blue-200 h-44 w-36  shadow-md justify-center text-center p-4 rounded-2xl">
// 							<span>Total Earnings</span>
// 							<span className="font-bold text-black">$160000</span>
// 						</div>
// 					</div>
// 					{/**	------------------------------------------------- */}
// 					<div className=" flex float-right flex-col flex-wrap">
// 						<div className="flex mt-8 mr-8 h-80 w-64 bg-gray-100 hover:bg-gray-200 rounded-2xl ">
// 							<div className="m-4">
// 								<span className="flex justify-center h-32 w-32 rounded-full border-8 border-gray-400 rounded-lg"></span>
// 								<div className="flex gap-8 justify-center item-center">
// 									<span className="flex flex-col h-10 w-24 border-2 border-gray-400 rounded-md"></span>
// 									<span className="flex flex-col h-10 w-24 border-2 border-gray-400 rounded-md"></span>
// 								</div>
// 							</div>
// 						</div>
// 						<div className="flex mt-8 mr-8 h-80 w-64 bg-gray-100 hover:bg-gray-200 rounded-2xl "></div>
// 					</div>
// 					<div className=" flex float-left gap-8 mt-8 justify-center">
// 						<div className="flex flex-col h-60 xl:w-96 bg-gray-100 hover:bg-gray-200 rounded-2xl "></div>
// 						<div className="flex flex-col h-60 xl:w-64 bg-gray-100 hover:bg-gray-200 rounded-2xl "></div>
// 					</div>
// 				</div>

// 			</div>
// 		</div>
// 	);
// };

// export default Dashboard;
