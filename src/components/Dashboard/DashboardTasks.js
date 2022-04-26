import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import TaskGroup from '../Tasks/TaskGroup'
import checkTasksInDoing from '../../utils/controllers/checkTasksInDoing'
import { Body, Label } from '../../design.system/text.styling/styles'



const DashboardTasks = ({kanban}) => {

    const renderingCondition = checkTasksInDoing(kanban)

  return (
    <>

    <div>
    <ColumnContainer rowSpaceBetween>
        <h2>Tasks in "Doing"</h2>
        {renderingCondition && 
        <NavLinkPlato to="/mytasks"><Label smalllink>View All</Label></NavLinkPlato>
        }
    </ColumnContainer>
    </div>

    {renderingCondition
    ? 

    <TaskGroup kanban={kanban} name='doing'> </TaskGroup>

    :

    <ColumnContainer startSpaceBetween>
        <Body>No tasks created in this list yet...</Body>
        <NavLinkPlato to="/mytasks"><Label smalllink>View To Do List</Label></NavLinkPlato>
    </ColumnContainer>}

    </>
    
  )
}

export default DashboardTasks