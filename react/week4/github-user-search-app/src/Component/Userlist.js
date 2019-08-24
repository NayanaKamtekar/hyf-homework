import React, { Component } from "react";
import User from "./User";

class Userlist extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidUpdate() {
    const { query } = this.props;
    if (query !== "") {
      fetch(`https://api.github.com/search/users?q=${query}`)
        .then(res => res.json())
        .then(data =>
          this.setState({
            users: data.items.map(elm => elm.login)
          })
        );

      console.log(this.state.users);
    }
  }

  shouldComponentUpdate(nextProps){
    if (nextProps === this.props) {
        return false;
    }
    else {
        return true;
    }
  } 

  render() {
    let listOfUsers;
    if (this.state.users.length > 0) {
      listOfUsers = this.state.users.map(user => {
        return <User user={user} />;
      });
    }

    if (listOfUsers !== "") {
      return <ul className="list-group list-group-flush">{listOfUsers}</ul>;
    } else {
      return <p>Loding...</p>;
    }
  }
}

export default Userlist;
