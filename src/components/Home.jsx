import React, { useEffect, useState } from 'react'
import "../style/Home.css"
import "../style/MyNavbar.css";
import { Container } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import logo1 from "../assets/OrangeandYellowIllustrationThaiTeaLogo.png";

const Home = () => {

    const [show, setShow] = useState(true);
    const controlNavbar = () => {
      if (window.scrollY > 100) {
        setShow(false);
      } else {
        setShow(true);
      }
    };

    useEffect(() => {
      window.addEventListener("scroll", controlNavbar);
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }, []);

  return (
    <>
      <Container fluid className="m-0 p-0">
        <Container fluid className="m-0 p-0">
          <MyNavbar />
        </Container>
        <Container fluid className="m-0 p-0"></Container>
        <Container fluid className="">
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
        <Container fluid className=""></Container>
      </Container>
      <div>Home</div>
    </>
  );
}

export default Home