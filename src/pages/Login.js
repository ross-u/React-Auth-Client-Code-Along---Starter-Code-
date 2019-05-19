import React, { Component } from "react";

class Login extends Component {
  state = { username: "", password: "" };

  handleFormSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state;
    console.log('Login -> form submit', { username, password });
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  render() {
    const { username, password } = this.state;

    return (
      <form onSubmit={this.handleFormSubmit}>
        
        <label>Username:</label>
        <input type="text" name="username" value={username} onChange={this.handleChange}/>

        <label>Password:</label>
        <input type="password" name="password" value={password} onChange={this.handleChange} />

        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;