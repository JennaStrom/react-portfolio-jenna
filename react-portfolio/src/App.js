import React from "react";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Portfolio from "./components/Portfolio";
import Resume from "./components/Resume";
import Footer from "./components/Footer";

export default function App() {
  return (
    <main>
      <Navbar />
      <About />
      <Portfolio />
      <Contact />
      <Resume />
      <Footer />
    </main>
  );
}