import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';


    function NavBar() {

        const [show, setShow] = useState(false);

        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);


    return (
        <>
            <Navbar sticky="top"  expand="m" className="navBar" data-bs-theme="dark" onClick={handleShow}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='navBarCollapse'>
                <Nav className="me-auto">
                </Nav>
                </Navbar.Collapse>
            </Container>
            <Navbar.Brand>
                        <NavLink className='navText' to= '/'>Gonzalo Ciresa</NavLink>
            </Navbar.Brand>
            </Navbar>

            <Offcanvas show={show} onHide={handleClose} className= 'offCanvasColor'>
            <Offcanvas.Header closeButton>
                <Offcanvas.Title>Gonzalo Ciresa</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Nav.Link>
                            <NavLink to='/' className='navText'>
                            Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className='navText' to='/Projects'>
                            Projects
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className='navText' to='/PersonalInformation'>
                            About me
                            </NavLink>
                        </Nav.Link>
            </Offcanvas.Body>
            </Offcanvas>

            
        </>
    );
    }

export default NavBar;



{/* <Navbar sticky="top"  expand="m" className="navBar" data-bs-theme="dark" onClick={handleShow}>
            
            <Container>
                
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav" className='navBarCollapse'>
                
                <Offcanvas show={show}  className= 'offCanvasColor'>
                <Offcanvas.Header closeButton onHide={handleClose}>
                    <Offcanvas.Title>Offcanvas</Offcanvas.Title>
                </Offcanvas.Header>
                <Nav className="me-auto">
                <Offcanvas.Body>
                    
                        <Nav.Link>
                            <NavLink to='/' className='navText'>
                            Home
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className='navText' to='/Index'>
                            Projects
                            </NavLink>
                        </Nav.Link>
                        <Nav.Link>
                            <NavLink className='navText' to='/PersonalInformation'>
                            About me
                            </NavLink>
                        </Nav.Link>
                    
                </Offcanvas.Body>
                </Nav>
                </Offcanvas>
    
                </Navbar.Collapse>
            </Container>
            <Navbar.Brand>
                        <NavLink className='navText' to= '/'>Gonzalo Ciresa</NavLink>
            </Navbar.Brand>
            </Navbar> */}