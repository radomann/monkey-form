import React, { Suspense } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";

import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";

import "./assets/css/app.scss";

i18n
  .use(initReactI18next)
  .use(HttpApi)
  .init({
    lng: "en",
    fallbackLng: "en",
    supportedLngs: ["en", "me", "mt"],
    backend: {
      loadPath: "/assets/locales/{{lng}}/translation.json",
    },
  });

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
