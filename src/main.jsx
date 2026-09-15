import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App.jsx";
import ApplyPage from "./pages/ApplyPage.jsx";
import HowItWorksPage from "./pages/HowItWorksPage.jsx";
import CareerFieldsPage from "./pages/CareerFieldsPage.jsx";
import FAQPage from "./pages/FAQPage.jsx";
import { ScrollToTop } from "./components/ScrollToTop.jsx";
import "./styles.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/apply" element={<ApplyPage />} />
        <Route path="/how-it-works" element={<HowItWorksPage />} />
        <Route path="/career-fields" element={<CareerFieldsPage />} />
        <Route path="/faq" element={<FAQPage />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
