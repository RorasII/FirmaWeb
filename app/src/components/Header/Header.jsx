import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";

import "./Header.css";

function Header() {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/"}>Úvod</Link>
        </li>
        <li>
          <Link to={"/onas"}>O nás</Link>
        </li>
        <li>
          <Link to={"/kontakty"}>Kontakty</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Header;
