import Image from 'next/image'

export default function N033Logo() {
  
    return (
      <div className="logo absolute right-5 bottom-5">
        <Image
          src="./assets/images/N033.svg"
          width={200}
          height={100}
          alt="N033 Logo"
          className="drop-shadow"
        />
      </div>
    )
  }
  