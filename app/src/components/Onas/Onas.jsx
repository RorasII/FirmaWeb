import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import "./Onas.css";
import TitlePhoto from "../../assets/images/Title.png";
import Header from "../Header/Header";

function Onas() {
  return (
    <>
      <Helmet>
        <title>Lu&Mi - O nás</title>
        <meta name="description" content="Nejlepší webové stránky" />
      </Helmet>
      <main id="onasMain">
        <div id="innerContainer">
          <Header />
          <img id="title" src={TitlePhoto} alt="Nadpis" />
          <div id="leftSide" className="sides">
            <div className="boxes box1">
              <div className="lines line1"></div>
            </div>
            <div className="boxes box2">
              <div className="lines line2"></div>
              <div className="lines line3"></div>
            </div>
          </div>
          <div id="rightSide" className="sides">
            <div className="boxes box3">
              <div className="lines line4"></div>
              <div className="lines line5"></div>
            </div>
            <div className="boxes box4">
              <div className="lines line6"></div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

export default Onas;
