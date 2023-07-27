import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavigationBar () {
  const setActiveClass = ({ isActive }) => {
    const auxStyle = 'text-decoration-none me-3'
    return isActive ? `text-white ${auxStyle}` : `text-secondary ${auxStyle}`
  }
  return (
    <>
      <Navbar expand='lg' bg='danger' data-bs-theme='light'>
        <Container>
          <Navbar.Brand>
            <NavLink to='/' className='text-white text-decoration-none'> 🍕 Pizzeria Mamma Mia!</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <NavLink to='/' className={setActiveClass}>Home</NavLink>
              <NavLink to='/shoppingCart' className={setActiveClass}>🛒</NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
