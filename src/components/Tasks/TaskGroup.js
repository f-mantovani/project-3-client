import React, { useState } from 'react'
import TaskCard from './TaskCard'
import './TaskGroup.css'

const TaskGroup = ({ children }) => {


  return (
    <>
      <div className='task-group-container'>
        <h3>Eu sou um {children} GROUP</h3>
        <div className={`task-card-grouping ${(children) ? "open-card" : "closed-card" }`}>
          <TaskCard />
          <TaskCard />
          <TaskCard />
          <TaskCard />
        </div>
      </div>
    </>
  )
}

export default TaskGroup
