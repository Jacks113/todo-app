
import { useState } from 'react';
import './App.css';
import AddTask from './Components/AddTask';
import ShowTasks from './Components/ShowTasks';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [allTasks, setAllTasks] = useState([]);

  const addNewTask = (task) => {
    const tempDate = new Date();

    const time = tempDate.getHours().toString() +  `:` + tempDate.getMinutes().toString() + `:` + tempDate.getSeconds();
    const date = tempDate.getDate() + `.` + (tempDate.getMonth() + 1).toString() + `.` + tempDate.getFullYear().toString() + `.` + ` `;
    
    const timeStamp = time + date;
    
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
