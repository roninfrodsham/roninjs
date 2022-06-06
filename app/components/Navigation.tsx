import { motion } from 'framer-motion';

function Navigation() {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  }


  return (
    <header>
      <motion.h1 initial="hidden" animate="visible" variants={variants}>RONIN JS</motion.h1>
    </header>
  );
}

export { Navigation };