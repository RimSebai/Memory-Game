import React from "react";
import Card from "./Card";
import Winner from "./Winner";
import Header from "./Header";
import Loser from "./Loser";

class SelectForm extends React.Component {
  state = {
    cards: [],
    playerState: "isPlaying",
  };
  handleChange = e => {
    const cardsNumber = e.target.value;
    this.sendCardsNumber({ number: cardsNumber });
  };
  sendCardsNumber(num) {
    return fetch("http://localhost:5000/api/cards", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(num),
    })
      .then(response => {
        if (response.status === 200 || response.status === 201) {
          return response.json();
        } else {
          response.json();
        }
      })
      .then(response => {
        let cards = response.map(el => ({ value: el, frontSide: false }));
        this.setState({ cards, playerState: "isPlaying" });
      });
  }
  flip = newState => {
    this.setState({ cards: newState });
  };
  changeState = newState => {
    this.setState({ playerState: newState });
  };
  render() {
    const numberOfCards = [4, 8, 12];
    return this.state.playerState === "isPlaying" ? (
      <div className="Container">
        <Header />
        <form onChange={this.handleChange}>
          <label>Choose a number</label>
          <select>
            <option key="0" value="" />
            {numberOfCards.map((nu, index) => (
              <option key={index + 1} value={nu}>
                {nu}
              </option>
            ))}
          </select>
        </form>
        <Card
          numberOfCards={this.state.cards}
          flip={this.flip}
          changeState={this.changeState}
          playerState={this.state.playerState}
        />
      </div>
    ) : this.state.playerState === "win" ? (
      <Winner />
    ) : (
      <Loser />
    );
  }
}

export default SelectForm;
