import React, { Component } from "react";

class Searchbox extends Component {
  render() {
    const { handleSearch } = this.props;

    return (
      <div className="mt-4">
        <label htmlFor="basic-url" className="h4">Github user searcher</label>
        <input
          type="text"
          className="form-control"
          id="basic-url"
          aria-describedby="basic-addon3"
          onChange={e => handleSearch(e)}
        />
      </div>
    );
  }
}

export default Searchbox;
