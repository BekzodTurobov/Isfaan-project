import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import global_en from "./tranlations/en/global.json";
import global_ru from "./tranlations/ru/global.json";
import global_uz from "./tranlations/uz/global.json";
import i18next from "i18next";
import { I18nextProvider } from "react-i18next";

i18next.init({
  interpolation: { escapeValue: false },

  lng: "ru",
  resources: {
    en: { global: global_en },
    ru: { global: global_ru },
    uz: { global: global_uz },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <I18nextProvider i18n={i18next}>
      <App />
    </I18nextProvider>
  </React.StrictMode>
);
