
import { useState } from 'react'
import { useEffect } from 'react';

export default function TaskForm  ({addTask}) {
  const[task,setTask]=useState('')
  const[priority,setPriority]=useState("Medium")
  const[category,setCategory]=useState("General")

  // useEffect(()=>{
  //     console.log("Component mounted!");
  //   }); 

  const handleSubmit=(e)=>{
    e.preventDefault();
    addTask({text:task,priority,category,completed:false})

  //Reset State
  setTask('')
  setPriority("Medium")
  setCategory("General")


  }
  return (
    <form className='task-form' onSubmit={handleSubmit}>
      <div id="inp">
        <input
        type="text"
        value={task}
        placeholder='enter your task'
        onChange={(e)=>setTask(e.target.value)}
        />
        <span><button type="submit">Add task</button></span>
        <p>{task}</p>
      </div>

      <div id="btns">
        <select value={priority} onChange={(e)=>setPriority(e.target.value)}>
          <option value="high">High</option>
          <option value="medium">medium</option>
          <option value="low">low</option>
        </select>

        <select value={category} onChange={(e)=>setCategory(e.target.value)}>
          <option value="general">General</option>
          <option value="work">Work</option>
          <option value="casual">Casual</option>
        </select>

      </div>
      <div id="btns">
        
      </div>
    </form>
  )
}


