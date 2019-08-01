import React from "react";

class Loser extends React.Component {
  render() {
    return (
      <div className="winner">
        <form onSubmit={this.props.handleSubmit}>
          <input className="loser-button" type="submit" value="try Again" />
        </form>
        <img
          className="loserImage"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3Ng_Wz385g1BkUXaFXu90TmPo0bGQgi9rfKzPC8YQ9hX4XQ4D"
          alt="loser emoji"
        />
      </div>
    );
  }
}

export default Loser;
