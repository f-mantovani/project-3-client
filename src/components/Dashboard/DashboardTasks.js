import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import TaskGroup from '../Tasks/TaskGroup'


const DashboardTasks = ({kanban}) => {


  return (
    <div>
        <ColumnContainer rowSpaceBetween>
            <h2>Tasks in "Doing"</h2>
            <NavLinkPlato to="/mytasks" signup="true">View All</NavLinkPlato>
        </ColumnContainer>

        <TaskGroup kanban={kanban} name='todo'> </TaskGroup>
    </div>
  )
}

export default DashboardTasks