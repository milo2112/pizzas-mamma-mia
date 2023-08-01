import { useState, useEffect } from 'react'
import { ENDPOINT } from './constants/constants'
import NavigationBar from './components/NavigationBar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalContext from './context/GlobalContext'
import Home from './views/Home'
import PizzaDetail from './components/PizzaDetail'
import ShoppingCartView from './views/ShoppingCartView'
import NotFound from './components/NotFound'

function App () {
  const [pizzaData, setPizzaData] = useState([])
  const [pizzaToBuy, setPizzaToBuy] = useState([])
  const [pizzaTotalPrice, setPizzaTotalPrice] = useState(0)

  const getData = async (url) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      setPizzaData(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getData(ENDPOINT)
  }, [])

  const sharedGlobal = {
    pizzaData,
    setPizzaData,
    pizzaTotalPrice,
    setPizzaTotalPrice,
    pizzaToBuy,
    setPizzaToBuy
  }

  return (
    <div>
      <GlobalContext.Provider value={sharedGlobal}>
        <BrowserRouter>
          <NavigationBar />
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/shoppingcartview' element={<ShoppingCartView />} />
            <Route path='/pizzadetail/:idPizza' element={<PizzaDetail />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </div>
  )
}

export default App
