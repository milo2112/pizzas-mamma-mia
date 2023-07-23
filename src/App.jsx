// import { useState } from 'react'
// import { ENDPOINT } from './constants/constants'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

function App () {
  // const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <NavigationBar />
        <Routes>
          <Route path='/' element='' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
