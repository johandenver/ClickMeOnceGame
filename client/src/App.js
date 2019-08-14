import React from "react";
import Nav from "./Components/Navbar";
import Header from "./Components/Jumbotron";
import Footer from "./Components/Footer";
import sChars from "./chars.json";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      chars: sChars,
      message: "Play the Game you will! ",
      score: 0,
      highScore: 0
    };
    // const charsClone = sChars;
  }

  componentWillMount() {
    this.shuffleCharachters();
  }

  // function to shuffle the images
  shuffleCharachters = () => {
    const shuffledChars = this.state.chars.sort(() => Math.random() - 0.5);
    this.setState({
      chars: shuffledChars
    });
  };

  // function to handle the click on the charachter images
  handleCharClick = (id, i) => {
    console.log(i);
    console.log(id);
    let selectedChar = this.state.chars[i];
    let newCharsArray = this.state.chars;
    const { score, highScore } = this.state;

    if (!selectedChar.clicked) {
      console.log("user is correct");
      selectedChar.clicked = true;
      newCharsArray.splice(i, 1, selectedChar);
      let newScore = score + 1;
      let newHighScore = newScore > highScore ? newScore : highScore;

      this.setState({
        chars: newCharsArray,
        score: newScore,
        highScore: newHighScore,
        message: "Correct, the Force is strong with you!"
      });
      this.shuffleCharachters();
    } else {
      console.log("incorrect");
      sChars.forEach(char => {
        char.clicked = false;
      });
      this.setState({
        chars: sChars,
        score: 0,
        message: "Incorrect, let the Force flow next time!"
      });
      this.shuffleCharachters();
    }
  };
  // render function
  render() {
    return (
      <div className="App">
        <header>
          <Nav
            message={this.state.message}
            score={this.state.score}
            highScore={this.state.highScore}
          />
        </header>
        <main className="main-body">
          <Header />
          <div className="row char-area">
            {/* map through the cards to render to the page */}
            {this.state.chars.map((char, i) => (
              <div
                className="card"
                key={char.id}
                onClick={() => this.handleCharClick(char.id, i)}
              >
                <img
                  src={`./Images/${char.image}`}
                  alt={char.name}
                  className="char"
                />
              </div>
            ))}
          </div>
        </main>

        <Footer />
      </div>
    );
  }
}

export default App;
