import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Navbar bg='danger' variant='dark'>
        <Container>
          <Nav>
          <Navbar.Brand as={Link} to="/home">Jom Tapau</Navbar.Brand>
            <Nav.Link className='text-white' as={Link} to="/home">Home</Nav.Link>
            <Nav.Link className='text-white' as={Link} to="/about">About</Nav.Link>
          </Nav>
          <Nav className=''>
            <Nav.Link className='text-white' as={Link} to="/login">Login</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
