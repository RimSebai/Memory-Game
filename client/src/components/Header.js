import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="Header">
        <h1>Welcome to Rim's Memory Game</h1>
        <h2>Click on the cards in ascending order of the numbers</h2>
        <h2>To Start the Game Please select a number of Cards</h2>
      </div>
    );
  }
}

export default Header;
