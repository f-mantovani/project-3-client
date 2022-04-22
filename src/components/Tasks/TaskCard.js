import React from 'react'
import CardPlato from '../../design.system/CardPlato'
import CustomCheckboxPlato from '../../design.system/CustomCheckboxPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import RequiredPlato from '../../design.system/RequiredPlato'
import { Body } from '../../design.system/text.styling/styles'

const TaskCard = ({ title, status, index }) => {
  return (
    <CardPlato className='task-card'>
      <CustomCheckboxPlato>
        <input type='checkbox' id={index} className='custom-checkbox' />
        <label
          htmlFor={index}
          className='task-label'
        >
          <Body done={status === 'done'}  muted={status === 'done'} >{title}</Body>
        </label>
      </CustomCheckboxPlato>
      <ColumnContainer kebab='true'>
        <RequiredPlato />
        <RequiredPlato />
        <RequiredPlato />
      </ColumnContainer>
    </CardPlato>
  )
}

export default TaskCard
