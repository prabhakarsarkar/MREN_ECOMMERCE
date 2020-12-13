import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
const Navbar1 = () => {
    return (
        <>
       
            <Navbar collapseOnSelect expand="lg" bg="primary" 
            style={{ position: "fixed", width: "100%", zIndex: "1",background:"white"}}>
                <Navbar.Brand href="#home">Book Library</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav.Link href="/">home</Nav.Link>
                        <Nav.Link href="/category">category</Nav.Link>
                        <Nav.Link href="/product">product</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    )
}
export default Navbar1;
