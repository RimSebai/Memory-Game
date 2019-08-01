import React from "react";
// import { Link } from "react-router-dom";

class SignIn extends React.Component {
  handleSubmit = e => {
    e.preventDefault();
    const data = {
      player: e.target.player.value,
      email: e.target.email.value,
    };
    this.createPlayer(data);
    this.props.signingIn(true);
  };
  createPlayer(data) {
    return fetch("http://localhost:5000/api/player", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then(response => {
      if (response.status === 200 || response.status === 201) {
        return response.json();
      } else {
        response.json();
      }
    });
  }
  render() {
    return (
      <div className="sign-in">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQYWNTRkMAZq2RbBYtpkyB9mgHCFmxZzfTfpGEcS2XOIZRy85K8A"
          alt="sign in img"
        />
        <form onSubmit={this.handleSubmit}>
          <input className="sign-fields" type="text" name="player" placeholder="Add your name" />
          <br />
          <input className="sign-fields" type="email" name="email" placeholder="Add your email" />
          <br />
          <input type="submit" value="sign in" />
        </form>
      </div>
    );
  }
}

export default SignIn;
