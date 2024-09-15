import Sidebar from '@/components/sidebar/page'
import React from 'react'

const AdminDashboardLayout = ({children}) => {
  return (
    <div className='flex gap-4'>
    <Sidebar/>
    {children}
    </div>
  )
}

export default AdminDashboardLayout