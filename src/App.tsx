import { BrowserRouter } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Helmet } from "react-helmet";
import Router from "./Router/Router";
import "react-lazy-load-image-component/src/effects/blur.css";
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init({
  once: true,
});

function App() {
  const { t } = useTranslation();

  return (
    <BrowserRouter>
      <Helmet>
        <title>{t("طريق النجاة")}</title>
      </Helmet>
      <Router />
    </BrowserRouter>
  );
}

export default App;
