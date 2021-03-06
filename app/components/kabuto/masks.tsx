import { motion } from "framer-motion"
import type { MaskVariantsProps } from "~/types"

function MaskOne({ maskVariants }: MaskVariantsProps) {
  return (
    <motion.g variants={maskVariants}>
      <path
        fill="#168F52"
        d="M259 175.8c-1.9-2.8-6.1-8.8-6.1-8.8s2.8-5.8 3.4-7.9c.7-2.1 1.9-4.2.3-6.9-1.4-2.3-9.4-15.6-11.7-19.3H87.7c-2.3 3.7-10.3 17-11.7 19.3-1.6 2.7-.4 4.8.3 6.9.7 2.1 3.4 7.9 3.4 7.9s-4.2 5.9-6.1 8.8-.6 7.3 2.1 11.9c2.7 4.6 9.4 14.9 22.7 22.4 4.7 15.6 12.1 31.4 14 33.6 17.2 20.7 35.6 27.2 37.7 28.2s4.8 1.6 7.4 1.6h17.6c2.6 0 5.2-.6 7.4-1.6s20.5-7.5 37.7-28.2c1.9-2.2 9.3-18.1 14-33.6 13.2-7.5 20-17.9 22.7-22.4 2.7-4.6 4-9.1 2.1-11.9zm-138.1-8.1c-17.4-3.6-19.2-16.9-18.6-19.2.6-2.2 3.8-7.5 10.9-9.6 28-1.3 36.9 12.7 39.1 17.6.2.5.4 1.1.6 1.6-3.1 4.5-14.2 13.3-32 9.6zm90.9 0c-17.8 3.7-28.9-5.1-32.1-9.6.1-.2.1-.3.2-.5 1.4-3.2 10.7-22.2 39.6-18.7 7.1 2.1 10.4 7.4 10.9 9.6.5 2.3-1.2 15.6-18.6 19.2z"
      ></path>
      <path
        fill="#09743E"
        d="M256.9 187.7c2.7-4.6 4-9.1 2.1-11.9s-6.1-8.8-6.1-8.8c2.3 6.4-.5 11.6-14.8 15.9-13.4 4.1-28.9 3.4-41.8-2.5 5 5.2 5.3 14.1 5.3 14.1 4.3 5.1 18.6 14.6 32.5 15.5 13.3-7.4 20.1-17.7 22.8-22.3zM75.8 187.7c-2.7-4.6-4-9.1-2.1-11.9s6.1-8.8 6.1-8.8c-2.3 6.4.5 11.6 14.8 15.9 13.4 4.1 28.9 3.4 41.8-2.5-5 5.2-5.3 14.1-5.3 14.1-4.3 5.1-18.6 14.6-32.5 15.5-13.4-7.4-20.2-17.7-22.8-22.3z"
      ></path>
      <path
        fill="#00582B"
        d="M166.3 236.5H154c-4.2 0-10.8 5.3-13.4 6.9s-4.1 2.6-14.1-3.1-13-17.4-12.4-20.4 12.1-10.8 16.3-10.8 10.9 5.9 14.5 8.9 7 4.8 10.7 4.8h21c3.7 0 7.1-1.8 10.7-4.8s10.3-8.9 14.5-8.9 15.7 7.7 16.3 10.8-2.4 14.8-12.4 20.4-11.4 4.7-14.1 3.1-9.2-6.9-13.4-6.9h-11.9z"
      ></path>
      <path
        fill="#09743E"
        d="M202.1 211.1c-2.7 0-8.4 4.8-11.2 7.1-.5.4-1 .8-1.4 1.2 3.7 11.8 24.9 40.9 34 43.3 0 0-11.1-34.1-10.8-45.9-3.4-2.6-8.6-5.7-10.6-5.7zM130.5 211.1c2.7 0 8.4 4.8 11.2 7.1.5.4 1 .8 1.4 1.2-3.7 11.8-24.9 40.9-34 43.3 0 0 11.1-34.1 10.8-45.9 3.4-2.6 8.6-5.7 10.6-5.7z"
      ></path>
      <path
        fill="#00582B"
        d="M181.2 208.2l10.4-5.1s2.8-1.4 1.8-5.2c0 0-1.9-4.8-6.5.4-4.7 5.3-5.7 9.9-5.7 9.9zM151.7 208.2l-10.4-5.1s-2.8-1.4-1.8-5.2c0 0 1.9-4.8 6.5.4 4.7 5.3 5.7 9.9 5.7 9.9z"
      ></path>
    </motion.g>
  )
}

