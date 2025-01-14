import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Uvod.css";
import Header from "../Header/Header";

function Uvod() {
  const [currentLink, setCurrentLink] = useState("https://roras.tode.cz/L&M_web/portfolio/pizzeria/main.html");

  useEffect(() => {
    const links = [
      ["https://roras.tode.cz/L&M_web/portfolio/pizzeria/main.html"],
      ["https://roras.tode.cz/L&M_web/portfolio/burgrarna/"],
      ["https://roras.tode.cz/other/teeest/canvas-jstris/jstris.html"],
      ["https://cohla.netlify.app"],
      ["https://roras.tode.cz/other/teeest/drawingApp/main.html"],
    ]; // Pole textů
    let index = 0;

    const interval = setInterval(() => {
      index = (index + 1) % links.length; // Cyklus přes texty
      setCurrentLink(links[index]);
    }, 10000);

    return () => clearInterval(interval); // Vyčištění při odmountování
  }, []);

  return (
    <>
      <Helmet>
        <title>Lu&Mi - Úvodní stránka</title>
        <meta name="description" content="Nejlepší webové stránky" />
      </Helmet>
      {/*<Header />*/}
      <main id="uvodMain">
        <div id="innerContainer">
          <Header />
          <div id="leftSide">
            <div className="boxes">
              <h1>
                <span>Luami </span>
              </h1>
              <div>Váš partner ve světě webových stránek.</div>
            </div>
            <div className="boxes">
              <div>
                Webové <span>hry.</span>
              </div>
              <div>
                <span>Komerční </span> weby.
              </div>
              <div>
                Webové <span>aplikace.</span>
              </div>
              <div>
                Je Prdelník Miloš <span>průdel?</span>
              </div>
            </div>
          </div>
          <div id="rightSide">
            <div id="outerCard">
              <iframe id="innerCard" src={currentLink} frameborder="0"></iframe>
            </div>
          </div>
        </div>
      </main>
      {/*<Footer />*/}
    </>
  );
}

export default Uvod;
