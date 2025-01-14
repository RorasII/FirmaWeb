import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import script from "./Kontakty.js";

import "./Kontakty.css";
import "./Kontakty.js";

function Kontakty() {
  return (
    <>
      <canvas width={1920} height={1080} id="mainCanvas"></canvas>
      <script src={script}></script>
    </>
  );
}

export default Kontakty;