function MaskTwo({ maskVariants }: MaskVariantsProps) {
  return (
    <motion.g variants={maskVariants}>
      <path
        fill='#168F52'
        d='M255.5 168.9c-.3-3.2-4.1-5.9-4.1-5.9-4.5-12.7-.6-18.9-.6-18.9v-28.5h-169V144s3.9 6.2-.6 18.9c0 0-3.7 2.7-4.1 5.9-.3 3.2 3 19.4 16.9 27.6 0 0 13.8 34.4 21.9 44 8.1 9.7 24.1 23.1 50.4 23.1 26.3 0 42.3-13.5 50.4-23.1 8.1-9.7 21.9-44 21.9-44 13.9-8.2 17.3-24.3 16.9-27.5zm-106.4-10c-1 1.7-8.2 10.4-25.7 8.4S102 151.5 102 149.5s3.3-9.7 11.9-13.7c16.7-2.7 33.5 15 33.5 15 2.1 2.1 2.7 6.3 1.7 8.1zm60.1 8.4c-17.5 2-24.7-6.7-25.7-8.4-1-1.7-.4-5.9 1.6-8.1 0 0 12.2-15.8 33.5-15 8.7 4 11.9 11.7 11.9 13.7s-3.8 15.8-21.3 17.8z'
      ></path>
      <path
        fill='#00582B'
        d='M166.7 232.7h-12.1c-4.1 0-10.6 5.2-13.1 6.8-2.6 1.6-4 2.6-13.8-3s-12.8-17.1-12.1-20.1c.6-3 11.8-10.6 16-10.6 4.2 0 10.7 5.8 14.3 8.8 3.6 2.9 6.9 4.7 10.5 4.7H177c3.7 0 6.9-1.7 10.5-4.7 3.6-2.9 10.1-8.8 14.3-8.8 4.2 0 15.4 7.5 16 10.6.6 3-2.3 14.5-12.1 20.1-9.8 5.6-11.2 4.6-13.8 3-2.6-1.6-9-6.8-13.1-6.8h-12.1z'
      ></path>
      <path
        fill='#09743E'
        d='M256 168.6c-.3-3.2-4.1-5.9-4.1-5.9-.6 4.7-18.3 14.3-26.3 15.3-8 .9-25.6 1.9-36.1-3.6l10.3 18c9.3 8.1 21.7 9.8 25.4 9.9.4-.3 8.9-2.4 13.9-6.1 13.8-8.2 17.2-24.4 16.9-27.6zM77.2 168.7c.3-3.2 4.4-6.1 4.4-6.1.6 4.7 18.3 14.3 26.3 15.3 8 .9 25.6 1.9 36.1-3.6l-10.3 18c-9.3 8.1-21.7 9.8-25.4 9.9-.4-.3-9.4-1.8-14.4-5.5-13.9-7.2-17.1-24.7-16.7-28zM201.9 210c-2.6 0-8.3 4.7-11 7-.5.4-1 .8-1.4 1.2 3.6 11.6 20.6 36.5 29.5 38.9 0 0-7.1-29.9-6.8-41.4-3.3-2.7-8.4-5.7-10.3-5.7zM131.6 210c2.6 0 8.3 4.7 11 7 .5.4 1 .8 1.4 1.2-3.6 11.6-20.6 36.5-29.5 38.9 0 0 7.1-29.9 6.8-41.4 3.2-2.7 8.3-5.7 10.3-5.7z'
      ></path>
      <path
        fill='#4EA87A'
        d='M140.6 188.4c-5.6-3.7-12.4-6.8-12.4-6.8l.8 3.4c-5.9-2.3-13.6-2.8-13.6-2.8s1 3.7 2.4 5.1c-10.1-.3-20.3-1.3-20.3-1.3s3.1 9.2 8.2 13.9c-1.6 0-2.6.3-2.6.3 1.4 2.2 6.8 7.2 15 9-2.9.8-4.4 1.3-4.4 1.3 2.5 2.9 6.1 5.9 9.9 6.6-1.6.7-2.8 1.5-2.8 1.5 5.6 3.6 14.7 5.4 25.4 2.6-1.2 1.5-2 3.4-2 3.4 7.7-.3 16.2-1.5 22.2-5.7 6.1 4.2 14.5 5.4 22.2 5.7 0 0-.8-1.9-2-3.4 10.7 2.9 19.8 1 25.4-2.6 0 0-1.3-.8-2.8-1.5 3.7-.8 7.4-3.8 9.9-6.6 0 0-1.4-.5-4.4-1.3 8.3-1.7 13.6-6.8 15-9 0 0-.9-.3-2.6-.3 5.1-4.8 8.2-13.9 8.2-13.9s-10.1.9-20.3 1.3c1.4-1.4 2.4-5.1 2.4-5.1s-7.8.6-13.6 2.8l.8-3.4s-6.8 3.1-12.4 6.8h-51.6z'
      ></path>
      <path
        fill='#168F52'
        d='M146.2 172.9c-6.8 1.6-12.9 10.1-13.8 18.6 2.9 6.7 11.8 8.4 20 8 2.9 5.6 11 9 14.2 9 3.2 0 11.3-3.3 14.2-9 8.2.3 17-1.3 20-8-.9-8.4-7-16.9-13.8-18.6h-40.8z'
      ></path>
      <path
        fill='#00582B'
        d='M189.6 198.8c4.7-1.9 5.8-6.8 1.8-8.3-4.8-1.7-9.2 3.9-10.5 8.8 2.9.2 5.9.1 8.7-.5zM143.8 198.8c-4.7-1.9-5.8-6.8-1.8-8.3 4.8-1.7 9.2 3.9 10.5 8.8-2.9.2-5.9.1-8.7-.5z'
      ></path>
    </motion.g>
  )
}

