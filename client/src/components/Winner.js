import React from "react";

class Winner extends React.Component {
  render() {
    return (
      <div className="winner">
        <form onSubmit={this.props.handleSubmit}>
          <input className="winner-button" type="submit" value="Play Again" />
        </form>
        <img
          src="http://www.pngall.com/wp-content/uploads/1/Celebration-Free-PNG-Image.png"
          alt="celebration img "
        />
      </div>
    );
  }
}

export default Winner;
