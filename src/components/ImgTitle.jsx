import React from 'react'
import { Navbar } from 'react-bootstrap'
import '../assets/css/img.css'

export default function ImgTitle () {
  return (
    <Navbar.Brand>
      <img
        className='imgWidth'
        src='./src/assets/img/Pizza_Tomatoes_547600_3156x2104-4.jpg'
        alt='Mamma Mia´s Pizza'
      />
      <div className='above-text'>¡Pizzería Mamma Mía!</div>
      <div className='middle-text text-center'>¡Tenemos las mejores pizzas que podrás encontrar!</div>
    </Navbar.Brand>
  )
}
