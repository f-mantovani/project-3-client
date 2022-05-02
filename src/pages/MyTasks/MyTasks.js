import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import NoTasks from '../../components/Tasks/NoTasks'
import TaskGroup from '../../components/Tasks/TaskGroup'
import CardPlato from '../../design.system/CardPlato'
import CheckPlato from '../../design.system/CheckPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import CustomCheckboxPlato from '../../design.system/CustomCheckboxPlato'
import LineBreakPlato from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import { Overline } from '../../design.system/text.styling/styles'
import tasksConnect from '../../utils/api.handlers/tasksConnect'
import useTaskForm from '../../utils/controllers/useTaskForm'
import { useQuery } from "react-query";


const types = ['To Do', 'Doing', 'Done']

const MyTasks = () => {
  
  const [active, setActive] = useState(types[0])
  const { newTask, handleTaskInput, saveNewTask } = useTaskForm()
  const { isLoading, error, data: kanban } = useQuery('kanban', tasksConnect.getAllTasks)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;
 
  return (
    <div>
      <PageHeaderPlato>
        <h1>Tasks</h1>
        <Navbar />
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
          <CustomCheckboxPlato>
            <input
              type='checkbox'
              id='add-new-task'
              className='custom-checkbox'
            />
            <input
              type='text'
              className='task-add body'
              placeholder='Add new task...'
              value={newTask}
              onChange={(e) => handleTaskInput(e)}
            />
            <label htmlFor='add-new-task' className='task-label'></label>
          </CustomCheckboxPlato>
          {newTask.length ? <CheckPlato onClick={() => saveNewTask()}></CheckPlato> : null} 
        </CardPlato>
      )}
      {!kanban.length && <NoTasks /> }

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
      <ColumnContainer mt3>
        <Overline destructive> Delete all tasks from this list </Overline>
      </ColumnContainer>
    </div>
  )
}

export default MyTasks
