import React from 'react'
import "../App.css"
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import logo1 from "../assets/OrangeandYellowIllustrationThaiTeaLogo.png";
import "../style/MyNavbar.css"

const MyNavbar = () => {
  return (
    <>
      {["lg"].map((expand) => (
        <Navbar key={expand} expand={expand} className="m-0 p-1 mb-3 myfont">
          <Container fluid className="myfont">
            <Navbar.Brand href="#">
              <div className="border border-3 border-warning-subtle rounded-circle">
                <img
                  className="rounded-circle"
                  src={logo1}
                  alt="logo"
                  width={105}
                  height={105}
                />
              </div>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
              className="offCanv"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`} className='myfont'>
                  Ma n'Arancino
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="myfont">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#action2" className="myfont">
                    Chi siamo?
                  </Nav.Link>
                  <NavDropdown
                    title="Gallery"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="myfont3s"
                  >
                    <NavDropdown.Item href="#action3" className="myfont2">
                      Arancino
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action4" className="myfont2">
                      Dove?
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action5" className="myfont2">
                      Stretto
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default MyNavbar