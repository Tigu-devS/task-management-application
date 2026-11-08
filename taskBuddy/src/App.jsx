import React from 'react'
import TaskForm from './components/TaskForm'
import TaskList from './components/TaskList'
import ProgressTracker from './components/progressTracker'
import { useState } from 'react'
import { useEffect } from 'react'
import './style.css'

const App = () => {

  const [tasks,setTask]=useState([])

  useEffect(()=>{
    localStorage.setItem("tasks",JSON.stringify(tasks))
  });

  const addTask=(task)=>{
    setTask([...tasks,task])
  }
  
  const updateTask=(index,updatedTask)=>{
    setTask(tasks.map((task,i)=>
      i=== index? updatedTask: task
    ));

  };

  const deleteTask=(index)=>{
    setTask(tasks.filter((_,i) => i !=index))
  }

  const clearTasks=()=>{
    setTask([]);
  }

  return (
    <div className='App'>
      <header>
        <h1 className='title'>TaskBuddy</h1>
        <p className='tagline'>Your friendly task manager</p>
      </header>
      <TaskForm addTask={addTask}
      
      />
      <TaskList tasks={tasks}
      updateTask={updateTask}
      deleteTask={deleteTask}
      />
      <ProgressTracker tasks={tasks}/>

      {tasks.length>0 && (<button className='clear-btn' onClick={clearTasks}>Clear All Tasks</button>)}

      
    </div>
  )
}

export default App
