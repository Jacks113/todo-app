import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { Button, FormGroup } from "react-bootstrap";

export default function AddTask(props){

    const [task, setTask] = useState("");
    const {addNewTask} = props;


    const sendTask = (e) => {
        e.preventDefault();
        if (task !== undefined && task !== null && task !== "") {
            addNewTask(task);
            setTask("");
        }
    }

    return (
        <Form className="task-input" onSubmit={sendTask}>
            <Form.Group  className="mb-3" controlId="formBasicPassword">
                <Form.Label>Enter a new task</Form.Label>
                <Form.Control type="text" placeholder="New Task..." onChange={(e) => setTask(e.target.value)} autoFocus={true} value={task}/>
            </Form.Group> 
                <Button type="submit">Add task</Button>
        </Form>
        )

        // <form onSubmit={sendTask} className="task-input">
        //     <input type="text" onChange={(e) => setTask(e.target.value)} autoFocus={true} value={task}/>
            
        // </form>)
}