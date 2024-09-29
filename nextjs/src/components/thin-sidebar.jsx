'use client';
import Link from "next/link"
import { BookOpen, Calendar, ClipboardList, GraduationCap, Sparkle, UserCircle2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"

const menuItems = [
  { name: "Assignments", icon: ClipboardList, href: "/assignments" },
  { name: "Attendance", icon: Calendar, href: "/attendance" },
  { name: "Results", icon: BookOpen, href: "/results" },
  { name: "Routine", icon: Calendar, href: "/routine" },
]

export function ThinSidebarComponent() {
  return (
    (<div
      className="flex flex-col w-[5%] h-screen bg-black border-r border-gray-200 rounded-2xl p-3">
      <div className="flex flex-col items-center py-4">
        <Link href="/" className="mb-8">
          <Sparkle className="h-8 w-8 text-orange-500" />
        </Link>
        <TooltipProvider>
          {menuItems.map((item) => (
            <Tooltip key={item.name}>
              <TooltipTrigger asChild>
                <Button size="icon" className="mb-4" asChild>
                  <Link href={item.href}>
                    <item.icon className="h-5 w-5" />
                    <span className="sr-only">{item.name}</span>
                  </Link>
                </Button>
              </TooltipTrigger>
              <TooltipContent side="right">
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          ))}
        </TooltipProvider>
      </div>
    </div>)
  );
}