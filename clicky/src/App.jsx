import React, { Component } from "react";
import NavBar from './components/NavBar';
import FriendCard from "./components/FriendCard";
import friends from "./friends.json";
import "./App.css";
// Shuffle the order of the elements in the friends array
const shuffle = require('shuffle-array');

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    subtitle: 'Click an image to begin!',
    score: 0,
    topScore: 0,
    pickArray: []
  };

  handlePick = props => {
    const pick = props.id;

    if (this.state.pickArray.indexOf(pick) === -1) {
      const pickArray = this.state.pickArray;
      pickArray.push(pick);
      this.setState(() => ({ subtitle: 'You Guessed Correctly!' }));
      this.setState(() => ({ pickArray: pickArray }));
      if (this.state.topScore <= this.state.score) {
        this.setState(() => ({ score: this.state.score + 1 }));
        this.setState({ topScore: this.state.topScore + 1 });
      } else {
        this.setState(() => ({ score: this.state.score + 1 }));
      }
    } else {
      this.setState({ score: 0 });
      this.setState({ subtitle: 'You Guessed Incorrectly!' });
      this.setState(() => ({ pickArray: [] }));
    }
  };

  render() {
    return (
      <div>
        <NavBar
          subtitle={this.state.subtitle}
          score={this.state.score}
          topScore={this.state.topScore}
        />

        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Star Wars Clicky Game</h1>
            <h3>
              Click on an image to earn points, but don't click on any more than
              once!
            </h3>
          </header>
          <div className="container">
            {shuffle(
              this.state.friends.map(friends => (
                <FriendCard
                  key={friends.id}
                  id={friends.id}
                  handlePick={this.handlePick}
                  name={friends.name}
                  image={friends.image}
                  subtitle={this.state.subtitle}
                  score={this.state.score}
                  topScore={this.state.topScore}
                />
              ))
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
