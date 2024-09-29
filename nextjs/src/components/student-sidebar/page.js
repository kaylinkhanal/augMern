import Link from "next/link"
import { BookOpen, Calendar, ClipboardList, GraduationCap } from "lucide-react"

export default function StudentSidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-pink-50 shadow-sm">
      <div className="flex h-16 items-center justify-center border-b border-gray-200">
        <Link href="/" className="flex items-center space-x-2">
          <GraduationCap className="h-8 w-8 text-blue-600" />
          <span className="text-xl font-bold">EduApp</span>
        </Link>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        <Link
          href="/assignments"
          className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          <ClipboardList className="h-5 w-5" />
          <span>Assignments</span>
        </Link>
        <Link
          href="/attendance"
          className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          <Calendar className="h-5 w-5" />
          <span>Attendance</span>
        </Link>
        <Link
          href="/results"
          className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          <BookOpen className="h-5 w-5" />
          <span>Results</span>
        </Link>
        <Link
          href="/routine"
          className="flex items-center space-x-3 rounded-lg px-3 py-2 text-gray-700 hover:bg-gray-200"
        >
          <Calendar className="h-5 w-5" />
          <span>Routine</span>
        </Link>
      </nav>
    </div>
  )
}