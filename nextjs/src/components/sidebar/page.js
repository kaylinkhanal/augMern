import Link from "next/link";
import React from "react";
import Image from "next/image";

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

			<span className="hover:bg-blue-200 p-2 rounded-md">
				<Link href="/admin/dashboard">Dashboard</Link>
			</span>

			<span className="hover:bg-blue-200 p-2 rounded-md">
				<Link href="/admin/students">Students</Link>
			</span>

			<span className="hover:bg-blue-200 p-2 rounded-md">
				<Link href="/admin/attendance">Attendance</Link>
			</span>
			<span className="hover:bg-blue-200 p-2 rounded-md">
				<Link href="/admin/products">Products</Link>
			</span>
		</div>
	);
};

export default Sidebar;
