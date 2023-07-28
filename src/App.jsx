import { useState, useEffect } from 'react'
import { ENDPOINT } from './constants/constants'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalContext from './context/GlobalContext'
import Home from './views/Home'
import PizzaDetail from './components/PizzaDetail'

function App () {
  const [pizzaData, setPizzaData] = useState([])
  // console.log(`CONSTANTE ENDPOINT--> ${ENDPOINT}`)
  const getData = async (url) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      // console.log(`F() syncrona--> ${data}`)
      setPizzaData(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getData(ENDPOINT)
  }, [])
  // console.log(`pizzadata-App.jsx---> ${pizzaData}`)
  const sharedGlobal = { pizzaData, setPizzaData }

  return (
    <div className='bg-dark'>
      <GlobalContext.Provider value={sharedGlobal}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/pizzadetail/:idPizza' element={<PizzaDetail />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
