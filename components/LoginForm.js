import React from 'react';

export default class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
    
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleInputChange(prop, value){
    this.setState({
      [prop]: value
    })
  }

  handleSubmit(event) {
      event.preventDefault();
      if (this.state.username.length > 0 && this.state.password.length > 0){
        this.props.onSubmit(this.state)
        this.setState({username: '', password: ''})
      }
    }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="test-username" type="text" value={this.state.username} onChange={ e => this.handleInputChange('username', e.target.value)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="test-password" type="password" value={this.state.password} onChange={e => this.handleInputChange('password', e.target.value)}/>
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}
