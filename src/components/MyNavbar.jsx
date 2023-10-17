import React, { useEffect, useState } from 'react'
import "../App.css"
import { Container, Nav, NavDropdown, Navbar } from 'react-bootstrap';
import logo1 from "../assets/LogoTrasparent.png";
import "../style/MyNavbar.css"

const MyNavbar = () => {

  const [show, setShow] = useState(true)

  const controlNavbar = () => {

    if(window.bo > 50){
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
        expand="xl"
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
              <Nav.Link href="#dove" className="myfont px-3">
                Dove?
              </Nav.Link>
              <Nav.Link href="#messina" className="myfont px-3">
                Stretto
              </Nav.Link>
              <NavDropdown
                title="Gallery"
                id="navbarScrollingDropdown"
                className="myfont3 px-2"
              >
                <NavDropdown.Item href="#gallery" className="myfont2">
                  Arancino
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}


export default MyNavbar