import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import noTaskImg from '../../assets/noTasks3x.png'
import EmptyState from '../../design.system/EmptyState'

const NoTasks = () => {
  return (
    <ColumnContainer mt3='true'>
      <EmptyState src={noTaskImg} alt='No Tasks added'/>
      <ColumnContainer mt075>
        <h2>No tasks created yet!</h2>
        <h4>Create your first task above to see this list!</h4>
      </ColumnContainer>
    </ColumnContainer>
  )
}

export default NoTasks
