import React, { Component } from "react";
import Searchbox from "./Searchbox";
import Userlist from "./Userlist";

export class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: ""
    };
  }

  handleSearch = event => {
    this.setState({
      query: event.target.value
    });

    console.log(this.state.query);
  };

  render() {
    return (
      <div className="row">
        <div className="col" />
        <div className="col">
          <Searchbox handleSearch={this.handleSearch} />
          <Userlist query={this.state.query} />
        </div>
        <div className="col" />
      </div>
    );
  }
}

export default Main;
