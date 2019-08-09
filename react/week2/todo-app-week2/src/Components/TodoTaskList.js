import React, { Component } from "react";
import TodoTask from "./TodoTask";
import TodoTaskTitle from "./TodoTaskTitle";
import TaskAddForm from "./TaskAddForm";

export class TodoTaskList extends Component {
  constructor(props) {
    super(props);

    this.state = {
      tasks: this.props.tasks,
      formShow: false,
      inputValue: "",
      inputDate: ""
    };

    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleAddTask = this.handleAddTask.bind(this);

    this.refForm = React.createRef();
    console.log("constructor");
  }

  handleValueChange(event) {
    this.setState({
      inputValue: event.target.value
    });
  }

  handleAddTask() {
    this.setState({
      formShow: !this.state.formShow,
      inputValue: "",
      inputDate: ""
    });
  }

  handleDelete(key) {
    console.log("test called");
    console.log(key);
    const currentTasks = this.state.tasks;
    const newTasks = currentTasks.filter(elem => elem.id !== key);

    this.setState({
      tasks: newTasks,
      inputValue: "",
      inputDate: ""
    });
  }

  handleDateChange(event) {
    this.setState({
      inputDate: event.target.value
    });
    event.preventDefault();
  }

  handleSubmit(event) {
    if (this.state.inputValue !== "" && this.state.inputDate !== "") {
      const currentTasks = this.state.tasks;
      const key = currentTasks.length + 1;
      currentTasks.push({
        id: key,
        description: this.state.inputValue,
        deadline: this.state.inputDate
      });
      this.setState({
        tasks: currentTasks,
        inputValue: "",
        inputDate: ""
      });
     
      this.refForm.current.reset();
    }
    console.log(this.state);
    console.log("handelSubmit");
    event.preventDefault();
  }

  render() {
    console.log("render");
    console.log(this.state.tasks);
    // const { tasks }=this.props;
    let listOfTask = this.state.tasks.map(taskElem => {
      return (
        <TodoTask
          key={taskElem.id}
          task={taskElem}
          handler={this.handleDelete}
        />
      );
    });

    if (listOfTask.length === 0) {
      listOfTask = (
        <li className="list-group-item text-warning h4">No items</li>
      );
    }
    let addTaskForm;
    if (this.state.formShow === true) {
      addTaskForm = (
        <TaskAddForm
          handleValueChange={this.handleValueChange}
          handleDateChange={this.handleDateChange}
          handleSubmit={this.handleSubmit}
          handleAddTask={this.handleAddTask}
          refForm={this.refForm}
        />
      );
    } else {
      addTaskForm = (
        <li className="list-group-item">
          <div className="row">
            <i
              className="material-icons align-top pr-1 "
              style={{ color: "orange", cursor: "pointer" }}
              onClick={this.handleAddTask}
            >
              add_circle
            </i>
            <div className="col-10 pl-0 font-weight-light">Add Task</div>
          </div>
        </li>
      );
    }

    return (
      <div>
        <div className="container-fluid">
          <TodoTaskTitle />
        </div>
        <div className="container">
          <ul className="list-group list-group-flush">
            {listOfTask}
            {addTaskForm}
          </ul>
        </div>
      </div>
    );
  }
}

export default TodoTaskList;
