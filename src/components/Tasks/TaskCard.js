import React from 'react'
import './TaskCard.css'
import CardPlato from '../../design.system/CardPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import RequiredPlato from '../../design.system/RequiredPlato'
import { Body } from '../../design.system/text.styling/styles'

const TaskCard = ({ title, status, index }) => {
  return (
    <CardPlato className='task-card'>
      <div className='checkbox-container'>
        <input type='checkbox' id={index} className='custom-checkbox' />
        <label
          htmlFor={index}
          className='task-label'
        >
          <Body done={status === 'done'}  muted={status === 'done'} >{title}</Body>
        </label>
      </div>
      <ColumnContainer kebab='true'>
        <RequiredPlato />
        <RequiredPlato />
        <RequiredPlato />
      </ColumnContainer>
    </CardPlato>
  )
}

export default TaskCard
