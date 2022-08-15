import React from 'react'

import HomeContainer from './layout/HomeContainer'
import RowContainer from './layout/RowContainer'
import MenuContainer from './layout/MenuContainer'
import Cart from './Cart'
import { useStateValue } from '../context/StateProvider'

const MainContainer = () => {
  const [{ foodItems, cartShow }, dispatch] = useStateValue()

  return (
    <div className='w-full h-auto flex flex-col items-center justify-center '>
      <HomeContainer />

      <RowContainer
        flag={true}
        data={foodItems?.filter((item) => item.category === 'fruits')}
      />

      <MenuContainer />

      {cartShow && <Cart />}
    </div>
  )
}

export default MainContainer
