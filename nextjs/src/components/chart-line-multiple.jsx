"use client"

import { TrendingUp } from "lucide-react"
import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart";


const chartData = [
  { month: "January", income: 186000, expenditure: 80000 },
  { month: "February", income: 305000, expenditure: 200000 },
  { month: "March", income: 237000, expenditure: 120000 },
  { month: "April", income: 373000, expenditure: 190000 },
  { month: "May", income: 409000, expenditure: 230000 },
  { month: "June", income: 414000, expenditure: 240000 },
]

const chartConfig = {
  income: {
    label: "Income",
    color: "hsl(var(--chart-1))",
  },

  expenditure: {
    label: "Expenditure",
    color: "hsl(var(--chart-2))",
  }
}



export function ChartLineMultiple() {
  return (
    (<Card className="w-[100%] h-[55%] p-4">
      <CardHeader>
        <CardTitle>Income vs Expenditure</CardTitle>
        <CardDescription>January - June 2024</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
              top: 12,
              bottom: 12,
            }}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)} />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              domain={[0, 500000]} />
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <Line
              dataKey="income"
              type="monotone"
              stroke="var(--color-income)"
              strokeWidth={2}
              dot={false} />
            <Line
              dataKey="expenditure"
              type="monotone"
              stroke="var(--color-expenditure)"
              strokeWidth={2}
              dot={false} />
          </LineChart>
        </ChartContainer>
      </CardContent>
    
    </Card>)
  );
}