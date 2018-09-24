import React, { Component } from "react";


class JobDetails extends Component {
  
  state = {
    title: "title",
    description: "description"
  };

  //Need componentDidMount to trigger fetch. A Promise is an asynchronous call. You can't .then on something that's NOT a promise.
  componentDidMount() {
    //listing.json had to be moved to public folder.
    return fetch("./listing.json")
    .then(response => response.json())
    .then(data => {
      this.setState({
        title: data.title,
        description: data.description
      })
    })
  } 

  render() {
    return (
      <section>
        <h2>
          Job Details
        </h2>
        <h4>
          {this.state.title}
        </h4>
        <p>
          {this.state.description}
        </p>
      </section>
    );
  }
}


export default JobDetails;