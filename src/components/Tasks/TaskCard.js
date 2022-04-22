import React from 'react'
import CardPlato from '../../design.system/CardPlato'
import CustomCheckboxPlato from '../../design.system/CustomCheckboxPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import { Body } from '../../design.system/text.styling/styles'

const TaskCard = ({ title, status, index }) => {
  return (
    <CardPlato className='task-card'>
      <CustomCheckboxPlato checkable>
        <input type='checkbox' id={index} className='custom-checkbox' />
        <label
          htmlFor={index}
          className='task-label'
        >
          <Body done={status === 'done'}  muted={status === 'done'} >{title}</Body>
        </label>
      </CustomCheckboxPlato>
      <ColumnContainer kebab='true'>
        <DotPlato />
        <DotPlato />
        <DotPlato />
      </ColumnContainer>
    </CardPlato>
  )
}

export default TaskCard
