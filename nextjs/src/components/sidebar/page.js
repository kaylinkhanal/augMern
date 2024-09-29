import Link from "next/link";
import React from "react";
import Image from "next/image";
import { MdDashboard } from "react-icons/md";
import { PiStudent, PiStudentFill } from "react-icons/pi";
import { AiFillProduct } from "react-icons/ai";
import { FaCalendarAlt } from "react-icons/fa";
import { IoSettings } from "react-icons/io5";


const Sidebar = () => {
	return (
			<div className="flex flex-col  p-4 h-[100vh] w-[20%]">
			<span className="pb-4">
				<Image
					src="/pathao.svg"
					width={100}
					height={100}
				/>
			</span>

			<span className=" flex gap-4  hover:bg-blue-200 p-2 rounded-md">
				<MdDashboard className="text-blue-600" /><Link href="/admin/dashboard"> Dashboard</Link>
			</span>

			<span className="flex  gap-4 hover:bg-blue-200 p-2 rounded-md">
				<PiStudentFill className="text-blue-600" /><Link href="/admin/students">Students</Link>
			</span>

			<span className="flex gap-4  hover:bg-blue-200 p-2 rounded-md">
				<FaCalendarAlt className="text-blue-600 hover:" />
				<Link href="/admin/attendance">Attendance</Link>
			</span>

			<span className="flex gap-4 hover:bg-blue-200 p-2 rounded-md">
				<AiFillProduct className="text-blue-600" /><Link href="/admin/products">Products</Link>
			</span>
			<span className="flex gap-4 hover:bg-blue-200 p-2 rounded-md">
				<IoSettings className="text-blue-600" /><Link href="/admin/setting">Setting</Link>
			</span>
		</div>
	);
};

export default Sidebar;
