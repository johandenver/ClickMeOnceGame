import React from "react";
import Nav from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <main />

      <Footer />
    </div>
  );
}

export default App;
