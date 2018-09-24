import React, { Component } from "react";
import logo from "./images/g-dino.png";
import Header from "./components/Header";
import JobDetails from "./components/JobDetails";
import InputForm from "./components/InputForm";
import Footer from "./components/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header logo={logo}/>
        <main>
          <JobDetails />
          <InputForm />
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
