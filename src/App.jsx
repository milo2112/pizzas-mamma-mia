import { useState, useEffect } from 'react'
import { ENDPOINT } from './constants/constants'
import NavigationBar from './components/NavigationBar'
import ImgTitle from './components/imgTitle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import GlobalContext from './context/GlobalContext'

function App () {
  const [pizzaData, setPizzaData] = useState()

  const getData = async (url) => {
    try {
      const resp = await fetch(url)
      const data = await resp.json()
      console.log(data)
      setPizzaData(data)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect(() => {
    getData(ENDPOINT)
  }, [])

  const sharedGlobal = { pizzaData, setPizzaData }

  return (
    <>
      <GlobalContext.Provider value={sharedGlobal}>
        <BrowserRouter>
          <NavigationBar />
          <ImgTitle />
          <Routes>
            <Route path='/' element='' />
          </Routes>
        </BrowserRouter>
      </GlobalContext.Provider>
    </>
  )
}

export default App
