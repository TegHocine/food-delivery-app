import React from 'react'

const HeroCard = ({ img, title, desc, price, currency }) => {
  return (
    <div className='bg-cardOverlay backdrop-blur-md rounded-3xl flex items-center justify-center flex-col lg:w-190  p-4 '>
      <img
        src={img}
        alt='icecream Chocolate Vanilla'
        className='w-20 md:w-28 lg:w-40 -mt-10 lg:-mt-20'
      />
      <p className='text-base lg:text-lg font-semibold text-textColor mt-2'>
        {title}
      </p>
      <p className='text-[12px] lg:text-sm text-gray-500 font-semibold my-1'>
        {desc}
      </p>
      <p className='text-sm lg:text-base text-semibold text-headingColor'>
        <span className='text-sm'> {currency} </span> {price}
      </p>
    </div>
  )
}

export default HeroCard
