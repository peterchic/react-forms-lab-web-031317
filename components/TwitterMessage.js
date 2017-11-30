import React from 'react';

export default class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      messageText: ""
    };

    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event){
    this.setState({
      messageText: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input type="text" value={this.state.messageText} onChange={this.handleChange}/>
        <p>{this.props.maxChars - this.state.messageText.length}</p>
      </div>
    );
  }
}
