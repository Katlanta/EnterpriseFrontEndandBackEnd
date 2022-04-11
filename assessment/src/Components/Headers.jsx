//Standard Imports!
import React from 'react'
import { Container, Nav, Navbar, Offcanvas} from 'react-bootstrap'
import '../Styles/Headers.css';


//Here we have a basic bootstrap header! Nothing too exciting yet :)
//We have the title followed by the off canvas page featuring multiple headers! All linked up through the HRefs/nav.links
//All formatted to be a floral purple colour with white text.
function Headers() {
    return(
        <div> 
            <Navbar className='nav-link-white'expand={false} variant="dark">
                <Container fluid>
                    {/* Title for the header */}
                    <Navbar.Brand href="/">Love for the Uglies</Navbar.Brand>
                    <Navbar.Toggle aria-controls="offcanvasNavbar" />
                    <Navbar.Offcanvas id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel" placement="end">
                     {/* Offcanvas header (Top of the pop out page)*/}
                    <Offcanvas.Header closeButton className="cbody">
                        {/* Offcanvas header Title*/}
                        <Offcanvas.Title id="offcanvasNavbarLabel" className="cbody">Menu</Offcanvas.Title>
                    </Offcanvas.Header>
                    {/* Offcanvas Body for the Offcanvas*/}
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