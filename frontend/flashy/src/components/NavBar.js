import React from 'react'
import { Nav, Form, Button, Navbar, FormControl, Container } from 'react-bootstrap';

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
            <Nav.Link href="/collections" style={{ marginRight: '10px' }}>your flashes</Nav.Link>
            <Nav.Link href="/collections/new" style={{ marginRight: '10px' }}>create a flash</Nav.Link>
            <Nav.Link href="/trivia" style={{ marginRight: '10px' }}>create a trivy</Nav.Link>
            <Nav.Link href="/account/" style={{ marginRight: '10px' }}>
              your account
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavBar