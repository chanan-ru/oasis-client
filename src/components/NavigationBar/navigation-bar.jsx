import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";



import Logo from "./oasis.png";
import "./navigation-bar.scss";


export const NavigationBar = ({ user, onLoggedOut }) => {

    return (
        <>
            <Navbar expand="lg" className="custom_nav mb-5">
                <Container>
                    <Navbar.Brand as={Link} to="/"><img src={Logo} className="app_logo" alt="logo" /></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            {!user && (
                                <>
                                    <Nav.Link as={Link} to="/login">
                                        Login
                                    </Nav.Link>
                                    <Nav.Link as={Link} to="/signup">
                                        Signup
                                    </Nav.Link>
                                </>
                            )}
                            {user && (
                                <>
                                    <Nav.Link as={Link} to="/">
                                        Home
                                    </Nav.Link>
                                </>
                            )}
                            {user && (
                                <>
                                    <Nav.Link as={Link} to={`/users/${user.Username}`}>
                                        Profile
                                    </Nav.Link>
                                    <Nav.Link onClick={onLoggedOut}>Logout</Nav.Link>
                                </>
                            )}
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};