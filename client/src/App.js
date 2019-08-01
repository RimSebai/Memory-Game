import React from "react";
import SelectForm from "./components/SelectForm";
import SignIn from "./components/SignIn";

class App extends React.Component {
  state = { start: false };
  signingIn = state => this.setState({ start: state });
  render() {
    return (
      <div className="App">
        {!this.state.start ? (
          <SignIn signingIn={this.signingIn} start={this.state.start} />
        ) : (
          <SelectForm />
        )}
      </div>
    );
  }
}

export default App;
