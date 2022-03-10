import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";

export default class ShowTasks extends React.Component{

    render(){
        const {taskList, removeTask} = this.props;
        

        const handleClick = (index) => {
            // alert("Clicked element on position: " + JSON.stringify(index));
            removeTask(JSON.stringify(index));
        }

    return (
        <div className="tasks-container">

            <Table striped bordered hover >
                <thead>
                    <tr>
                    <th>Time and date</th>
                    <th>Task</th>
                    </tr>
                </thead>

                <tbody>

                {
                taskList.map((task, index) => {
                    return (
                        <tr key = {index}>
                            <td>{task.timestamp}</td>
                            <td>{task.data}</td>
                            <td><Button onClick={e => handleClick(index)}>X</Button></td>
                        </tr>
                    )
                })}

                </tbody>
            </Table>

            <ul className="task-list">
                
            </ul>
        </div>
    )
    }
    
}