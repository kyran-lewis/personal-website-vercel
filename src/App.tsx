import { useState } from "react";
import "./App.css";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ExperiencePage from "./pages/ExperiencePage";
import ContactPage from "./pages/ContactPage";
import { Route, Routes } from "react-router-dom";
import BlogPage from "./pages/BlogPage";
import PortfolioPage from "./pages/PortfolioPage";
import ViewBlogPostPage from "./pages/ViewBlogPostPage";

function App() {
  return (
    <>
      <Routes>
        <Route element={<NavBar />}>
          <Route path="/" element={<HomePage />} />
          {/* <NavBar />
          <HomePage /> */}
          {/* <ExperiencePage /> */}
          {/* <ContactPage /> */}

          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/portfolio" element={<PortfolioPage />} />

          <Route path="/blog">
            <Route index element={<BlogPage />} />
            <Route path=":id" element={<ViewBlogPostPage />} />
          </Route>

          <Route path="/contact" element={<ContactPage />} />
          {/* <Footer /> */}
        </Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
