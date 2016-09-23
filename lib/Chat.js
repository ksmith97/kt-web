import React from 'react';


const DEFAULT_VALUE = 'Enter message...';

class Chat extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: DEFAULT_VALUE
    };
  }

  handleChange(event) {
    this.setState({
      value: event.target.value
    });
  }

  handleClick(event) {
    if (event.target.value === DEFAULT_VALUE) {
      this.setState({
        value: ''
      });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div className="col-lg-2">
          <div className="chat flex-column">
            <div className="chat-title">
              <h2>Chat</h2>
            </div>
            <div className="chat-window">
            </div>
            <form id="chat-form">
              <input
                className="chat-input form-control"
                type="text"
                value={this.state.value}
                onChange={this.handleChange}
                onClick={this.handleClick}
                onSubmit={this.handleSubmit}/>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default Chat;
