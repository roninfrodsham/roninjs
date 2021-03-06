import { motion } from 'framer-motion';
import { Link } from "@remix-run/react";

function Navigation() {
  const navigationItems: Array<{ title: string, slug: string }> = [
    {
      title: "Memory Game",
      slug: "/memory-game",
    },
    {
      title: "Balls",
      slug: "/balls",
    },
    {
      title: "Kabuto Somen",
      slug: "/kabuto-somen",
    },
  ];

  const list = {
    visible: { 
      opacity: 1,
      transition: {
        duration: 0.5,
        when: "beforeChildren",
        staggerChildren: 0.1,
        type: "spring",
        stiffness: 130,
        damping: 15,
      },
    },
    hidden: { opacity: 0 },
  }

  const listItem = {
    visible: { opacity: 1, y: 0 },
    hidden: { opacity: 0, y: -100 },
  }

  const MotionComponent = motion(Link);

  return (
    <header>
      <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.6 }}><Link to="/">RONIN JS</Link></motion.h1>
      <nav>
        <motion.ul initial="hidden" animate="visible" variants={list}>
          {navigationItems.length > 0 ? (
            navigationItems.map((item: any, index: number) => {
              return (
                <motion.li key={`${item.slug}-${index}`} variants={listItem}>
                  <MotionComponent 
                    to={item.slug} 
                    whileHover={{
                      backgroundColor: "#09743E",
                      scale: 1.6,
                      transition: {
                        duration: 0.2,
                        type: "spring",
                        stiffness: 300,
                        damping: 20,
                      }
                    }}
                  >{item.title}</MotionComponent>
                </motion.li>
              )
            })
          ) : null }
        </motion.ul>
      </nav>
      <motion.h2 className="button button--big sticky-footer" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ ease: "easeOut", duration: 0.6 }}><Link to="/hire-me">Hire Me</Link></motion.h2>
    </header>
  );
}

export { Navigation };