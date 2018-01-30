import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
    
    this.onSubmit = this.onSubmit.bind(this);
  }
  
  logIn = (event) => {
    event.preventDefault();
  }
  
  onSubmit = (event) => {
    this.setState({
      
    });
  }

  render() {
    return (
      <form onSubmit={this.logIn}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" name="username" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" name="password" type="password" value={this.state.password} />
          </label>
        </div>
        <div>
          <button type="submit" onClick={this.onSubmit}>Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
