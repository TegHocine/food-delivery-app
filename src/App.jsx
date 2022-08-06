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
        <main className='mt-24 p-8 w-full'>
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
