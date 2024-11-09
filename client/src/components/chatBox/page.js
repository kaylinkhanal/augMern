import React from 'react'
import { ChatInput } from '../chat-input'
const messages = [
    {
        "id": 1,
        "senderId": 1,
        "receiverId": 2,
        "timestamp": "2024-09-28T10:00:00Z",
        "message": "Hey Bob! How's it going?",
        "status": "sent"
    },
    {
        "id": 2,
        "senderId": 2,
        "receiverId": 1,
        "timestamp": "2024-09-28T10:02:00Z",
        "message": "Hi Alice! I'm doing well, thanks. How about you?",
        "status": "received"
    },
    {
        "id": 3,
        "senderId": 1,
        "receiverId": 2,
        "timestamp": "2024-09-28T10:05:00Z",
        "message": "I'm great! Just working on a new project.",
        "status": "sent"
    },
    {
        "id": 4,
        "senderId": 2,
        "receiverId": 1,
        "timestamp": "2024-09-28T10:07:00Z",
        "message": "Sounds exciting! Let me know if you need any help.",
        "status": "received"
    },
    {
        "id": 5,
        "senderId": 1,
        "receiverId": 2,
        "timestamp": "2024-09-28T10:10:00Z",
        "message": "Will do! Thanks, Bob.",
        "status": "sent"
    },
    {
        "id": 5,
        "senderId": 1,
        "receiverId": 2,
        "timestamp": "2024-09-28T10:10:00Z",
        "message": "Kahile auchas ktm?",
        "status": "sent"
    }
]
const ChatBox = (props) => {
    const myId = 1
  return (
    <div className='bg-white  w-[70%] h-screen shadow-md rounded-2xl p-2'>
        ChatBox
        {props.userSelection.name}

        {messages.map((item)=>{
            return (
                <div className={item.senderId ==myId ? 'ml-20 p-4 bg-orange-400 m-4 rounded-lg': 'p-4 bg-white shadow-md rounded-lg'}>
                    {item.message}
             
                </div>
            )
        })}
        <ChatInput/>

        </div>
  )
}

export default ChatBox