import { ChartLineMultiple } from '@/components/chart-line-multiple'
import FoodGraph from '@/components/food-delivery-chart'
import { ThinSidebarComponent } from '@/components/thin-sidebar'
import React from 'react'

const Dashboard = () => {
  return (
        <div className='flex gap-4'>
            <FoodGraph/>
            <ChartLineMultiple/>
        </div>
  )
}

export default Dashboard