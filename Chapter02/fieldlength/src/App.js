import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      fieldValue: "",
      submitDisabled: true,
    }
  }

  textareaValueChanged(event) {
    const fieldValue = event.target.value;
    this.setState({ fieldValue });
    this.validateTextareaLength();
  }

  renderInputLength() {
    return (<p>You entered {this.state.fieldValue.length} characters.</p>)
  }

  validateTextareaLength() {
    if (!this.state.submitDisabled && this.state.fieldValue.length <= 100) {
      this.setState({ submitDisabled: true });
    } else if (this.state.submitDisabled && this.state.fieldValue.length > 100){
      this.setState({ submitDisabled: false });
    }
  }

  submitPost(){
    alert("Submitting the blog post");
  }

  render() {
    return (
      <div className="App"><h2>Blog Post Writer</h2>
        <div>You must enter at least 100 characters to submit.</div>
        <textarea onChange={this.textareaValueChanged.bind(this)}></textarea>
        {this.renderInputLength()} <button disabled={this.state.submitDisabled} onClick={this.submitPost}>Submit Post</button>
      </div>
    )
  }
}

export default App;
