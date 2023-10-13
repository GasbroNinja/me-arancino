// src/components/CaroselloArancino.js
import React from "react";
import Slider from "react-slick";
import RicettaArancino from "./RicettaArancino";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const arancinoRicette = [
  {
    titolo: "Ricetta Arancino al Ragù",
    descrizione: `Arancino: una delizia croccante e succulenta al ragù 🍊,
    Immagina un guscio croccante che racchiude un cuore morbido e gustoso. L'arancino è proprio così: un mix perfetto di riso, ragù, formaggio e tanto amore per la cucina italiana.
    Ingredienti:
Riso Carnaroli: 300g
Ragù di carne: 200g
Mozzarella: 150g
Piselli: 100g
Formaggio grattugiato: 50g
Uovo: 1
Pangrattato: quanto basta
Olio per friggere: quanto basta
Sale e pepe: a piacere
Procedimento:
Cuoci il riso Carnaroli e lascialo raffreddare.
Mescola il riso con il ragù, i piselli, il formaggio grattugiato e l'uovo. Aggiusta di sale e pepe.
Prendi una porzione di composto di riso, forma una palla e inserisci al centro un cubetto di mozzarella.
Passa l'arancino nel pangrattato, assicurandoti che sia ben ricoperto.
Friggi gli arancini in abbondante olio caldo fino a quando saranno dorati e croccanti.
Scola gli arancini su carta assorbente per eliminare l'olio in eccesso.
🎉 Gusta e condividi l'autentico sapore siciliano 🎉

L'arancino è pronto per essere gustato caldo, magari accompagnato da una fresca bevanda estiva. Invita gli amici e la famiglia a condividere questo piatto tradizionale italiano, fatto con amore e passione, e lasciati conquistare dal suo sapore unico e avvolgente.

Vieni a scoprire il piacere autentico dell'arancino e deliziati con questa prelibatezza siciliana! Buon appetito
`,
    immagine: "https://i.ytimg.com/vi/yFQiN99RAd8/maxresdefault.jpg",
  },
  {
    titolo: "Ricetta Arancino al pistacchio",
    descrizione: `Gli arancini al pistacchio messinesi sono una prelibatezza della cucina siciliana, tipica della città di Messina. Si tratta di sfiziosi e golosi arancini, caratterizzati dalla presenza del pistacchio, un ingrediente tradizionalmente utilizzato in questa ricetta.

Ecco una descrizione della ricetta per preparare gli arancini al pistacchio messinesi:

**Ingredienti:**

1. Risotto: 300g di riso per risotti (come Arborio o Carnaroli)
2. Pistacchi: 100g di pistacchi sgusciati e tritati finemente
3. Brodo vegetale: circa 1,2 litri di brodo vegetale
4. Formaggio: 100g di formaggio grattugiato (come pecorino o parmigiano)
5. Burro: 50g di burro
6. Zafferano: un pizzico di zafferano in polvere
7. Cipolla: 1 cipolla media, tritata finemente
8. Vino bianco secco: 120 ml
9. Olio extravergine d'oliva: per friggere
10. Uova: 2 uova, sbattute (per la panatura)
11. Pangrattato: q.b. per la panatura
12. Sale e pepe: q.b. per regolare il gusto
13. Carne (opzionale): ragù di carne, mozzarella o prosciutto cotto per il ripieno (a piacere)

**Procedimento:**

1. **Preparazione del risotto:**
   a. In una pentola, soffriggere la cipolla con un po' di olio extravergine d'oliva.
   b. Aggiungere il riso e tostarlo per qualche minuto, quindi sfumare con il vino bianco fino a evaporazione.
   c. Aggiungere il brodo vegetale poco per volta, mescolando di tanto in tanto e attendendo che il riso assorba il brodo prima di aggiungerne altro.
   d. Aggiungere lo zafferano, il burro, il formaggio grattugiato e i pistacchi tritati. Continuare a mescolare fino a ottenere una consistenza cremosa. Regolare di sale e pepe secondo il gusto.

2. **Raffreddamento e formazione:**
   a. Trasferire il risotto in un contenitore e lasciarlo raffreddare completamente in frigorifero (preferibilmente per diverse ore o durante la notte). Questo renderà il risotto più facile da lavorare.

3. **Creazione degli arancini:**
   a. Prendere una porzione di risotto raffreddato e appiattirlo sulla mano.
   b. Aggiungere un po' di carne, mozzarella o prosciutto cotto al centro (se desiderato).
   c. Chiudere il risotto intorno al ripieno, formando una palla rotonda.

4. **Panatura e frittura:**
   a. Passare gli arancini prima nell'uovo sbattuto e poi nel pangrattato, assicurandosi che siano ben coperti.
   b. Friggere gli arancini in abbondante olio caldo fino a quando sono dorati e croccanti.

5. **Servire:**
   a. Scolare gli arancini su carta assorbente per eliminare l'eccesso di olio.
   b. Servire gli arancini al pistacchio messinesi caldi, magari accompagnati da una salsa di pomodoro o semplicemente da soli.

Buon appetito!`,
    immagine:
      "https://staticcookist.akamaized.net/wp-content/uploads/sites/21/2021/11/Arancini-al-pistacchio-1200x675.jpg",
  },
];

const CaroselloArancino = () => {
  const settings = {
    dots: true,
    infinite: 2,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <div>
      <Slider {...settings}>
        {arancinoRicette.map((ricetta, index) => (
          <RicettaArancino
            key={index}
            titolo={ricetta.titolo}
            descrizione={ricetta.descrizione}
            immagine={ricetta.immagine}
          />
        ))}
      </Slider>
    </div>
  );
};

export default CaroselloArancino;
