'use client'

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Users } from "lucide-react"

export function StudentCountCardComponent() {
  return (
    (<Card className="w-[300px]">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">Total Students</CardTitle>
        <Users className="h-4 w-4 text-muted-foreground" />
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">14,000</div>
        <p className="text-xs text-muted-foreground">Students enrolled</p>
      </CardContent>
    </Card>)
  );
}