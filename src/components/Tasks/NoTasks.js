import React from 'react'
import NoTask from '../../design.system/NoTask'

const NoTasks = () => {
  return (
    <NoTask mt3='true'>
      <div
        style={{ backgroundColor: 'white', width: '160px', height: '160px' }}
      ></div>
      <NoTask mt075>
        <h2>No tasks created yet!</h2>
        <h4>Create your first task above to see this list!</h4>
      </NoTask>
    </NoTask>
  )
}

export default NoTasks
