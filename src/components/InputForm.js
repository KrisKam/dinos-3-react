import React, {Component} from "react";
import Preview from "./Preview";


class InputForm extends Component {

  state = {
    appInput: "",
    submitMessage: ""
  }

  handleChange = (e) => {
    return (
      this.setState({
      appInput: e.target.value,
      })
    );
  }

  handleSubmit = (e) => {
    e.preventDefault();
    return (
      this.setState({
        appInput: "",
        submitMessage: "Your application was submitted!"
      })
    );
  }

  render() {
    console.log(this.state)
    return (
      <React.Fragment>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="apply">
            Apply Here:
          </label>
          <textarea id="apply" rows="8" cols="100" onChange={this.handleChange} value={this.state.appInput}/>
          <button>Submit</button>
        </form>
        <p id="message">{this.state.submitMessage}&nbsp;</p>
        <Preview previewText={this.state.appInput}/>
      </React.Fragment>
    )
  }
}

export default InputForm;