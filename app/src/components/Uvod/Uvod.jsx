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
      index = (index + 1) % links.length;
      setCurrentLink(links[index]);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    window.addEventListener("resize", () => {
      let scale = window.innerWidth / 1300;
      console.log(scale);
      document.getElementById("innerCard").style.scale = scale;
    });
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
                Je Prdelník <span>průdel?</span>
              </div>
            </div>
          </div>
          <div id="rightSide">
            <div id="outerCard">
              <iframe id="innerCard" src={currentLink} frameBorder={"0"}></iframe>
            </div>
          </div>
        </div>
      </main>
      {/*<Footer />*/}
    </>
  );
}

export default Uvod;
