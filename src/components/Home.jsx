import React from 'react'
import "../style/Home.css"
import "../style/MyNavbar.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
//import AwesomeSlider from "react-awesome-slider";
//import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import { Carousel, Col, Container, Row } from 'react-bootstrap';
import MyNavbar from './MyNavbar';
import logo1 from "../assets/OrangeandYellowIllustrationThaiTeaLogo.png";

import ricetta1img from "../assets/arancino-bg.png";
import ricetta2img from "../assets/img_6103-800x500.jpg";
import video1 from "../assets/MessinadallaltoVideodiAndreaPeri.mp4"
import arancinogal1 from "../assets/ricetta-arancini.jpg";
import arancinogal2 from "../assets/ArancinoFlliGangiBronte.jpg";
import arancinogal3 from "../assets/ZagaraBrolo08.jpg";
import arancinogal4 from "../assets/maxresdefault.jpg";
import Footer from './Footer';

const Home = () => {
  //const AutoplaySlider = withAutoplay(AwesomeSlider);

  return (
    <>
      <Container fluid className="m-0 p-0" id="top">
        <Container fluid className="m-0 p-0">
          <MyNavbar />
        </Container>

        <Container
          id="action1"
          fluid
          className="d-flex align-items-center justify-content-center flex-wrap"
        >
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
              className="image d-flex align-items-center justify-content-center"
              data-aos="zoom-in"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              <img src={logo1} alt="arancino1" />
            </div>
          </div>
        </Container>

        <Container
          fluid
          className="py-3 d-flex align-items-center justify-content-center flex-wrap flex-column"
          data-aos="flip-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
        >
          <div
            className=" m-5 d-flex flex-wrap flex-column"
            data-aos="zoom-up"
            data-aos-easing="ease-in-sine"
            data-aos-duration="3000"
          >
            <p className="p-text-animated text-white fw-semibold text-center d-flex align-items-center flex-column">
              Ma n'Arancino? Italian Food P*orn
              <div className="d-flex flex-column">
                <span className="p-span-text-animated text-center">
                  Recipes Arancino Gourmet
                </span>
              </div>
            </p>
          </div>
        </Container>
        <Container fluid className="p-3">
          <Row
            className="py-5 d-flex align-items-center justify-content-center"
            id="ricette"
          >
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              xxl={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                className="image d-flex align-items-center justify-content-center"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                <img
                  src={ricetta1img}
                  alt="arancinorecipes"
                  className="img-sizing pb-3"
                />
                <div className="d-flex justify-content-center text-start align-items-center flex-column text-white p-text-animated flex-wrap ">
                  <h4 className="py-2 fw-bold text-center">
                    Arancino: una delizia croccante e succulenta al ragù 🍊
                  </h4>
                  <div className="font-recip">
                    <p className="font-recip">
                      Immagina un guscio croccante che racchiude un cuore
                      morbido e gustoso. L'arancino è proprio così: un mix
                      perfetto di riso, ragù, formaggio e tanto amore per la
                      cucina italiana.
                    </p>
                    <br />
                    <p className="my-font-home mt-3 text-center">
                      Ingredienti:
                    </p>
                    <ul>
                      <li>Riso Carnaroli: 300g </li>
                      <li>Ragù di carne: 200g </li>
                      <li>Mozzarella: 150g </li>
                      <li>Piselli: 100g </li>
                      <li>Formaggio grattugiato: 50g </li>
                      <li>Uovo: 1 </li>
                      <li>
                        Pangrattato: quanto basta Olio per friggere: quanto
                        basta
                      </li>
                      <li>Sale e pepe: a piacere </li>
                    </ul>
                    <ol>
                      <p className="my-font-home mt-3 text-center">
                        Procedimento:
                      </p>
                      <li>Cuoci il riso Carnaroli e lascialo raffreddare.</li>
                      <li>
                        {" "}
                        Mescola il riso con il ragù, i piselli, il formaggio
                        grattugiato e l'uovo.{" "}
                      </li>
                      <li>Aggiusta di sale e pepe.</li>
                      <li>
                        {" "}
                        Prendi una porzione di composto di riso, forma una palla
                        e inserisci al centro un cubetto di mozzarella.
                      </li>
                      <li>
                        Passa l'arancino nel pangrattato, assicurandoti che sia
                        ben ricoperto.{" "}
                      </li>
                      <li>
                        Friggi gli arancini in abbondante olio caldo fino a
                        quando saranno dorati e croccanti.{" "}
                      </li>
                      <li>
                        Scola gli arancini su carta assorbente per eliminare
                        l'olio in eccesso.
                      </li>
                    </ol>
                    <p className="my-font-home mt-3 text-start">
                      🎉 Gusta e condividi l'autentico sapore siciliano 🎉
                      L'arancino è pronto per essere gustato caldo, magari
                      accompagnato da una fresca bevanda estiva. Invita gli
                      amici e la famiglia a condividere questo piatto
                      tradizionale italiano, fatto con amore e passione, e
                      lasciati conquistare dal suo sapore unico e avvolgente.
                      Vieni a scoprire il piacere autentico dell'arancino e
                      deliziati con questa prelibatezza siciliana! Buon appetito
                    </p>
                  </div>
                </div>
              </div>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={12}
              xl={6}
              xxl={6}
              className="d-flex align-items-center  justify-content-top flex-column flex-wrap px-5"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="3000"
            >
              <div
                className="image img-sizing"
                data-aos="fade-up"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                <img
                  src={ricetta2img}
                  alt="arancinorecipes"
                  className="img-sizing pb-3"
                />
              </div>
              {/*change size img*/}
              <div className="d-flex justify-content-center text-start flex-column text-white p-text-animated font-recip">
                <h4 className="py-2 fw-bold text-uppercase text-center">
                  Gli arancini al pistacchio messinesi sono una prelibatezza
                  della cucina Messinese, caratterizzati dalla presenza del
                  pistacchio 💚
                </h4>
                <div className="font-recip">
                  Ecco una descrizione della ricetta per preparare gli arancini
                  al pistacchio messinesi:{" "}
                  <p className="my-font-home pt-3 text-center">Ingredienti:</p>
                  <ol className="py-2 px-0 font-recip">
                    <li>
                      Risotto: 300g di riso per risotti (come Arborio o
                      Carnaroli)
                    </li>
                    <li>
                      Pistacchi: 100g di pistacchi sgusciati e tritati finemente
                    </li>
                    <li>Brodo vegetale: circa 1,2 litri di brodo vegetale </li>
                    <li>
                      Formaggio: 100g di formaggio grattugiato (come pecorino o
                      parmigiano)
                    </li>
                    <li> Burro: 50g di burro </li>
                    <li> Zafferano: un pizzico di zafferano in polvere </li>
                    <li> Cipolla: 1 cipolla media, tritata finemente </li>
                    <li> Vino bianco secco: 120 ml </li>
                    <li> Olio extravergine d'oliva: per friggere </li>
                    <li>Uova: 2 uova, sbattute (per la panatura) </li>
                    <li>Pangrattato: q.b. per la panatura </li>
                    <li>Sale e pepe: q.b. per regolare il gusto</li>
                    <li>
                      Carne (opzionale): ragù di carne, mozzarella o prosciutto
                      cotto per il ripieno (a piacere)
                    </li>
                  </ol>
                  <h5 className="my-font-home mb-3 text-center">
                    Procedimento:
                  </h5>
                  <p className="fs-5 my-font-home text-center">
                    Preparazione del risotto:
                  </p>
                  <ol className="font-recip">
                    <li>
                      {" "}
                      In una pentola, soffriggere la cipolla con un po' di olio
                      extravergine d'oliva.
                    </li>
                    <li>
                      Aggiungere il riso e tostarlo per qualche minuto, quindi
                      sfumare con il vino bianco fino a evaporazione.
                    </li>
                    <li>
                      {" "}
                      Aggiungere il brodo vegetale poco per volta, mescolando di
                      tanto in tanto e attendendo che il riso assorba il brodo
                      prima di aggiungerne altro.{" "}
                    </li>
                    <li>
                      Aggiungere lo zafferano, il burro, il formaggio
                      grattugiato e i pistacchi tritati. Continuare a mescolare
                      fino a ottenere una consistenza cremosa. Regolare di sale
                      e pepe secondo il gusto.{" "}
                    </li>
                  </ol>
                  <p className="my-font-home mb-3 text-center">
                    Raffreddamento e formazione:{" "}
                  </p>
                  <p>
                    Trasferire il risotto in un contenitore e lasciarlo
                    raffreddare completamente in frigorifero (preferibilmente
                    per diverse ore o durante la notte). Questo renderà il
                    risotto più facile da lavorare.
                  </p>
                  <p className="my-font-home text-center">
                    Creazione degli arancini:
                  </p>
                  <ol className="font-recip">
                    <li>
                      Prendere una porzione di risotto raffreddato e appiattirlo
                      sulla mano.
                    </li>
                    <li>
                      Aggiungere un po' di carne, mozzarella o prosciutto cotto
                      al centro (se desiderato).{" "}
                    </li>
                    <li>
                      Chiudere il risotto intorno al ripieno, formando una palla
                      rotonda.{" "}
                    </li>
                  </ol>
                  <p className="my-font-home text-center">
                    Panatura e frittura:
                  </p>
                  <ol className="font-recip">
                    <li>
                      Passare gli arancini prima nell'uovo sbattuto e poi nel
                      pangrattato, assicurandosi che siano ben coperti.{" "}
                    </li>
                    <li>
                      Friggere gli arancini in abbondante olio caldo fino a
                      quando sono dorati e croccanti.
                    </li>
                  </ol>
                  <p className="my-font-home text-center">Servire:</p>
                  <ol className="font-recip">
                    <li>
                      Scolare gli arancini su carta assorbente per eliminare
                      l'eccesso di olio.{" "}
                    </li>
                    <li>
                      Servire gli arancini al pistacchio messinesi caldi, magari
                      accompagnati da una salsa di pomodoro o semplicemente da
                      soli.
                    </li>
                  </ol>
                </div>
              </div>
            </Col>
            <div
              className="p-text-animated py-5 mt-5 border-0 "
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <h4 className="text-center  p-span-text-animated border-0">
                Buon appetito!
              </h4>
            </div>
          </Row>
          <Container
            fluid
            className="mb-3 d-flex flex-column align-items-center justify-content-center"
          >
            <div
              className="p-text-animated p-2 my-5 d-flex justify-content-center align-items-center"
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <h2 className="text-center p-span-text-animated">
                Sicily Messina
              </h2>
            </div>

            <div className="video-settings box m-0 p-0 d-flex align-items-center justify-content-center">
              <video
                src={video1}
                autoPlay={true}
                muted
                loop
                controls
                className="box-inner m-0 p-0 d-flex align-items-center justify-content-center border border-3 rounded-5 border-danger"
              />
            </div>
          </Container>
          <Container
            fluid
            className="m-0 p-0 d-flex justify-content-center align-items-center"
          >
            <div
              id="chisiamo"
              className="p-text-animated p-2 my-5 d-flex justify-content-center align-items-center"
              data-aos="fade-down"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <h2 className="text-center p-span-text-animated">Chi Siamo?</h2>
            </div>
          </Container>

          <Container
            fluid
            className="m-0 p-0 d-flex justify-content-center align-items-center"
          >
            <Row className="py-5 d-flex align-items-center justify-content-center">
              <Col
                xs={12}
                sm={12}
                md={12}
                lg={12}
                xl={12}
                xxl={12}
                className="d-flex align-items-center  justify-content-top flex-column flex-wrap px-5"
                data-aos="zoom-in"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                <div className="d-flex justify-content-center flex-column text-white p-text-animated font-recip border-0">
                  <h4 className="my-font-home py-4 fw-bold text-uppercase d-flex justify-content-center flex-column text-white p-text-animated font-recip">
                    Esperienza Gustosa della Sicilia: <br /> 🌟
                    <br /> I Nostri Arancini
                  </h4>
                  <p className="font-recip py-3">
                    🏝 Senti la magia della Sicilia in ogni morso dei nostri
                    arancini artigianali, un vero simbolo della tradizione
                    culinaria isolana.
                  </p>
                  <p className="font-recip py-3">
                    🍅 Ingredienti Freschi e Autentici: Preparati con riso
                    selezionato, ripieni di ragù saporito o mozzarella cremosa,
                    gli arancini catturano il gusto autentico della Sicilia. Gli
                    aromi intensi dei nostri ingredienti freschi ti porteranno
                    in un viaggio culinario unico.
                  </p>
                  <p className="font-recip py-3">
                    🔥 Fritti alla Perfezione: La croccantezza dorata della
                    nostra panatura segreta è ciò che rende i nostri arancini
                    irresistibili. Una consistenza croccante all'esterno,
                    contrastata da una morbida esplosione di sapori all'interno
                    - ogni arancino è un capolavoro di equilibrio gustativo.
                  </p>
                  <p className="font-recip py-3">
                    👨‍👩‍👧 Per Tutta la Famiglia: Perfetti per un pasto veloce o da
                    condividere in compagnia, i nostri arancini portano la gioia
                    della tavola siciliana direttamente a casa tua. Condividi
                    momenti di felicità e autenticità con la tua famiglia e gli
                    amici.
                  </p>
                  <p className="font-recip py-3">
                    🌞 Assapora il Sole della Sicilia: Lasciati trasportare
                    dalla Sicilia con ogni morso. La combinazione di sapori
                    ricchi e autentici è come una giornata di sole sulla costa
                    mediterranea.
                  </p>
                </div>
              </Col>
            </Row>
          </Container>
        </Container>
        <Container id="gallery" fluid className=" video-settings pb-5 mb-5">
          {/*<AutoplaySlider
            play={true}
            cancelOnInteraction={false} // should stop playing on user interaction
            interval={4000}
            className="video-settings carousel-img"
          >
            <div
              data-src={arancinogal1}
              className="video-settings carousel-img"
            />
            <div
              data-src={arancinogal2}
              className="video-settings carousel-img"
            />
            <div
              data-src={arancinogal3}
              className="video-settings carousel-img"
            />
          </AutoplaySlider>*/}
          <Carousel
            slide
            className="d-flex align-items-center justify-content-center"
            data-aos="zoom-in"
            data-aos-easing="ease-in-sine"
            data-aos-duration="1000"
          >
            <Carousel.Item>
              <img
                src={arancinogal4}
                alt="arancino-carousel-img1"
                className="text-center d-flex align-items-center justify-content-center carousel-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={arancinogal3}
                alt="arancino-carousel-img2"
                className="text-center d-flex align-items-center justify-content-center carousel-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={arancinogal2}
                alt="arancino-carousel-img3"
                className="text-center d-flex align-items-center justify-content-center carousel-img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                src={arancinogal1}
                alt="arancino-carousel-img3"
                className="text-center d-flex align-items-center justify-content-center carousel-img"
              />
            </Carousel.Item>
          </Carousel>
        </Container>

        <Container fluid className="m-5 p-5">
          <Footer />
        </Container>

        <Container
          fluid
          className="mx-5 p-0 d-flex align-items-center justify-content-center"
        >
          <a
            href="#top"
            className="my-font-home text-decoration-none text-decoration-none text-danger bg-warning rounded-pill border border-5 border-dark px-3 mx-3 mt-3"
          >
            - BACK ON TOP -
          </a>
        </Container>
      </Container>
    </>
  );
}

export default Home