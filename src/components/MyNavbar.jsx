import React, { useEffect, useState } from 'react'
import "../App.css"
import { Container, Nav, NavDropdown, Navbar, Offcanvas } from 'react-bootstrap';
import logo1 from "../assets/LogoTrasparent.png";
import "../style/MyNavbar.css"

const MyNavbar = () => {

  const [show, setShow] = useState(true)

  const controlNavbar = () => {

    if(window.scrollY > 100){
      setShow(false)
    } else {
      setShow(true)
    }

  }

  useEffect(() => {
    window.addEventListener('scroll', controlNavbar)
    return () => {
      window.removeEventListener('scroll', controlNavbar)
    }
  }, [])

  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        className={`mx-2 px-3 rounded-2 mb-3 myfont offCanv nav-settings ${
          show ? "nav-set-down" : "nav-set-up"
        }`}
      >
        <Container fluid className="">
          <Navbar.Brand href="#">
            <div className="">
              <img
                className="rounded-2"
                src={logo1}
                alt="logo"
                width={105}
                height={105}
              />
            </div>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav className="justify-content-end flex-grow-1 pe-3">
                
                <Nav.Link href="#action1" className="myfont px-3">
                  Home
                </Nav.Link>
                <Nav.Link href="#chisiamo" className="myfont px-3">
                  Chi siamo?
                </Nav.Link>
                <Nav.Link href="#ricette" className="myfont px-3">
                  Ricette
                </Nav.Link>
                <NavDropdown title="Gallery" id="collapsible-nav-dropdown" className="myfont3 px-2">
                  <NavDropdown.Item href="#gallery" className="myfont2">
                    Arancino
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#action5" className="myfont2">
                    Dove?
                  </NavDropdown.Item>
                  <NavDropdown.Item href="#messina" className="myfont2">
                    Stretto
                  </NavDropdown.Item>
                </NavDropdown>
              </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>

    /*
      {["lg"].map((expand) => (
        <Navbar
          
          key={expand}
          expand={expand}
          className={`mx-2 px-3 rounded-2 mb-3 myfont offCanv nav-settings ${
            show ? "nav-set-down" : "nav-set-up"
          }`}
        >
          <Container fluid className="">
            <Navbar.Brand href="#">
              <div className="">
                <img
                  className="rounded-2"
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
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  className="myfont"
                >
                  Ma n'Arancino
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1 pe-3">
                  <Nav.Link href="#action1" className="myfont px-3">
                    Home
                  </Nav.Link>
                  <Nav.Link href="#chisiamo" className="myfont px-3">
                    Chi siamo?
                  </Nav.Link>
                  <Nav.Link href="#ricette" className="myfont px-3">
                    Ricette
                  </Nav.Link>
                  <NavDropdown
                    title="Gallery"
                    id={`offcanvasNavbarDropdown-expand-${expand}`}
                    className="myfont3 px-2"
                  >
                    <NavDropdown.Item href="#gallery" className="myfont2">
                      Arancino
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5" className="myfont2">
                      Dove?
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#messina" className="myfont2">
                      Stretto
                    </NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
      */
  );
}


export default MyNavbar