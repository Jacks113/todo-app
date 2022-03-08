import { Table } from "react-bootstrap";

export default function ShowTasks(props){

    const {taskList} = props;
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