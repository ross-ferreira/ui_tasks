import React, { useEffect, useState } from 'react';

import Header from './components/Header'

import Footer from './components/Footer';

import Task from './components/Task';

import Loading from './components/Loading'

import './App.css';

const App = () => {
  const [taskData, setTaskData] = useState(undefined);

  useEffect(() => {
    const data = require('./data.json');
    setTimeout(function () { setTaskData(data); }, 1500)
  }, []);

  const noCompTasks = taskData ? taskData.tasks.filter(item => {
    if (item.isComplete) {
      return item
    }
  }) : null

  return (
    <main>
      {taskData ?
        <>
          <Header taskData={taskData} noCompTasks={noCompTasks} />
          <Task taskData={taskData} />
          <Footer taskData={taskData} noCompTasks={noCompTasks} />
        </>
        : <Loading />}
    </main>

  );
}

export default App;
