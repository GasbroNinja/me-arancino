import React from 'react'
import "../style/Home.css"
import "../style/MyNavbar.css";
import { Col, Container, Row } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import logo1 from "../assets/OrangeandYellowIllustrationThaiTeaLogo.png";
import CaroselloArancino from './CaroselloArancino';
import ricetta1img from "../assets/arancino-bg.png";
import ricetta2img from "../assets/img_6103-800x500.jpg";


const Home = () => {

  return (
    <>
      <Container fluid className="m-0 p-0">
        <Container fluid className="m-0 p-0">
          <MyNavbar />
        </Container>
        <Container fluid className="m-0 p-0"></Container>
        <Container id="action1" fluid className="">
          <div id="app">
            <div className="title">
              <div className="title-inner">
                <div className="cafe pe-4">
                  <div className="cafe-inner">Ma n'Arancino?</div>
                </div>
                <div className="mozart pe-4">
                  <div className="mozart-inner">L'Arancino Messinese</div>
                </div>
              </div>
            </div>

            <div
              className="image"
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              <img src={logo1} alt="arancino1" />
            </div>
          </div>
        </Container>
        <Container fluid className="py-3">
          {/*<CaroselloArancino />*/}
        </Container>

        <Container
          fluid
          className="py-3 d-flex align-items-center justify-content-center"
          data-aos="flip-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
        >
          <div className="p-5 m-5">
            <p className="p-text-animated text-white fw-semibold text-center">
              Ma n'Arancino? Italian Food P*orn
              <span className="p-span-text-animated text-center">
                Recipes Arancino Gourmet
              </span>
            </p>
          </div>
        </Container>
        <Container fluid className="py-3">
          <Row className="py-5">
            <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='d-flex align-items-center justify-content-center'>
              <div
                className="image"
                data-aos="zoom-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                <img src={ricetta1img} alt="arancinorecipes" />
              </div>
            </Col>
            <Col>
              <Col xs={12} sm={12} md={12} lg={6} xl={6} xxl={6} className='d-flex align-items-center justify-content-center'>
                <div
                  className="image"
                  data-aos="zoom-in"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="3000"
                >
                  <img src={ricetta2img} alt="arancinorecipes" fluid className='img-sizing' />
                </div>
              </Col>
            </Col>
          </Row>
        </Container>
      </Container>
      <div>Home</div>
    </>
  );
}

export default Home