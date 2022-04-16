import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import TaskGroup from '../../components/Tasks/TaskGroup'

const types = [ "To Do", "Doing", "Done"]
const MyTasks = () => {

const [active, setActive] = useState(types[1])

  return (
    <div>
      <Navbar/>
      <div className='tabs'>
        {types.map(type => (
          <div
          key={type}
          className={active === type && 'active'}
          onClick={() => setActive(type)}>
            {type}
          </div>
        ))}
      </div>
      {active === types[0] && <TaskGroup>To Do</TaskGroup>}
      {active === types[1] && <TaskGroup>Doing</TaskGroup>}
      {active === types[2] && <TaskGroup>Done</TaskGroup>}  
    </div>
  )
}

export default MyTasks