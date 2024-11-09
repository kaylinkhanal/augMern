'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Send } from "lucide-react"

export function ChatInput() {
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Sending message:', message)
    setMessage('')
  }

  return (
    (<div className="max-w-3xl mx-auto p-4">
      <form onSubmit={handleSubmit} className="relative">
        <Input
          type="text"
          placeholder="Type your message..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full text-lg py-6 pr-14 pl-4 rounded-full" />
        <button
          type="submit"
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 rounded-full text-primary hover:bg-primary/10 transition-colors">
          <Send className="h-6 w-6" />
          <span className="sr-only">Send</span>
        </button>
      </form>
    </div>)
  );
}