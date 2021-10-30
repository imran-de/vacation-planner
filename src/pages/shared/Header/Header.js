import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <header className="sticky-top">

            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Brand as={Link} className="fw-bold" to="/">Vacation Care</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <Nav.Link as={Link} to="/">Home</Nav.Link>
                            <Nav.Link as={Link} to="/about">About</Nav.Link>
                            <Nav.Link as={Link} to="/contact-us">Contact Us</Nav.Link>
                            {user?.displayName && <Nav.Link as={Link} className="hover:text-gray-200" to="/login" onClick={logOut}>LogOut</Nav.Link>
                            }
                            {
                                !user?.displayName && <Nav.Link as={Link} className="hover:text-gray-200" to="/login">Login</Nav.Link>
                            }
                            {
                                !user?.displayName && <Nav.Link as={Link} className="hover:text-gray-200" to="/registration">Register</Nav.Link>
                            }

                            {/* <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown> */}
                        </Nav>
                        <Nav className="align-items-center">
                            <Nav.Link as={Link} to={`/user/${user?.displayName}/Booking`}>Booking</Nav.Link>
                            <Nav.Link as={Link} to={`/user/${user?.displayName}`}>{user?.displayName}</Nav.Link>
                            <Nav.Link as={Link} eventKey={2} to={`/user/${user?.displayName}`}>
                                {/* conditional rendering */}
                                {!user?.displayName ? <i className="far fa-user"></i> :
                                    <img src={user?.photoURL} alt="profile" style={{ width: "60px", borderRadius: '50%' }} />}
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
};

export default Header;