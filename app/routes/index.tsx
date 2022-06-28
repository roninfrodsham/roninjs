import type { LinksFunction } from "@remix-run/cloudflare"
import { motion } from 'framer-motion'
import { RoninMask } from "~/components/RoninMask"
import stylesUrl from "~/styles/index.css"

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export default function Index() {
  return (
    <div className="mask-container">
      <RoninMask />
      <motion.p 
        initial={{ opacity: 0 }} 
        animate={{ opacity: 1 }} 
        transition={{ 
          ease: "easeOut", 
          duration: 0.6, 
          delay: 2.2 
        }}
      >Experiments in code by Jonny Frodsham</motion.p>
    </div>
  )
}
