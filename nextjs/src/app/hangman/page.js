'use client'
import React, { useState } from 'react';

const Hangman = () => {
    const keyboard = [
        ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
        ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
        ['z', 'x', 'c', 'v', 'b', 'n', 'm']
    ];

    const [selectedKey, setSelectedKey] = useState([])

    function addSelection(item){
        setSelectedKeys([...selectedKeys, item])
    }

    const question = ['_', 'h', '_', 'o']
    const answer = ['r', 'h', 'i', 'n', 'o']
    const hangmanArr =[
     `|`, 
     `👈0👉`,
       `  | `,
       `🦶  🦵 `
       ]
    return (
        <div>
            Guess the animal<br></br>
            {selectedKey}
            {keyboard.map((items) => {
                return (
                    <div className=" flex gap-4 p-2 m-2">
                        {items.map((item) => {
                            return (
                                <div className="bg-black p-4 text-white">
                                    {item}
                                </div>
                            );
                        })}
                    </div>
                );
            })} 
            <div className='flex flex-col justify-center item-center w-[300px]'>
            {hangmanArr.map((item)=>{
                return <div>{item}</div>
            })}
            </div>
        </div>
    );
};

export default Hangman;
