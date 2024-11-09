import React from "react";
import Sidebar from "@/components/sidebar/page";

const AdminDashboardLayout = ({ children }) => {
	return (
		<div className="flex gap-4">
			{/**/}
			<Sidebar />
			<div className="bg-[#fff8e6] w-[100vw]"> {children}</div>
		</div>
	);
};

export default AdminDashboardLayout;
