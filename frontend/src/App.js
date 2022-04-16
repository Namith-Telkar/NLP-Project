import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";

import ThemeContextProvider from "./theme/ThemeContext";

import LandingPage from "./components/pages/LangingPage/LandingPage";
import NotFoundPage from "./components/pages/NotFoundPage/NotFoundPage";
import TextPage from "./components/pages/TextPage/TextPage";

function App() {
  return (
    <ThemeContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/text" element={<TextPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Router>
    </ThemeContextProvider>
  );
}

export default App;
