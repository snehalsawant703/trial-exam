import "bootstrap/dist/css/bootstrap.min.css";
import { Nav, Navbar, NavDropdown } from "react-bootstrap";


export function Navigationbar1() {
    return (
        <div>
            <Navbar bg="success" variant="dark" expand="lg" fixed="top">
                <Navbar.Brand>My React Website Trial</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
                <Navbar.Collapse>
                <Nav className="mr-auto">
                    <Nav.Link href="#">Home</Nav.Link>
                    <Nav.Link href="#">signup</Nav.Link>
                     <Nav.Link href="#">login</Nav.Link>
                     <NavDropdown title="Drop">
                         <NavDropdown.Item href="#">Home </NavDropdown.Item>
                         <NavDropdown.Item href="#">signup </NavDropdown.Item>
                         <NavDropdown.Item href="#">login</NavDropdown.Item>
                     </NavDropdown>
                </Nav>
                </Navbar.Collapse>
             </Navbar>
        </div>
    );
}