
import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ShowTasks from './Components/ShowTasks';


function App() {

  const [allTasks, setAllTasks] = useState([]);

  const addNewTask = (task) => {
    const tempDate = new Date();

    const timeStamp = tempDate.getDate() + "." + (tempDate.getMonth() + 1).toString() + "." + tempDate.getFullYear().toString() + "." + " " + tempDate.getHours().toString() +  ":" + tempDate.getMinutes().toString() + ":" + tempDate.getSeconds();
    
    setAllTasks(
      allTasks => [...allTasks, {
        timestamp:timeStamp,
        data: task
      }]
    )
    console.log(allTasks);
    
  }


  return (
    <div className="App">
      <header>
        <h1>Simple to-do web app</h1>
      </header>
      <AddTask addNewTask = {addNewTask}/>
      { allTasks.length > 0 ?  <ShowTasks taskList = {allTasks}/> : "" }
    </div>
  );
}

export default App;
