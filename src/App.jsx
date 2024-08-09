import React from "react";
import './App.css'
import Header from "./components/header/Header";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div>
       <header>
          <Header/>
       </header>
       <section className="home">
          <Hero/>
        </section>

    </div>
  );
}

export default App;
