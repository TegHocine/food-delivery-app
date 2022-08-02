import React from 'react'

import { MdShoppingCart } from 'react-icons/md'

import logo from '../../assets/logo.png'
import avatar from '../../assets/avatar.png'

const Header = () => {
  return (
    <header className='fixed top-0 z-50 py-6 px-16 w-full'>
      {/* desktop */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </div>
        <div className='flex items-center gap-8'>
          <ul className='flex items-center gap-8'>
            <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out '>
              Home
            </li>
            <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out '>
              Menu
            </li>
            <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out '>
              About Us
            </li>
            <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out '>
              Service
            </li>
          </ul>
          {/* // Cart */}
          <div className='relative flex items-center justify-center'>
            <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
            <div className='w-5 h-5 absolute -top-2 -right-2 rounded-full bg-cartNumBg  flex justify-center items-center'>
              <p className='text-sm text-white font-semibold'>1</p>
            </div>
          </div>
          {/* User Avatar */}
          <img
            src={avatar}
            alt='user profile'
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl'
          />
        </div>
      </div>
      {/* Mobile */}
      <div className='flex md:hidden '></div>
    </header>
  )
}

export default Header
