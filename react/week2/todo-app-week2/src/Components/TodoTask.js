import React, { Component } from "react";

class TodoTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isChecked: false
    };

    this.handleCheck = this.handleCheck.bind(this);
  }

  handleCheck() {
    this.setState({ isChecked: !this.state.isChecked });
  }

  render() {
    const {
      task: { id },
      task: { description },
      task: { deadline }
    } = this.props;
    const deadlineString = new Date(deadline).toDateString();
    return (
      <li className="list-group-item">
        <div className="row">
          <div className="col-10 col-sm-4">
            <input
              type="checkbox"
              className="form-check-input align-bottom"
              data-toggle="tooltip"
              title="Mark Complete"
              id="check"
              defaultChecked={this.state.isChecked}
              onChange={this.handleCheck}
            />
            <label
              className="form-check-label align-top"
              style={
                this.state.isChecked ? { textDecoration: "line-through" } : {}
              }
              htmlFor="check"
            >
              {description} , {deadlineString}
            </label>
          </div>
          <div className="col-1">
            <i
              className="material-icons align-top"
              data-toggle="tooltip"
              title="Delete Task"
              style={{ color: "red", cursor: "pointer" }}
              onClick={() => this.props.handler(id)}
            >
              remove_circle
            </i>
          </div>
        </div>
      </li>
    );
  }
}

export default TodoTask;
