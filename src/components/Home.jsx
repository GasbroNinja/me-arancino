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
          className="py-3 d-flex align-items-center justify-content-center flex-wrap flex-column"
          data-aos="flip-up"
          data-aos-easing="ease-in-sine"
          data-aos-duration="3000"
        >
          <div className=" m-5 d-flex flex-wrap flex-column">
            <p className="p-text-animated text-white fw-semibold text-center d-flex align-items-center">
              Ma n'Arancino? Italian Food P*orn
              <div className="d-flex flex-column">
                <span className="p-span-text-animated text-center">
                  Recipes Arancino Gourmet
                </span>
              </div>
            </p>
          </div>
        </Container>
        <Container fluid className="py-3">
          <Row className="py-5 d-flex align-items-center justify-content-center">
            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                className="image"
                data-aos="fade-up-right"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                <img
                  src={ricetta1img}
                  alt="arancinorecipes"
                  className="img-sizing pb-3"
                />
                <div className="d-flex justify-content-center flex-column text-white p-text-animated">
                  <h4 className="py-2 fw-bold">
                    Arancino: una delizia croccante e succulenta al ragù 🍊
                  </h4>
                  <p className="font-recip">
                    Immagina un guscio croccante che racchiude un cuore morbido
                    e gustoso. L'arancino è proprio così: un mix perfetto di
                    riso, ragù, formaggio e tanto amore per la cucina italiana.
                    Ingredienti: Riso Carnaroli: 300g Ragù di carne: 200g
                    Mozzarella: 150g Piselli: 100g Formaggio grattugiato: 50g
                    Uovo: 1 Pangrattato: quanto basta Olio per friggere: quanto
                    basta Sale e pepe: a piacere Procedimento: Cuoci il riso
                    Carnaroli e lascialo raffreddare. Mescola il riso con il
                    ragù, i piselli, il formaggio grattugiato e l'uovo. Aggiusta
                    di sale e pepe. Prendi una porzione di composto di riso,
                    forma una palla e inserisci al centro un cubetto di
                    mozzarella. Passa l'arancino nel pangrattato, assicurandoti
                    che sia ben ricoperto. Friggi gli arancini in abbondante
                    olio caldo fino a quando saranno dorati e croccanti. Scola
                    gli arancini su carta assorbente per eliminare l'olio in
                    eccesso. 🎉 Gusta e condividi l'autentico sapore siciliano
                    🎉 L'arancino è pronto per essere gustato caldo, magari
                    accompagnato da una fresca bevanda estiva. Invita gli amici
                    e la famiglia a condividere questo piatto tradizionale
                    italiano, fatto con amore e passione, e lasciati conquistare
                    dal suo sapore unico e avvolgente. Vieni a scoprire il
                    piacere autentico dell'arancino e deliziati con questa
                    prelibatezza siciliana! Buon appetito
                  </p>
                </div>
              </div>
            </Col>

            <Col
              xs={12}
              sm={12}
              md={12}
              lg={6}
              xl={6}
              xxl={6}
              className="d-flex align-items-center justify-content-center"
            >
              <div
                className="image"
                data-aos="fade-up-left"
                data-aos-easing="ease-in-sine"
                data-aos-duration="3000"
              >
                <img
                  src={ricetta2img}
                  alt="arancinorecipes"
                  fluid
                  className="img-sizing pb-3"
                />
              </div>
              {/*change size img*/}
              <div className="d-flex justify-content-center flex-column text-white p-text-animated">
                <h4 className="py-2 fw-bold">
                  Gli arancini al pistacchio messinesi sono una prelibatezza
                  della cucina Messinese, caratterizzati dalla presenza del
                  pistacchio 💚
                </h4>
                <p className="font-recip">
                  Ecco una descrizione della ricetta per preparare gli arancini
                  al pistacchio messinesi: <p>Ingredienti:</p>
                  <ol className='py-2'>
                    <li>
                       Risotto: 300g di riso per risotti (come Arborio o
                      Carnaroli)
                    </li>
                    <li>
                       Pistacchi: 100g di pistacchi sgusciati e tritati
                      finemente
                    </li>
                    <li>
                       Brodo vegetale: circa 1,2 litri di brodo vegetale{" "}
                    </li>
                    <li>
                       Formaggio: 100g di formaggio grattugiato (come pecorino
                      o parmigiano)
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
                      Carne (opzionale): ragù di carne, mozzarella o prosciutto cotto per il ripieno (a piacere)
                    </li>
                  </ol>
                  <p>Procedimento:</p>
                  1. **Preparazione del risotto:** a. In una pentola,
                  soffriggere la cipolla con un po' di olio extravergine
                  d'oliva. b. Aggiungere il riso e tostarlo per qualche minuto,
                  quindi sfumare con il vino bianco fino a evaporazione. c.
                  Aggiungere il brodo vegetale poco per volta, mescolando di
                  tanto in tanto e attendendo che il riso assorba il brodo prima
                  di aggiungerne altro. d. Aggiungere lo zafferano, il burro, il
                  formaggio grattugiato e i pistacchi tritati. Continuare a
                  mescolare fino a ottenere una consistenza cremosa. Regolare di
                  sale e pepe secondo il gusto. 2. **Raffreddamento e
                  formazione:** a. Trasferire il risotto in un contenitore e
                  lasciarlo raffreddare completamente in frigorifero
                  (preferibilmente per diverse ore o durante la notte). Questo
                  renderà il risotto più facile da lavorare. 3.**Creazione degli
                  arancini:** a. Prendere una porzione di risotto raffreddato e
                  appiattirlo sulla mano. b. Aggiungere un po' di carne,
                  mozzarella o prosciutto cotto al centro (se desiderato). c.
                  Chiudere il risotto intorno al ripieno, formando una palla
                  rotonda. 4. **Panatura e frittura:** a. Passare gli arancini
                  prima nell'uovo sbattuto e poi nel pangrattato, assicurandosi
                  che siano ben coperti. b. Friggere gli arancini in abbondante
                  olio caldo fino a quando sono dorati e croccanti. 5.
                  **Servire:** a. Scolare gli arancini su carta assorbente per
                  eliminare l'eccesso di olio. b. Servire gli arancini al
                  pistacchio messinesi caldi, magari accompagnati da una salsa
                  di pomodoro o semplicemente da soli. Buon appetito!
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </>
  );
}

export default Home