import React from 'react'

import HeroCard from '../HeroCard'

import Delivery from '../../assets/delivery.png'
import Herobg from '../../assets/herobg.png'

import { heroData } from '../../utils/data'

const HomeContainer = () => {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full' id='home'>
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
      <div className='py-2 flex flex-1 items-center  relative'>
        <img
          src={Herobg}
          alt='Hero background'
          className='ml-auto w-full h-420 md:h-600 md:w-auto'
        />
        <div className='h-full w-full absolute  top-0 left-0 gap-2 md:gap-4 lg:gap-8  py-4 flex items-center justify-center flex-wrap  lg:grid lg:place-items-center lg:grid-cols-autoC'>
          {heroData?.map((item) => (
            <HeroCard
              key={item.id}
              img={item.img}
              title={item.title}
              desc={item.desc}
              price={item.price}
              currency={item.currency}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default HomeContainer
