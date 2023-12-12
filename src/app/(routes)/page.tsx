"use client"

import { useEffect, useState } from 'react';

// Components
import N033Logo from '@/components/N033Logo'
import Confetti from '@/components/Confetti'
import DancingTroll from '@/components/DancingTroll'
// import WebcamBorder from '@/components/WebcamBorder'
// import SubscribersBar from '@/components/SubscribersBar'

// Hooks
import socket from '@/lib/socket'

import './styles.scss';

export default function Home() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [showDancingTroll, setShowDancingTroll] = useState(false);

  const handleButtonPressed = (senderId: number, value: string | any) => {
    // Handle the received Button event on the client side
    if (typeof value === 'string') {
      console.log('Received string value:', value);
      if (value === 'confetti') {
        setShowConfetti(prevShowConfetti => !prevShowConfetti);
      }
      if (value === 'dancing-troll') {
        setShowDancingTroll(prevShowDancingTroll => !prevShowDancingTroll);
      }
      // Handle your logic for string data
    } else {
      console.log('Object data:', value, senderId);
      // Handle your logic for object data
    }
  };

  useEffect(() => {
    socket.emit("joinRoom", "stream", "controls");
    socket.on('Button', handleButtonPressed);
    return () => {
      socket.off('Button', handleButtonPressed);
    };
  }, []);

  return (
    <main
      className="relative flex items-center justify-center w-[1920px] h-[1080px]"
    >
      <div id="box" />
      {/* <WebcamBorder /> */}
      <N033Logo />
      {showConfetti && (
        <Confetti />
      )}
      {showDancingTroll && (
        <DancingTroll />
      )}
    </main>
  )
}
