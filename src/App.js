import { useState } from 'react';
import { Helmet, HelmetProvider } from 'react-helmet-async';

import './App.css';
import AddTask from './Components/AddTask';
import ShowTasks from './Components/ShowTasks';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const [allTasks, setAllTasks] = useState([]);

  const addNewTask = (task, complete) => {
    const tempDate = new Date();

    const time = tempDate.getHours().toString() +  `:` + ("0" + tempDate.getMinutes().toString()).slice(-2) + `:` + ("0" + tempDate.getSeconds()).slice(-2);
    const date = tempDate.getDate() + `.` + (tempDate.getMonth() + 1).toString() + `.` + tempDate.getFullYear().toString() + `.` + ` `;
    
    const timeStamp =  date + " " + time;

    const complete = complete;
    
    setAllTasks(
      allTasks => [...allTasks, {
        timestamp:timeStamp,
        data: task,
        completed: complete
      }]
    )
    
  }

  const removeTask = (index) => {
    // console.log("removing element with index: " + index);
    setAllTasks(prevState => {
      const allTasks = [...prevState];
      allTasks.splice(index, 1);
      return allTasks;
    });

    // console.log(allTasks);
  }



  return (
    <div className="App">

      <HelmetProvider>
        <Helmet>
          <title>Simple TO DO app</title>
        </Helmet>
        <header>
          <h1>Simple to-do web app</h1>
      </header>
      </HelmetProvider>

      
      <AddTask addNewTask = {addNewTask}/>
      { allTasks.length > 0 ?  <ShowTasks removeTask = {removeTask} taskList = {allTasks} /> : "" }
    </div>
  );
}

export default App;
