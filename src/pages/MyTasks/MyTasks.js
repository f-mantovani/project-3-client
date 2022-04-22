import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import NoTasks from '../../components/Tasks/NoTasks'
import TaskGroup from '../../components/Tasks/TaskGroup'
import CardPlato from '../../design.system/CardPlato'
import LineBreakPlato from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'

const types = ['To Do', 'Doing', 'Done']

// Some data mocking for rendering test

const kanban = [
  { title: 'fazer html', status: 'todo', _id: '1' },
  { title: 'fazer css', status: 'todo', _id: '2' },
  { title: 'fazer css', status: 'todo', _id: '3' },
  { title: 'fazer css', status: 'todo', _id: '4' },
  { title: 'fazer css', status: 'todo', _id: '5' },
  { title: 'fazer css', status: 'todo', _id: '6' },
  { title: 'fazer css', status: 'todo', _id: '7' },
  { title: 'fazer css', status: 'todo', _id: '8' },
  { title: 'doing1', status: 'doing', _id: '9' },
  { title: 'doing2', status: 'doing', _id: '10' },
  { title: 'doing3', status: 'doing', _id: '11' },
  { title: 'doing3', status: 'doing', _id: '12' },
  { title: 'done1', status: 'done', _id: '13' },
  { title: 'done2', status: 'done', _id: '14' },
]

// const kanban = [] 

const MyTasks = () => {
  const [active, setActive] = useState(types[0])

  return (
    <div>
      <PageHeaderPlato>
        <Navbar />
        <h1>Tasks</h1>
      </PageHeaderPlato>
      <TabHeaderPlato>
        <div className='tabs'>
          {types.map((type) => (
            <TabPlato
              key={type}
              active={active === type && 'active'}
              onClick={() => setActive(type)}
            >
              <p className='label'>{type}</p>
            </TabPlato>
          ))}
        </div>
        <LineBreakPlato />
      </TabHeaderPlato>
      {active === types[0] && (
        <TaskGroup kanban={kanban} name='todo'>
          To Do
        </TaskGroup>
      )}
      {(!kanban.length || active === types[0]) && (
        <CardPlato muted>
          <input
            type='checkbox'
            id='add-new-task'
            className='custom-checkbox'
          />
          <label htmlFor='add-new-task' className='task-label body'>
            Add new task...
          </label>
        </CardPlato>
      )}
      {!kanban.length && <NoTasks />}

      {active === types[1] && (
        <TaskGroup kanban={kanban} name='doing'>
          Doing
        </TaskGroup>
      )}
      {active === types[2] && (
        <TaskGroup kanban={kanban} name='done'>
          Done
        </TaskGroup>
      )}
    </div>
  )
}

export default MyTasks
