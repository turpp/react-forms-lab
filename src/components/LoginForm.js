import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange= (event)=>{
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleLogin = (event) =>{
    event.preventDefault()
    if((event.target.username.value && event.target.password.value) != '' ){
      let arg=[this.state.username, this.state.password]
      return this.props.handleLogin(this.state)
    } 
  }

  render() {
    return (
      <form onSubmit={this.handleLogin}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={this.handleChange} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
