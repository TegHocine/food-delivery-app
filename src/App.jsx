import Header from './components/layout/Header'
import { Route, Routes } from 'react-router-dom'

import { AnimatePresence } from 'framer-motion'

import MainContainer from './components/layout/MainContainer'
import CreateContainer from './components/layout/CreateContainer'

const App = () => {
  return (
    <AnimatePresence exitBeforeEnter>
      <div className='h-auto flex flex-col bg-primary'>
        <Header />
        <main className='mt-14 md:mt-20 px-4 md:px-16 py-4 w-full h-auto'>
          <Routes>
            <Route path='/*' element={<MainContainer />} />
            <Route path='/createItem' element={<CreateContainer />} />
          </Routes>
        </main>
      </div>
    </AnimatePresence>
  )
}

export default App
