import React from 'react';


const DEFAULT_VALUE = 'Enter message...';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: DEFAULT_VALUE,
      chatWindowValue: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleFocus(event) {
    if (event.target.value === DEFAULT_VALUE) {
      this.setState({
        value: ''
      });
    }
  }

  handleBlur(event) {
    if (event.target.value === '') {
      this.setState({
        value: DEFAULT_VALUE
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    let chatWindowValue = this.state.chatWindowValue;
    chatWindowValue += '\n' + this.refs.chatInput.value;
    this.setState({
      value: '',
      chatWindowValue: chatWindowValue
    });
  }

  render() {
    return (
      <div>
        <div className="col-lg-2">
          <div className="chat flex-column">
            <div className="chat-title">
              <h2>Chat</h2>
            </div>
            <textarea className="chat-window" readOnly value={this.state.chatWindowValue} />
            <form id="chat-form" onSubmit={this.handleSubmit}>
              <input
                ref="chatInput"
                className="chat-input form-control"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur} />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
