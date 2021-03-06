import React from "react";
import { Table } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Form } from "react-bootstrap";

export default class ShowTasks extends React.Component{

    render(){
        const {taskList, removeTask} = this.props;
        

        const handleClick = (index) => {
            // alert("Clicked element on position: " + JSON.stringify(index));
            removeTask(JSON.stringify(index));
        }

        const handleCheck = (e) => {
            console.log(e.target.checked);
        }

    return (
        <div className="tasks-container">

            <Table hover>
                <thead color="blue">
                    <tr>
                    <th>Date and time</th>
                    <th>Task</th>
                    <th></th>
                    <th></th>
                    </tr>
                </thead>

                <tbody>

                {
                taskList.map((task, index) => {
                    return (
                        <tr key = {index}>
                            <td>{task.timestamp}</td>
                            <td>{task.data}</td>
                            <td><Button variant="danger" onClick={e => handleClick(index)}>X</Button></td>
                            <td>
                                <Form>
                                    <Form.Check onChange={handleCheck}
                                        type="switch"
                                    />
                                </Form>
                            </td>
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