function MaskThree({ maskVariants }: MaskVariantsProps) {
  return (
    <motion.g variants={maskVariants}>
      <path
        fill='#168F52'
        d='M252.5 162.8l-4.1-26.1c0-1.8-1.4-4.2-3.6-4.2H120.4 87.3c-2.2 0-3.6 2.4-3.6 4.2l-4.1 26.1c-1.7.5-1.8 1.8-1.7 3.1.1 1.3 1.3 16.3 12.3 24.5 0 0-.9 2.7 0 5.7.9 2.9 7.6 22.2 17.3 38.1 9.7 15.9 16.6 20.1 17.9 20.9 1.3.8 2.5.4 2.5.4s4.2 5.2 5.4 5.7c0 0 12.6 7.6 14.8 8.7 2.2 1.1 9.1 4.2 11 4.9 1.9.7 3.4.7 7 .7 3.7 0 5.1 0 7-.7 1.9-.7 8.8-3.8 11-4.9 2.2-1.1 14.8-8.7 14.8-8.7 1.2-.5 5.4-5.7 5.4-5.7s1.1.4 2.5-.4c1.3-.8 8.3-5 17.9-20.9 9.7-15.9 16.4-35.1 17.3-38.1.9-2.9 0-5.7 0-5.7 11-8.2 12.1-23.2 12.3-24.5.1-1.3-.1-2.7-1.8-3.1zm-105.8-.1c-6 2.3-15.5 5.4-24.6 2.4-9.2-3-16.4-12.2-16.2-14.6.2-2.4 4-6.7 5.7-7.6 1.6-.9 5.5-1.2 8.9-.6 0 0 11.8 1.4 22.7 6.1 5.9 1.7 9.3 7 9.5 7.2 1.3 2 .1 4.8-6 7.1zm63.4 2.4c-9.2 3-18.6-.1-24.6-2.4s-7.3-5.1-5.9-7.1c0 0 3.5-5.5 9.5-7.2 0 0 12-5.3 22.7-6.1 3.4-.5 7.3-.3 8.9.6 1.6.9 5.5 5.2 5.7 7.6.2 2.4-7.1 11.6-16.3 14.6z'
      ></path>
      <path
        fill='#09743E'
        d='M254.2 164.5c-2.4.3-6.3 5.8-15.2 12.1-10.6 7.5-29.1 8.2-41.6-.7 2 5.1 8.5 15.7 18.3 19.1 9.8 3.3 20.2.1 26.2-4.5 11-8.2 12.1-23.2 12.3-24.5.1-.6.1-1 0-1.5zM78 164.5c2.4.3 6.3 5.8 15.2 12.1 10.6 7.5 29.1 8.2 41.6-.7-2 5.1-8.5 15.7-18.3 19.1-9.8 3.3-20.2.1-26.2-4.5-11-8.2-12.1-23.2-12.3-24.5 0-.6-.1-1 0-1.5zM204.3 255.5c-5.4-2.6-15.8-8.7-21.5-10.4 8.3 4.9 19 13.3 19 13.3s1.4-1.3 2.5-2.9zM127.9 255.5c5.4-2.6 15.8-8.7 21.5-10.4-8.3 4.9-19 13.3-19 13.3s-1.4-1.3-2.5-2.9z'
      ></path>
      <path
        fill='#00582B'
        d='M166.1 234.9c-11.5 0-19.1 2.3-25.7 6.1-6.6 3.8-12.7 4-16.4.9-6.1-5.1-10.8-14.1-13.3-25.4-1.9-8.7 1.9-15.1 8.5-15 6.6.1 9.6 5.5 10.1 10.9s1.1 7.6 6.6 10.9c5.8 3.4 23.5 5.1 30.2 5.1s24.4-1.7 30.2-5.1c5.5-3.2 6.1-5.5 6.6-10.9s3.5-10.8 10.1-10.9c6.6-.1 10.4 6.3 8.5 15-2.5 11.2-7.2 20.3-13.3 25.4-3.8 3.1-9.8 3-16.4-.9-6.6-3.8-14.2-6.1-25.7-6.1z'
      ></path>
      <path
        fill='#00582B'
        d='M139.9 191.2c-.3-2.1.9-4.5 4-3.9 3.1.6 4 4.2 5.3 7.6 1.3 3.4 3.7 8.5 6.2 10.6-3.2-1.5-6.9-4.1-11.1-8.2-.1 0-4-3.2-4.4-6.1zM191.4 191.2c.3-2.1-.9-4.5-4-3.9-3.1.6-4 4.2-5.3 7.6-1.3 3.4-3.7 8.5-6.2 10.6 3.2-1.5 6.9-4.1 11.1-8.2 0 0 3.9-3.2 4.4-6.1z'
      ></path>
      <path
        fill='#09743E'
        d='M127.1 215.4c-4.9 10.8-19.9 19.9-35.2 18.2 13.1-10.7 18.2-17.2 25.1-29.8 0 .1 10.2-1.5 10.1 11.6zM205.1 215.4c4.9 10.8 19.9 19.9 35.2 18.2-13.1-10.7-18.2-17.2-25.1-29.8 0 .1-10.2-1.5-10.1 11.6zM137.7 240.5s-7.9 3.3-12.6 0c0 0 1.9-10.4 1.5-18.4.1 0 10.6 9.8 11.1 18.4zM194.5 240.5s7.9 3.3 12.6 0c0 0-1.9-10.4-1.5-18.4 0 0-10.6 9.8-11.1 18.4z'
      ></path>
    </motion.g>
  )
}

