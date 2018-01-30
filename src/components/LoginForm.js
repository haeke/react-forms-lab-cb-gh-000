import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: '',
    };
  }

  render() {
    return (
      <form>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value="username" />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value="password" />
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
