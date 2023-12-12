import Image from 'next/image'
import { motion } from 'framer-motion'

export default function N033Logo() {
  
    return (
      <motion.div
        className="logo absolute right-9 bottom-9"
        initial={{ rotateY: 0 }}
        animate={{ rotateY: 360 }}
        transition={{ delay: 10, duration: 2 }}
      >
        <Image
          src="./assets/images/N033.svg"
          width={200}
          height={100}
          alt="N033 Logo"
          className="drop-shadow"
        />
      </motion.div>
    )
  }
  