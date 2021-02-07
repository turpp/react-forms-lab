import React from "react";

class TwitterMessage extends React.Component {
  constructor() {
    super();

    this.state = {
      content: ''
    };
  }

  handleText=(event)=>{
    this.setState({
      content: event.target.value
    })
  }

  charCount = () => {
    return 280 - this.state.content.length
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.handleText} type="text" name="message" id="message" value={this.state.content} />
        <p>Characters Left: {this.charCount()}</p>
      </div>
    );
  }
}

export default TwitterMessage;
