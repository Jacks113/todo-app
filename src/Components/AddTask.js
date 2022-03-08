import { useState } from "react"

export default function AddTask(props){

    const {addNewTask} = props;
    return (
        <form className="task-input">
            <input type="text" autoFocus={true} />
            <button type="submit">Add task.</button>
        </form>)
}