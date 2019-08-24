import React, { Component } from "react";

class User extends Component {
  render() {
    const { user } = this.props;
    return(
        <li className="list-group-item">{user}</li>
    );
  }
}

export default User;
