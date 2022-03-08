export default function ShowTasks(props){

    const {taskList} = props;
    return (
        <div className="tasks-container">
            <ul className="task-list">
                {
                taskList.map((task, index) => {
                    return (
                        <li key = {index}><span>{task.timestamp}</span> <span>  {task.data}</span></li>
                    )
                })}
            </ul>
        </div>
    )
}