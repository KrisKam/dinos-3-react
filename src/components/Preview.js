import React, {Component} from "react";


class Preview extends Component {

  state = {
    showPreview: false
  }

  togglePreview = () => {
    this.setState({showPreview: !this.state.showPreview})
  }

  show = () => {
    if (this.state.showPreview) {
      return (<section id="application-preview">
        {this.props.previewText}
      </section>)
    }
  }


  render() {

    return (
      <React.Fragment>
        <button onClick={()=>this.togglePreview()}>Show Preview</button>
        {this.show()}
      </React.Fragment>
    );
  }
}

export default Preview;