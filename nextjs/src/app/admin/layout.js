import Sidebar from "@/components/sidebar/page";
import { Avatar } from "@nextui-org/react";

const AdminDashboardLayout = ({ children }) => {
  return (
    <div>
      <div className="flex gap-4">
        <Sidebar />
        {children}
      </div>
      <div className="absolute top-4 right-4">
        <Avatar
          isBordered
          color="primary"
          src="https://i.pravatar.cc/150?u=a04258a2462d826712d"
        />
      </div>
    </div>
  );
};
export default AdminDashboardLayout;
