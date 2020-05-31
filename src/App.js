import React, { useEffect,useState } from 'react';
import './App.css';
import Header from './components/Header'
import Footer from './components/Footer';
import Task from './components/Task';
import Loading from './components/Loading'



const App =() => {
  const [taskData, setTaskData] = useState(undefined);

  useEffect(() => {
    const data = require('./data.json');
    setTimeout(function() { setTaskData(data); }, 1000)
  },[]);

  return (
    <main>
    {taskData ? 
      <>
        <Header taskData={taskData}/>
        <Task taskData={taskData}/>
        <Footer taskData={taskData}/>
      </>
    :<Loading/>}
    </main>

  );
}

export default App;
