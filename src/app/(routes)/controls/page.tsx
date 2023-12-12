"use client"
import { useEffect } from 'react'

// Hooks
import socket from '@/lib/socket'

export default function Controls() {
  useEffect(() => {
    socket.emit("joinRoom", "stream", "controls");
  }, []);

  const sendEvent = async function (event: string, value?: string | Record<string, any>): Promise<any> {
    if (socket) {
      // Emit the "Button" event with the specified parameters
      console.log('Sending Event:', event, 'Value:', value)
      return socket.emit(event, 'stream', 'controls', value);
    } else {
      console.log('No socket connection!');
    }
  };

  const Buttons = [
    {
      name: "Confetti",
      color: "bg-green-500",
      event: "confetti"
    },
    {
      name: "Dancing Troll",
      color: "bg-red-500",
      event: "dancing-troll"
    },
  ];

  return (
    <main
      className="grid grid-cols-2 gap-4 h-screen"
    >
      {Buttons.map((button, i) => (
        <button
          className={`p-4 ${button.color} text-white h-full`}
          onClick={() => sendEvent("Button", button.event)}
        >
          {button.name}
        </button>
      ))}
    </main>
  )
}
