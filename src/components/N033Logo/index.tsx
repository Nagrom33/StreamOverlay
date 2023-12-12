import Image from 'next/image'
import { motion } from 'framer-motion'

export default function N033Logo() {
  const rotateVariants = {
    initial: { rotateY: 0 },
    animate: { rotateY: 360 },
  };
  return (
    <motion.div
      className="logo absolute right-9 bottom-9"
      key="logo-animation"
      variants={rotateVariants}
      initial="initial"
      animate="animate"
      transition={{
        duration: 2,
        repeat: Infinity,
        repeatDelay: 30
      }}
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
