// components/Header.js
'use client'
import { motion, AnimatePresence } from 'framer-motion'
import React from 'react'
import Image from 'next/image'
import intervar1 from '/public/images/projects/intervar/intervar1.svg'
import intervar2 from '/public/images/projects/intervar/intervar2.svg'
const IntervarHeader = () => {
  return (
    <div className=" flex h-40 flex-row justify-between rounded-md bg-neutral-100 p-2 shadow dark:bg-neutral-900">
      <motion.div
        className="ml-5 mr-5 flex flex-col justify-center"
        whileHover={{
          x: 10, // Move text to the right
        }}
      >
        <h5 className="text-xs">Case Study</h5>
        <div className="flex flex-row">
          <h3>Inter</h3>
          <h3 className="text-red-500 dark:text-red-600">var</h3>
        </div>
      </motion.div>
      <motion.div className="ml-2 flex flex-col justify-center sm:ml-2">
        <AnimatePresence>
          <motion.div
            initial={{ opacity: 1, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: -15 }}
            transition={{ delay: 0.25 }}
            whileHover={{
              y: -30, // Move Image1 up further
            }}
          >
            <Image
              src={intervar1}
              priority={true}
              alt="My image"
              className="-mb-20 ml-12 w-32"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 1, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 1, y: 15 }}
            transition={{ delay: 0.25 }}
            whileHover={{
              y: 30, // Image2 stays at its position
            }}
          >
            <Image
              src={intervar2}
              priority={true}
              alt="My image"
              className="w-32"
            />
          </motion.div>
        </AnimatePresence>
      </motion.div>
    </div>
  )
}

export default IntervarHeader
