
import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ShowTasks from './Components/ShowTasks';


function App() {

  const [tasks, setTasks] = useState([]);

  const addNewTask = (task) => {
    const tempDate = new Date();

    const timeStamp = tempDate.getDate() + "." + (tempDate.getMonth() + 1).toString() + "." + tempDate.getFullYear().toString() + "." + " " + tempDate.getHours().toString() +  ":" + tempDate.getMinutes().toString() + ":" + tempDate.getSeconds();
    
    setTasks(
      tasks => [...tasks, {
        timestamp:timeStamp,
        data: task
      }]
    )
    console.log(tasks);
    
  }


  return (
    <div className="App">
      <header>
        <h1>Simple to-do web app</h1>
      </header>
      <AddTask addNewTask = {addNewTask}/>
      {/* <ShowTasks/> */}
    </div>
  );
}

export default App;
