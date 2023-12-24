"use client"
import { useEffect, useState } from 'react'

// Hooks
import socket from '@/lib/socket'
import obsService from '@/services/obsServices';

export default function Controls() {
  const [availibleScenes, setAvaibleScenes] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const scenes = await obsService.getSceneList();
      setAvaibleScenes(scenes);
    };

    fetchData();
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
          key={i.toString()}
          className={`p-4 ${button.color} text-white h-full`}
          onClick={() => sendEvent("Button", button.event)}
        >
          {button.name}
        </button>
      ))}
      {availibleScenes && availibleScenes.map((scene, i) => {
      return(
        <button
          key={i.toString()}
          className={`p-4 bg-blue-500 text-white h-full`}
          onClick={() => {
            obsService.changeScene(scene);
          }}
        >
          {scene}
        </button>
        )
      })}
    </main>
  )
}
