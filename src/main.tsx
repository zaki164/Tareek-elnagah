import React from "react";
import App from "./App";
import { createRoot } from 'react-dom/client'
import LanguageDetector from "./Modules/LanguageDetector.js";
import "./index.css";
import "./i18n";

const container = document.getElementById('root')

if (container) {
  createRoot(container).render(
    <React.StrictMode>
      <LanguageDetector>
        <App />
      </LanguageDetector>
    </React.StrictMode>
  );
}
