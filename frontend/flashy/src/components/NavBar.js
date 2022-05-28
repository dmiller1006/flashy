import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container fluid>
        <Navbar.Brand href="#" style={{ marginLeft: '25px' }}>flashy</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px', marginLeft: '25px' }}
            navbarScroll
          >
            <Nav.Link href="/home" style={{ marginRight: '10px' }}>home</Nav.Link>
            <Nav.Link href="/flashsets" style={{ marginRight: '10px' }}>your flashsets</Nav.Link>
            <Nav.Link href="/flashsets/new" style={{ marginRight: '10px' }}>create a flashset</Nav.Link>
            <Nav.Link href="/trivia" style={{ marginRight: '10px' }}>create a trivy</Nav.Link>
            <Nav.Link href="/account/" style={{ marginRight: '10px' }}>
              your account
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar