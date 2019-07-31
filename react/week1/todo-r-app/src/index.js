import React from 'react';
import ReactDOM from 'react-dom';

class TodoTaskTitle extends React.Component {
    render() {
        return(
         <h1>Todo List</h1>
        )
    }    
}

class TodoTask extends React.Component {
    render() {
        console.log(this.props);
        const { task: {description}, task: {deadline} }=this.props;
        return(
            <li>
                {description} , {deadline}
            </li>
        )
    }    
}

class TodoTaskList extends React.Component {
    render() {
        console.log(this.props);
        const { tasks }=this.props;

        const listOfTask = tasks.map(elem =>{
            return <TodoTask task={elem}/>
        })
        return(
            <div>
                <TodoTaskTitle></TodoTaskTitle>
                <ul>
                    {listOfTask}
                </ul>
            </div>
        )
    }    
}

const root=document.getElementById('root');

ReactDOM.render(
    <TodoTaskList 
        tasks={
            [
                {description: "Get out of bed", deadline: "Wed Sep 13 2017"},
                {description: "Brush teeth", deadline: "Thu Sep 14 2017"},
                {description: "Get out of bed", deadline: "Fri Sep 15 2017"}
            ]
        }
    />, root);




