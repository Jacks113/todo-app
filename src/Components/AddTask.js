import { useState } from "react"

export default function AddTask(props){

    const [task, setTask] = useState("");
    const {addNewTask} = props;

    const updateInput = e => {
        setTask(e.target.value);

    }

    const sendTask = (e) => {
        e.preventDefault();
        if (task !== undefined && task !== null && task !== "") {
            addNewTask(task);
            setTask("");
        }
    }

    return (
        <form onSubmit={sendTask} className="task-input">
            <input type="text" onChange={(e) => setTask(e.target.value)} autoFocus={true} value={task}/>
            <button type="submit">Add task.</button>
        </form>)
}