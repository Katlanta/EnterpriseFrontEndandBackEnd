import React from 'react'
import { Container, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import '../Styles/Headers.css';

function Headers() {
    return(
        <div> 
            <Navbar className='nav-link-white'expand={false} variant="dark">
                <Container fluid>
                    <Navbar.Brand href="/">Love for the Uglies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                    <Offcanvas.Header closeButton className="cbody">
                        <Offcanvas.Title id="offcanvasNavbarLabel" className="cbody">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    <Offcanvas.Body  className="cbody">
                        <Nav>
                            <Nav.Link href="/"className='nav-link-white'>Home</Nav.Link>
                            <Nav.Link href="/Comments"className='nav-link-white'>Comments</Nav.Link>
                            <Nav.Link href="/Events"className='nav-link-white'>Events</Nav.Link>
                            <Nav.Link href="/Profile"className='nav-link-white'>Profile</Nav.Link>
                        </Nav>
                    </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>
        </div>
    )
}

export default Headers