function MaskFour({ maskVariants }: MaskVariantsProps) {
  return (
    <motion.g variants={maskVariants}>
      <path
        fill="#168F52"
        d="M259.4 169.9c-.2-.9-2.3-3.2-8-7.4 0-7.5 2.6-14.4 1.9-15.4-7.3-9.5-28.3-26.2-28.3-26.2H107s-21 16.7-28.3 26.2c-.8 1 1.9 7.9 1.9 15.4-5.7 4.2-7.8 6.6-8 7.4-.2.9-.3 19.2 17.1 33.5 0 0 8.6 26.9 14.4 35.4s27.5 27.1 30 28.7 6.3 1.8 8.1 0c0 0 5.1 5.6 10.1 6.8 6.7 1.6 13.7 1.8 13.7 1.8s7-.3 13.7-1.8c5.1-1.2 10.1-6.8 10.1-6.8 1.7 1.8 5.6 1.7 8.1 0s24.2-20.2 30-28.7c5.8-8.5 14.4-35.4 14.4-35.4 17.4-14.3 17.3-32.7 17.1-33.5zm-113-6c-7.6 4-19 6.2-27.6 4.1-9.5-2.3-17.6-10.2-16.3-17.6.7-4.2 7.4-11.3 18.5-11.8 16.1-.3 30.7 10.5 30.7 10.5s2.1 1.8 3.1 3.6-1.7 7.7-8.4 11.2zm66.8 4.1c-8.5 2.1-20-.2-27.6-4.1-6.7-3.5-9.4-9.4-8.4-11.1 1-1.8 3.1-3.6 3.1-3.6s16.6-11.2 30.7-10.5c11.2.5 17.8 7.6 18.5 11.8 1.3 7.3-6.8 15.2-16.3 17.5z"
      ></path>
      <path
        fill="#09743E"
        d="M259.7 170.7s0-.1-.1-.2c-6 6.8-18.2 15.5-27.8 17.9-16.2.5-27-.9-38-5.2 0 0 4 2.6 5.8 6.9 2.6 5.9 1.7 9.8 1.7 9.8 8.4 4.7 18.9 8.8 28.8 9.9 5.5-1.1 12.5-5.8 12.5-5.8 17.4-14.1 17.3-32.4 17.1-33.3zM72.9 170.7s0-.1.1-.2c6 6.8 18.2 15.5 27.8 17.9 16.2.5 27-.9 38-5.2 0 0-4 2.6-5.8 6.9-2.6 5.9-1.7 9.8-1.7 9.8-8.4 4.7-18.9 8.8-28.8 9.9C97 208.7 90 204 90 204c-17.4-14.1-17.3-32.4-17.1-33.3zM173.4 250.4c9 6.1 12.5 15 13.8 19.6 1.6-1.4 2.7-2.5 2.7-2.5-5.9-14.7-16.5-17.1-16.5-17.1zM158.6 250.4c-9 6.1-12.5 15-13.8 19.6-1.6-1.4-2.7-2.5-2.7-2.5 6-14.7 16.5-17.1 16.5-17.1z"
      ></path>
      <path
        fill="#00582B"
        d="M166.3 239c-9.2 0-15.4.4-20.2 1.2-5.6 1-10.6 4.4-10.6 4.4-21.1-7.3-22.8-28.2-22.8-28.2s9-4.5 13.5-5.1c4.4-.6 6.5 1.9 7.7 3.6 1.2 1.6 2.8 3.8 6.4 9.1 3.6 5.3 16.7 7.2 26 7.2s22.4-1.9 26-7.2c3.6-5.3 5.3-7.4 6.4-9.1 1.2-1.6 3.3-4.2 7.7-3.6 4.4.6 13.5 5.1 13.5 5.1s-1.7 20.9-22.8 28.2c0 0-5-3.4-10.6-4.4-4.8-.8-11-1.2-20.2-1.2zM180.3 206c2.4-3.3 3.9-7 8.7-7.9 6.5-1.2 6.7 6.6 3.4 8.4-1.2.9-6 1.2-12.1-.5zM151.7 206c-2.4-3.3-3.9-7-8.7-7.9-6.5-1.2-6.7 6.6-3.4 8.4 1.2.9 6.1 1.2 12.1-.5z"
      ></path>
      <path
        fill="#09743E"
        d="M195.7 226.9c2.9-4.2 4.4-6.3 5.6-7.9l.8-1.1c1.1-1.6 2.2-2.6 4.3-2.6.3 0 .6 0 .9.1 1.9.3 4.7 1.3 7.1 2.8 0 0 17.9 35.9 25.1 51.6-11-1.2-36.4-24.5-43.8-42.9zM93 269.8c7.2-15.7 25.1-51.6 25.1-51.6 2.5-1.5 5.2-2.5 7.1-2.8.3 0 .6-.1.9-.1 2 0 3.2 1 4.3 2.6l.8 1.1c1.2 1.6 2.7 3.8 5.6 7.9-7.2 18.4-32.7 41.7-43.8 42.9z"
      ></path>
    </motion.g>
  )
}

export { MaskOne, MaskTwo, MaskThree, MaskFour }