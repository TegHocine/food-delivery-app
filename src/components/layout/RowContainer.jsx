import React, { useEffect, useRef, useState } from 'react'
import RowCard from '../RowCard'
import NotFound from '../../assets/NotFound.svg'

import { motion } from 'framer-motion'
import { MdChevronLeft, MdChevronRight } from 'react-icons/md'

const RowContainer = ({ flag, data }) => {
  const rowContainer = useRef()

  const [scrollValue, setScrollValue] = useState(0)
  console.log(scrollValue)
  const scrollLeft = () => {
    if (scrollValue < rowContainer.current.scrollLeftMax) {
      setScrollValue(scrollValue + 200)
    }
  }
  const scrollRight = () => {
    if (scrollValue > 0) {
      setScrollValue(scrollValue - 200)
    }
  }

  useEffect(() => {
    rowContainer.current.scrollLeft = scrollValue
  }, [scrollValue])
  return (
    <>
      <div className='w-full flex items-center justify-between'>
        <p className='text-lg font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:countent before:w-24 before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-orange-400 to-orange-600 transition-all ease-in-out duration-100'>
          Our Fresh & healthy fruits
        </p>
        <div className='hidden md:flex items-center gap-3'>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-lg bg-orange-400  hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-200 flex items-center justify-center'
            onClick={scrollRight}>
            <MdChevronLeft className='text-lg text-white' />
          </motion.div>
          <motion.div
            whileTap={{ scale: 0.75 }}
            className='w-8 h-8 rounded-lg bg-orange-400 hover:bg-orange-500 cursor-pointer transition-all ease-in-out duration-200  flex items-center justify-center'
            onClick={scrollLeft}>
            <MdChevronRight className='text-lg text-white' />
          </motion.div>
        </div>
      </div>
      <div
        ref={rowContainer}
        className={`w-full flex items-center gap-3  my-12 scroll-smooth  ${
          flag
            ? 'overflow-x-scroll scrollbar-none'
            : 'overflow-x-hidden flex-wrap justify-center'
        }`}>
        {data ? (
          data.map((item) => (
            <RowCard
              key={item.id}
              img={item.imageURL}
              title={item.title}
              calories={item.calories}
              price={item.price}
            />
          ))
        ) : (
          <div className='w-full flex flex-col items-center justify-center'>
            <img src={NotFound} className='h-340' />
            <p className='text-xl text-headingColor font-semibold my-2'>
              Items Not Available
            </p>
          </div>
        )}
      </div>
    </>
  )
}

export default RowContainer
