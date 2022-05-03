import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import noTaskImg from '../../assets/noTasks3x.png'

const NoTasks = () => {
  return (
    <ColumnContainer mt3='true'>
      <img src={noTaskImg} alt='No Tasks added' className='empty-state'/>
      <ColumnContainer mt075>
        <h2>No tasks created yet!</h2>
        <h4>Create your first task above to see this list!</h4>
      </ColumnContainer>
    </ColumnContainer>
  )
}

export default NoTasks
