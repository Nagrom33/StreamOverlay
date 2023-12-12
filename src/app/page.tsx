import N033Logo from "@/components/N033Logo"
import Confetti from "@/components/Confetti"
import DancingTroll from "@/components/DancingTroll"
// import SubscribersBar from "@/components/SubscribersBar";

import './styles.scss';

export default function Home() {

  return (
    <main
      className="relative flex items-center justify-center w-[1920px] h-[1080px]"
    >
      <div id="box" />
      <N033Logo />
      <Confetti />
      <DancingTroll />
    </main>
  )
}
