import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import { useStateValue } from '../../context/StateProvider'

import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { app } from '../../firebase'

import { MdShoppingCart, MdAdd, MdLogout } from 'react-icons/md'
import { motion } from 'framer-motion'

import logo from '../../assets/chef1.png'
import avatar from '../../assets/avatar.png'
import { actionType } from '../../context/reducer'

const Header = () => {
  const firebaseAuth = getAuth(app)
  const provider = new GoogleAuthProvider()

  const [isMenu, setIsMenu] = useState(false)

  const [{ user }, dispatch] = useStateValue()
  const login = async () => {
    if (!user) {
      const {
        user: { refreshToken, providerData }
      } = await signInWithPopup(firebaseAuth, provider)
      dispatch({
        type: actionType.SET_USER,
        user: providerData[0]
      })

      localStorage.setItem('user', JSON.stringify(providerData[0]))
    }
  }

  const logout = () => {
    localStorage.removeItem('user')
    dispatch({
      type: actionType.SET_USER,
      user: null
    })
  }

  const menu = () => {
    setIsMenu(!isMenu)
  }

  return (
    <header className='fixed top-0 z-50  p-4 md:py-6 md:px-16 w-full bg-primary'>
      {/* desktop */}
      <div className='hidden md:flex w-full h-full items-center justify-between'>
        <Link to='/' className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-10 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>
        <div className='flex items-center gap-8'>
          <motion.ul
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='flex items-center gap-8'>
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
          </motion.ul>
          {/* // Cart */}
          <div className='relative flex items-center justify-center'>
            <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
            <div className='w-5 h-5 absolute -top-2 -right-2 rounded-full bg-red-600  flex justify-center items-center'>
              <p className='text-sm text-white font-semibold'>1</p>
            </div>
          </div>
          {/* User Avatar */}
          <div className='relative' onClick={user ? menu : login}>
            <motion.img
              whileTap={{ scale: 0.6 }}
              src={user ? user.photoURL : avatar}
              alt='avatar'
              className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
            />
            {isMenu && (
              <motion.div
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className='w-40 bg-gray-50 shadow-xl rounded-lg absolute flex flex-col top-12 right-0'>
                {user && user.email === 'atlas.social.net@gmail.com' && (
                  <Link to={'/createItem'}>
                    <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100 text-textColor text-base'>
                      New Item <MdAdd />
                    </p>
                  </Link>
                )}
                <p
                  className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100 text-textColor text-base'
                  onClick={logout}>
                  Logout <MdLogout />
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
      {/* Mobile */}
      <div className='flex md:hidden items-center justify-between'>
        {/* Cart */}
        <div className='relative flex items-center justify-center'>
          <MdShoppingCart className='text-textColor text-2xl cursor-pointer' />
          <div className='w-5 h-5 absolute -top-2 -right-2 rounded-full bg-red-800  flex justify-center items-center'>
            <p className='text-sm text-white font-semibold'>1</p>
          </div>
        </div>
        <Link to='/' className='flex items-center gap-2'>
          <img src={logo} alt='logo' className='w-8 object-cover' />
          <p className='text-headingColor text-xl font-bold'>City</p>
        </Link>

        {/* User Avatar */}
        <div className='relative' onClick={user ? menu : login}>
          <motion.img
            whileTap={{ scale: 0.6 }}
            src={user ? user.photoURL : avatar}
            alt='avatar'
            className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl cursor-pointer rounded-full'
          />
          {isMenu && (
            <motion.div
              initial={{ opacity: 0, scale: 0.6 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.6 }}
              className='w-40 bg-gray-50 shadow-xl rounded-lg absolute flex flex-col top-12 right-0'>
              {user && user.email === 'atlas.social.net@gmail.com' && (
                <Link to={'/createItem'}>
                  <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100 text-textColor text-base'>
                    New Item <MdAdd />
                  </p>
                </Link>
              )}
              <ul className='flex flex-col'>
                <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out hover:bg-slate-100 px-4 py-2'>
                  Home
                </li>
                <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out hover:bg-slate-100 px-4 py-2'>
                  Menu
                </li>
                <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out hover:bg-slate-100 px-4 py-2'>
                  About Us
                </li>
                <li className='text-base hover:text-headingColor cursor-pointer text-textColor transition-all ease-in-out hover:bg-slate-100 px-4 py-2'>
                  Service
                </li>
              </ul>
              <p
                className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-100 transition-all ease-in-out duration-100 text-textColor text-base'
                onClick={logout}>
                Logout <MdLogout />
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </header>
  )
}

export default Header
