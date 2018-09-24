import React from "react";


class Preview extends Component {

  state = {
    showPreview: false,
    className: "hidden"
  }

  togglePreview = () => {
    const showPreview = 
  }
  render() {

    return (
      <React.Fragment>
        <button onClick={this.togglePreview}>Show Preview</button>
        <section id="application-preview" >
          {props.previewText}
        </section>
      </React.Fragment>
    );

  }

}

export default Preview;