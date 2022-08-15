import React, { useEffect, useState } from 'react'

import { motion } from 'framer-motion'
import { IoFastFood } from 'react-icons/io5'

import Heading from '../Heading'
import RowContainer from './RowContainer'
import { categories } from '../../utils/data'
import { useStateValue } from '../../context/StateProvider'

const MenuContainer = () => {
  const [filter, setFilter] = useState('chicken')

  const [{ foodItems }, dispatch] = useStateValue()
  return (
    <section className='w-full my-6' id='menu'>
      <div className='w-full flex  flex-col items-center justify-center'>
        <Heading title={'Our hot dishes'} className={'mr-auto'} />

        <div className='w-full flex items-center justify-start md:justify-center gap-2  lg:gap-8 py-6 overflow-x-scroll scrollbar-none'>
          {categories?.map((category) => (
            <motion.div
              onClick={() => setFilter(category.urlParamName)}
              whileTap={{ scale: 0.75 }}
              key={category.id}
              className={`group ${
                filter === category.urlParamName ? 'bg-orange-500' : 'bg-card'
              } w-24 min-w-[94px] h-28 cursor-pointer rounded-lg drop-shadow-xl flex flex-col gap-3 items-center justify-center hover:bg-orange-500 `}>
              <div
                className={`w-10 h-10 rounded-full shadow-lg ${
                  filter === category.urlParamName
                    ? 'bg-white'
                    : 'bg-orange-500'
                } group-hover:bg-white flex items-center justify-center`}>
                <IoFastFood
                  className={`${
                    filter === category.urlParamName
                      ? 'text-textColor'
                      : 'text-white'
                  } group-hover:text-textColor text-lg`}
                />
              </div>
              <p
                className={`text-sm ${
                  filter === category.urlParamName
                    ? 'text-white'
                    : 'text-textColor'
                } group-hover:text-white`}>
                {category.name}
              </p>
            </motion.div>
          ))}
        </div>

        <div className='w-full'>
          <RowContainer
            flag={false}
            data={foodItems?.filter((item) => item.category == filter)}
          />
        </div>
      </div>
    </section>
  )
}

export default MenuContainer
