import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'

const NoTasks = () => {
  return (
    <ColumnContainer mt3='true'>
      <div
        style={{ backgroundColor: 'grey', width: '160px', height: '160px' }}
      ></div>
      <ColumnContainer mt075>
        <h2>No tasks created yet!</h2>
        <h4>Create your first task above to see this list!</h4>
      </ColumnContainer>
    </ColumnContainer>
  )
}

export default NoTasks
