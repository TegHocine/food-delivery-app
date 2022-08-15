import React from 'react'

import HomeContainer from './layout/HomeContainer'
import RowContainer from './layout/RowContainer'
import MenuContainer from './layout/MenuContainer'
import Cart from './Cart'
import { useStateValue } from '../context/StateProvider'

const MainContainer = () => {
  const [{ foodItems, dispatch }] = useStateValue()

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <HomeContainer />

      <section className='w-full my-6'>
        <RowContainer
          flag={true}
          data={foodItems?.filter((item) => item.category === 'fruits')}
        />
      </section>
      <MenuContainer />
      <Cart />
    </div>
  )
}

export default MainContainer
