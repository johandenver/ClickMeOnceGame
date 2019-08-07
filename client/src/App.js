import React from "react";
import Nav from "./Components/Navbar";
import Jumbotron from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import ImageCard from "./Components/ImageCard";

const App = () => {
  return (
    <div className="App">
      <Nav />
      <Jumbotron />
      <main>
        <ImageCard />
      </main>

      <Footer />
    </div>
  );
};

export default App;
