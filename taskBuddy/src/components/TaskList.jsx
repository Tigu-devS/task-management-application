import React from 'react'


const TaskList = ({tasks,updateTask,deleteTask}) => {
  console.log(updateTask)
  const toggleComplete=(index)=>{
    const updatedTask={...tasks[index],completed: !tasks[index].completed};
    updateTask(index,updatedTask);
  }

  return (
    <ul className='TaskList'>
      {tasks.map((task,index)=>(
        <li key={index}>
          <div>
            <span>{task.text}</span>
            <small>({tasks.priority},{task.category})</small>
          </div>

          <div>
            <button onClick={()=>toggleComplete(index)}>
              {task.completed ? "Undo": "completed"}
            </button>
            <button onClick={()=>deleteTask(index)}>Delete</button>
          </div>
          
        </li>
      ))}
    </ul>
  )
}

export default TaskList
