import React from 'react'
import { motion } from 'framer-motion'
const Box1 = () => {
  return (
    <div className='box-container'>
      <motion.div
        className='box'
        // style={{ opacity: 0.2 }}
        animate={{ x: 800, opacity: 1 }}
        initial={{ opacity: 0.1 }}
        transition={{ type: 'spring', stiffness:100, damping: 10 }}
      ></motion.div>
    </div>
  )
}

export default Box1
