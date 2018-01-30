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
  
  onSubmit = (event) => {
    this.setState({
      
    });
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} />
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
