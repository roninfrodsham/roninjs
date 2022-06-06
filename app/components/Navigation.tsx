import { motion } from 'framer-motion';

function Navigation() {
  return (
    <header>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.6 }}>RONIN JS</motion.h1>
    </header>
  );
}

export { Navigation };