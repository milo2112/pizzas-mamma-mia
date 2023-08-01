import React from 'react'
import { Container } from 'react-bootstrap'

function NotFound () {
  return (
    <>
      <Container className='text-center'>
        <div className='text-black fw-bold display-6 mt-5 ms-5'>¡Lo que buscas no lo encontrarás aquí!</div>
      </Container>
      <Container className='text-center fluid'>
        <img
          src='./src/assets/img/notFound.jpg'
          alt='Page Not found img'
        />
      </Container>
    </>
  )
}

export default NotFound
