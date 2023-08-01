import React from 'react'
import PizzaCatalog from '../components/PizzaCatalog'
import ImgTitle from '../components/imgTitle'

function Home () {
  return (
    <div className='bg-dark'>
      <ImgTitle />
      <PizzaCatalog />
    </div>
  )
}

export default Home
