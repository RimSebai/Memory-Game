import React from "react";
import StartGame from "./StartGame";

class Card extends React.Component {
  number = null;
  numOfClicks = 0;
  handleClick = i => {
    let newState = [...this.props.numberOfCards];

    if (newState[i].frontSide) {
      newState[i].frontSide = false;
      this.props.flip(newState);
      this.numOfClicks++;
      this.numOfClicks === this.props.numberOfCards.length && this.props.changeState("win");
      this.number > this.props.numberOfCards[i].value
        ? this.props.changeState("gameOver")
        : (this.number = this.props.numberOfCards[i].value);
    }
  };

  HideNumbers = e => {
    e.preventDefault();
    let z = [...this.props.numberOfCards].map(el => ({ value: el.value, frontSide: true }));
    this.props.flip(z);
  };

  render() {
    return (
      this.props.numberOfCards.length > 0 && (
        <>
          <div className="cards">
            {this.props.numberOfCards.map((obj, i) => (
              <div className="flip-card" key={i}>
                <div
                  className={obj.frontSide ? "flip-card-inner-front" : "flip-card-inner-back"}
                  onClick={() => {
                    this.handleClick(i);
                  }}
                >
                  <div className="flip-card-front">
                    <h1 className="cardValue">{!obj.frontSide && obj.value}</h1>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <StartGame handleSubmit={this.HideNumbers} />
        </>
      )
    );
  }
}
export default Card;
