import Image from 'next/image'

export default function DancingTroll() {
  
    return (
      <div className="absolute left-5 bottom-0">
        <Image
          src="/assets/images/dancing-troll.gif"
          width={200}
          height={100}
          alt="Dancing Troll"
          className="drop-shadow"
        />
      </div>
    )
  }
  