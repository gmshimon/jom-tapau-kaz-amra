import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Header = () => {
  return (
    <div>
      <Navbar bg='danger' variant='dark'>
        <Container>
          <Navbar.Brand href='#home'>Jom Tapau</Navbar.Brand>
          <Nav className='me-auto'>
            <Nav.Link as={Link} to="/home">Home</Nav.Link>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default Header
