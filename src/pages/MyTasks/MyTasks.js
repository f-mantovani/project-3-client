import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import TaskGroup from '../../components/Tasks/TaskGroup'
import TabPlato from '../../design.system/TabPlato'

const types = [ "To Do", "Doing", "Done"]

// Some data mocking for rendering test

// const kanban = [
//   {title: "fazer html", status:"todo", _id:"1" },
//   {title: "fazer css", status:"todo", _id:"2"},
//   {title: "fazer css", status:"todo", _id:"3"},
//   {title: "fazer css", status:"todo", _id:"4"},
//   {title: "fazer css", status:"todo", _id:"5"},
//   {title: "fazer css", status:"todo", _id:"6"},
//   {title: "fazer css", status:"todo", _id:"7"},
//   {title: "fazer css", status:"todo", _id:"8"},
//   {title: "doing1", status:"doing", _id:"9"},
//   {title: "doing2", status:"doing", _id:"10"},
//   {title: "doing3", status:"doing", _id:"11"},
//   {title: "doing3", status:"doing", _id:"12"},
//   {title: "done1", status:"done", _id:"13"},
//   {title: "done2", status:"done", _id:"14"},
// ]

const kanban = []

const MyTasks = () => {

const [active, setActive] = useState(types[0])

  return (
    <div>
      <Navbar/>
      <div className='tabs'>
        {types.map(type => (
          <TabPlato
          key={type}
          className={active === type && 'active'}
          onClick={() => setActive(type)}>
            {type}
          </TabPlato>
        ))}
      </div>
      {active === types[0] && <TaskGroup kanban={kanban} name='todo'>To Do</TaskGroup>}
      {active === types[1] && <TaskGroup kanban={kanban} name='doing'>Doing</TaskGroup>}
      {active === types[2] && <TaskGroup kanban={kanban} name='done'>Done</TaskGroup>}  
    </div>
  )
}

export default MyTasks