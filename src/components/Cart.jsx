import React, { useEffect, useState } from 'react'

import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

import CartItem from './CartItem'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Cart = () => {
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className='w-full md:w-375 h-screen bg-primary drop-shadow-md flex flex-col fixed top-0 right-0 z-50'>
      <div className='w-full flex items-center justify-between p-4'>
        <motion.div whileTap={{ scale: 0.75 }}>
          <MdOutlineKeyboardBackspace className='text-textColor text-3xl' />
        </motion.div>
        <p className='text-textColor text-lg font-semibold'>Cart</p>
        <motion.p
          whileTap={{ scale: 0.75 }}
          className='flex items-center gap-2 p-1 px-2 my-2 bg-gray-100 rounded-md hover:shadow-md  cursor-pointer text-textColor text-base'>
          Clear <RiRefreshFill />
        </motion.p>
      </div>
      {/* bottom section */}
      <div className='w-full h-full bg-cartBg rounded-t-3xl flex flex-col'>
        <div className='w-full h-340 md:h-42 px-6 py-10 flex flex-col gap-3 overflow-y-scroll scrollbar-none'>
          <CartItem />
        </div>
      </div>
    </motion.div>
  )
}

export default Cart
