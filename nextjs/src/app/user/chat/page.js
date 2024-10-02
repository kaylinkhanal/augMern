"use client";
import ChatBox from "@/components/chatBox/page";
import { ThinSidebarComponent } from "@/components/thin-sidebar";
import UserListBox from "@/components/userList/page";
import React, { useState } from "react";
const userData = [
	{
		id: 1,
		name: "Alice Johnson",
		avatar: "https://randomuser.me/api/portraits/women/1.jpg",
		email: "alice@example.com",
		onlineStatus: true,
	},
	{
		id: 2,
		name: "Bob Smith",
		avatar: "https://randomuser.me/api/portraits/men/1.jpg",
		email: "bob@example.com",
		onlineStatus: false,
	},
	{
		id: 3,
		name: "Charlie Brown",
		avatar: "https://randomuser.me/api/portraits/men/2.jpg",
		email: "charlie@example.com",
		onlineStatus: true,
	},
	{
		id: 4,
		name: "Diana Prince",
		avatar: "https://randomuser.me/api/portraits/women/2.jpg",
		email: "diana@example.com",
		onlineStatus: false,
	},
	{
		id: 5,
		name: "Ethan Hunt",
		avatar: "https://randomuser.me/api/portraits/men/3.jpg",
		email: "ethan@example.com",
		onlineStatus: true,
	},
];

const Chat = () => {
	const [userSelection, setUserSelection] = useState(userData[0]);
	return (
		<div className="flex gap-4 w-[100%] p-4 bg-[#FFF8E6]">
			<ThinSidebarComponent />
			<UserListBox
				userData={userData}
				userSelection={userSelection}
				setUserSelection={setUserSelection}
			/>
			<ChatBox userSelection={userSelection} />
		</div>
	);
};

export default Chat;
