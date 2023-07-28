import React from 'react'
import { Navbar, Container, Nav, Badge } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

export default function NavigationBar () {
  const setActiveClass = ({ isActive }) => {
    const auxStyle = 'text-decoration-none me-3'
    return isActive ? `text-white ${auxStyle}` : `text-secondary ${auxStyle}`
  }
  return (
    <>
      <Navbar className='sticky-top' expand='lg' bg='danger' data-bs-theme='light'>
        <Container>
          <Navbar.Brand>
            <NavLink to='/' className='text-white text-decoration-none'> 🍕 Pizzeria Mamma Mia!</NavLink>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls='basic-navbar-nav' />
          <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='ms-auto'>
              <h5><NavLink to='/' className={setActiveClass}>Home</NavLink></h5>
              <h5><NavLink to='/shoppingCart' className={setActiveClass}>🛒</NavLink></h5>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  )
}
