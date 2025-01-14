import { useState } from "react";
import "./ErrorPage.css";
import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <>
      <main id="errorPageMain">
        <div id="title">404 PAGE NOT FOUND</div>
        <Link id="buttonBack" to={"/"}>
          Get back
        </Link>
      </main>
    </>
  );
}

export default ErrorPage;
