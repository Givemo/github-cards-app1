import React from "react";
import "./App.css";
import axios from "axios";

class Form extends React.Component {
  state = { userName: "" }; //Used this instead of ref
  handleSubmit = async (event) => {
    try {
      event.preventDefault();
      const resp = await axios.get(
        `https://api.github.com/users/${this.state.userName}`
      );
      this.props.onSubmit(resp.data);
      this.setState({ userName: "" });
    } catch (err) {
      alert("The user name is not available");
      this.setState({ userName: "" });
    }
  };
  render() {
    return (
      <>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.userName} //Used this instead of ref
            onChange={(event) =>
              this.setState({ userName: event.target.value })
            } //Used this instead of ref
            placeholder="GitHub username"
            required
          ></input>
          <button>Add Card</button>
        </form>
      </>
    );
  }
}

export default Form;
