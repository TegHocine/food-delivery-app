import React, { useEffect, useState } from 'react'

import { MdOutlineKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { motion } from 'framer-motion'

import CartItem from './CartItem'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const Cart = () => {
  const [{ cartShow, cartItems }, dispatch] = useStateValue()
  const showCart = () => {
    dispatch({
      type: actionType.SET_CART_SHOW,
      cartShow: !cartShow
    })
  }
  return (
    <motion.div
      initial={{ opacity: 0, x: 200 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: 200 }}
      className='w-full md:w-375 h-screen bg-primary drop-shadow-md flex flex-col fixed top-0 right-0 z-50 transition-all duration-300 ease-out '>
      <div className='w-full flex items-center justify-between p-4'>
        <motion.div whileTap={{ scale: 0.75 }} onClick={showCart}>
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
          {cartItems?.map((item) => (
            <CartItem
              key={item.id}
              id={item.id}
              imageURL={item.imageURL}
              title={item.title}
              price={item.price}
            />
          ))}
        </div>
        {/* cart total section */}
        <div className='w-full flex-1 bg-cartTotal rounded-t-3xl flex flex-col items-center justify-evenly px-8 py-2'>
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 text-lg'>SubTotal</p>
            <p className='text-gray-400 text-lg'>$ 8.5</p>
          </div>
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-400 text-lg'>Delivery</p>
            <p className='text-gray-400 text-lg'>$ 2.5</p>
          </div>
          <div className='w-full border-b border-gray-600 my-2'></div>
          <div className='w-full flex items-center justify-between'>
            <p className='text-gray-200 text-lg font-semibold'>Total</p>
            <p className='text-gray-200 text-lg font-semibold'>$ 11</p>
          </div>
          <motion.button
            whileTap={{ scale: 0.8 }}
            type='button'
            className='w-full p-2 rounded-full bg-gradient-to-tr from-orange-400 to-orange-600 text-gray-50 text-lg my-2 hover:shadow-lg '>
            Check Out
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

export default Cart
