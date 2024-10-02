"use client";
import { CircleDot, Dot, GrapeIcon, LeafyGreenIcon } from "lucide-react";
import React from "react";

const UserListBox = (props) => {
	return (
		<div className="flex flex-col bg-white  w-[20%] h-screen shadow-md rounded-2xl p-2">
			{props.userData.map((item) => {
				return (
					<div
						onClick={() => props.setUserSelection(item)}
						className="flex gap-3 p-4 mb-2 shadow-sm  rounded-xl">
						<div className="relative">
							<img
								src={item.avatar}
								className="rounded-[50%] h-[60px]"
							/>
							<div className="absolute top-0 left-1 ">
								{" "}
								{item.onlineStatus ? (
									<Dot
										className="text-green-500 drop-shadow-md"
										size={100}
									/>
								) : (
									<Dot
										className="text-red-500 "
										size={100}
									/>
								)}
							</div>
						</div>
						<div className="font-semibold text-sm">{item.name}</div>
					</div>
				);
			})}
		</div>
	);
};

export default UserListBox;
