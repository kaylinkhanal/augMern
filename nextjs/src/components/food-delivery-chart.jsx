"use client"

import * as React from "react"
import { TrendingUp } from "lucide-react"
import { Cell, Label, Pie, PieChart, ResponsiveContainer } from "recharts"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const chartData = [
  { status: "pending", orders: 75, color: "hsl(var(--primary))" },
  { status: "cooking", orders: 55, color: "hsl(var(--secondary))" },
  { status: "delivered", orders: 180, color: "hsl(var(--accent))" },
  { status: "cancelled", orders: 20, color: "hsl(var(--destructive))" },
]

export default function FoodGraph() {
  const totalOrders = 300

  return (
    (<Card className="w-full max-w-lg">
      <CardHeader>
 
        <CardDescription>Order Status Overview</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={chartData}
                dataKey="orders"
                nameKey="status"
                cx="50%"
                cy="50%"
                innerRadius={50}
                outerRadius={90}
                paddingAngle={2}>
                {chartData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
                <Label
                  content={({ viewBox }) => {
                    const { cx, cy } = viewBox;
                    return (
                      (<text x={cx} y={cy} textAnchor="middle" dominantBaseline="central">
                        <tspan x={cx} y={cy} dy="-0.5em" className="text-2xl font-bold fill-primary">
                          {totalOrders}
                        </tspan>
                        <tspan x={cx} y={cy} dy="1.5em" className="text-sm fill-muted-foreground">
                          Total Orders
                        </tspan>
                      </text>)
                    );
                  }} />
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-4 grid grid-cols-2 gap-4">
          {chartData.map((item) => (
            <div key={item.status} className="flex items-center justify-between">
              <div className="flex items-center">
                <div
                  className="mr-2 h-3 w-3 rounded-full"
                  style={{ backgroundColor: item.color }} />
                <span className="capitalize text-sm font-medium">{item.status}</span>
              </div>
              <Badge variant="secondary">{item.orders}</Badge>
            </div>
          ))}
        </div>
      </CardContent>
    
    </Card>)
  );
}