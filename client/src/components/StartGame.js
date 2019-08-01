import React from "react";

class StartGame extends React.Component {
  render() {
    return (
      <div className="Start-game">
        <form onSubmit={this.props.handleSubmit}>
          <input className="play-button" type="submit" value="Play" />
        </form>
      </div>
    );
  }
}

export default StartGame;
