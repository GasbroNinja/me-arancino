import React from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { ImFacebook2 } from "react-icons/im";
import { GrInstagram } from "react-icons/gr";

import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <Container fluid className=" text-center text-md-left mt-5 pt-5 px-5">
      <div>
        <Row className=" my-font-home d-lg-flex flex-xl-row  align-items-center justify-content-center flex-column">
          <Col md={6} className="mt-md-0 mt-3 pb-3 pe-xl-5">
            <h5 className="text-uppercase text-light fs-3 font-recip text-center m-0 p-0 fs-6">
              Ma n'Arancino? ©
            </h5>
            <p className="text-uppercase text-center text-light fs-3 font-recip fs-5 text-start m-0 p-0">
              Benvenuto nella casa Dell'arancino
            </p>
          </Col>

          <hr className="clearfix w-100 d-md-none pb-0" />

          <div className="col-md-3 mb-md-0 mb-3 pb-3">
            <h5 className="my-font-home text-uppercase  font-recip fs-6 m-0 p-0 pb-2">
              Social
            </h5>
            <ul className="list-unstyled">
              <li className="text-decoration-none py-2">
                <Button variant="outline-warning">
                  <a
                    href="https://www.instagram.com/redshift_gaming/"
                    className="text-light fs-4 p-1 m-0 d-flex align-items-center"
                  >
                    <GrInstagram />
                  </a>
                </Button>
              </li>
              <li className="text-decoration-none pb-2">
                <Button variant="outline-warning">
                  <a
                    href="https://www.linkedin.com/in/gabriele-cuscin%C3%A0/"
                    className="text-light fs-4 p-1 m-0 d-flex align-items-center"
                  >
                    <ImFacebook2 />
                  </a>
                </Button>
              </li>
            </ul>
          </div>

          <div className="col-md-3 mb-md-0 mb-3">
            <h5 className="my-font-home text-warning text-decoration-none text-uppercase  font-recip m-0 p-0 pb-2">
              LINKS PAGE
            </h5>
            <ul className="list-unstyled">
              <li>
                <Link
                  to="#home"
                  className="my-font-home text-light text-decoration-none text-uppercase  font-recip m-0 py-2"
                >
                  HOME
                </Link>
              </li>
              <li>
                <Link
                  to="#gallery"
                  className="my-font-home text-light text-decoration-none text-uppercase  font-recip m-0 py-2"
                >
                  GALLERY
                </Link>
              </li>
              <li>
                <Link
                  to="#chisiamo"
                  className="my-font-home text-light text-decoration-none text-uppercase  font-recip m-0 py-2"
                >
                  CHI SIAMO?
                </Link>
              </li>
              <li>
                <Link
                  to="#ricette"
                  className="my-font-home text-light text-decoration-none text-uppercase  font-recip m-0 py-1"
                >
                  RICETTE
                </Link>
              </li>
            </ul>
          </div>
        </Row>
      </div>

      <div className="footer-copyright text-center text-light py-2 my-font-home ">
        <p className="mb-5">© 2023 Copyright: </p>
        <br />
        <a
          href="https://www.linkedin.com/in/gabriele-cuscin%C3%A0/"
          className="my-font-home text-decoration-none text-decoration-none text-danger bg-warning rounded-pill border border-5 border-dark px-3 mx-3 mt-3"
        >
          manarancino.it
        </a>
      </div>
    </Container>
  );
};

export default Footer;
