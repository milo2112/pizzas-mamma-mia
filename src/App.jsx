import { useState, useEffect } from 'react'
import { ENDPOINT } from './constants/constants'
import NavigationBar from './components/NavigationBar'
import ImgTitle from './components/imgTitle'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

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
      <BrowserRouter>
        <NavigationBar />
        <ImgTitle />
        <Routes>
          <Route path='/' element='' />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
