import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: ''
    };
  }
  onChange = event => {

    this.setState({
      message: event.target.value
    })
  }

  render() {
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={ event => this.onChange(event)} type="text" name="message" id="message" value={this.state.message}/>
        <label>{this.props.maxChars - this.state.message.length }</label>
      </div>
    );
  }
}

export default TwitterMessage;
