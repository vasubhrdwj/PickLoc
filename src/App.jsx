/** @format */

import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import BlogPage from "./pages/BlogPage";
import { Route, Routes } from "react-router-dom";
import ThemeContextProvider from "./context/themeContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </ThemeContextProvider>
  );
};

export default App;
