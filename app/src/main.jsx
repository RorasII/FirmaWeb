import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async"; // Přidáno
import "./assets/font/stylesheet.css";
import "./index.css";

import Onas from "./components/Onas/Onas.jsx";
import Uvod from "./components/Uvod/Uvod.jsx";
import ErrorPage from "./components/ErrorPage/ErrorPage.jsx";
import Kontakty from "./components/Kontakty/Kontakty.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Uvod />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/onas",
    element: <Onas />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/Kontakty",
    element: <Kontakty />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/sitemap.xml",
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} />
    </HelmetProvider>
  </StrictMode>
);
