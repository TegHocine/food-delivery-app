import React from 'react'

import HomeContainer from './HomeContainer'
import RowContainer from './RowContainer'
import MenuContainer from './MenuContainer'
import { useStateValue } from '../../context/StateProvider'

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
    </div>
  )
}

export default MainContainer
