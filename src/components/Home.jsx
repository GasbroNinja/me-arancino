import React from 'react'
import "../style/Home.css"
import { Container } from 'react-bootstrap';
import MyNavbar from './MyNavbar';


const Home = () => {
  return (
    <>
      <Container fluid className="m-0 p-0">
        <Container fluid className="m-0 p-0">
          <MyNavbar />
        </Container>
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

            <div className="image">
            
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