import React from 'react'

import Delivery from '../../assets/delivery.png'

const MainContainer = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-2'>
      <div className='py-2 flex flex-col items-start  justify-center flex-1 gap-6'>
        <div className='flex items-center justify-center gap-2  bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold'>
            Bike Delivery
          </p>
          <div className='w-8 h-8 rounded-full overflow-hidden'>
            <img
              src={Delivery}
              alt='bike delivery'
              className='w-full h-full object-contain'
            />
          </div>
        </div>
        <p className='text-[2.5rem] lg:text-[3rem] font-bold tracking-wide text-headingColor'>
          The Fastest Delivery in{' '}
          <span className='text-orange-600 text-[3rem] lg:text-[3.5rem] '>
            Your City
          </span>
        </p>
        <p className='text-base text-textColor text-center md:text-left md:w-[80%]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa quidem
          tempora, unde necessitatibus quod quisquam deleniti blanditiis harum
          quasi qui ratione quas quae dolore autem praesentium dicta corrupti
          sit et.
        </p>
        <button
          type='button'
          className='bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2 rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
          Order Now
        </button>
      </div>
      <div className='py-2 flex-1'></div>
    </div>
  )
}

export default MainContainer
