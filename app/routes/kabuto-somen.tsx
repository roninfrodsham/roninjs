import { useState } from 'react'
import type { LinksFunction } from "@remix-run/cloudflare"
import { motion } from 'framer-motion'
import { HelmetFront, HelmetBack } from '~/components/kabuto/helmet'
import { MaskOne, MaskTwo, MaskThree, MaskFour } from '~/components/kabuto/masks'
import stylesUrl from "~/styles/kabuto.css"

type ComponentProps = {
  [key: string]: any
}

export let links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: stylesUrl }]
}

export default function KabutoSomen() {
  const Components: ComponentProps = {
    "MaskOne": MaskOne,
    "MaskTwo": MaskTwo,
    "MaskThree": MaskThree,
    "MaskFour": MaskFour,
  }
  const keys = Object.keys(Components)
  const [currentMask, setMask] = useState("MaskOne")
  let Component = Components[currentMask];

  const helmetVariants = {
    hidden: {
      opacity: 0,
    },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        type: 'tween',
        ease: 'easeInOut',
        when: 'beforeChildren',
      }
    },
  }

  function getRandomMask() {
    const filterKeys = keys.filter((key) => {
      return key !== currentMask
    })
    const prop = filterKeys[Math.floor(Math.random() * filterKeys.length)]
    setMask(prop);
  }

  return (
    <>
      <motion.svg
        baseProfile='tiny'
        overflow='visible'
        viewBox='0 0 332.6 275.1'
        className='kabuto' 
        variants={helmetVariants}
        initial='hidden'
        animate={'visible'}
      >
        <HelmetBack />
        <Component maskVariants={{
          hidden: {
            opacity: 0,
            y: -50
          },
          visible: {
            opacity: 1,
            y: 0,
            transition: {
              type: 'spring',
              stiffness: 160,
              damping: 12,
            },
            default: {
              duration: 0.5,
            }
          }
        }} />
        <HelmetFront />
      </motion.svg>
      <motion.button
        onClick={() => getRandomMask()}
        whileHover={{
          scale: 1.2,
          textShadow: '0 0 10px #EEABCE',
        }}
      >
        Change Mask
      </motion.button>
    </>
  )
}
  