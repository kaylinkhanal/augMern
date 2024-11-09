import Sidebar from '@/components/sidebar/page'
import StudentSidebar from '@/components/student-sidebar/page'
import { ThinSidebarComponent } from '@/components/thin-sidebar'
import { Avatar } from '@nextui-org/react'
import React from 'react'

const AdminDashboardLayout = ({children}) => {
  return (
    <div className=' flex gap-4'>
        <ThinSidebarComponent/>
        <div className='bg-[#fff8e6] w-[100vw]'>
            {children}
            </div>
            <div className='absolute right-4 top-4'>
            <Avatar isBordered src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />

            </div>
        </div>
  )
}

export default AdminDashboardLayout