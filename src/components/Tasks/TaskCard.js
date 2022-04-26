import React, { useState } from 'react'
import CardPlato from '../../design.system/CardPlato'
import CustomCheckboxPlato from '../../design.system/CustomCheckboxPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import { Body } from '../../design.system/text.styling/styles'
import OutsideClicker from '../OutsideClicker'

import MenuCollapsable from '../MenuCollapsable'
import TaskDotMenu from './TaskDotMenu'


const TaskCard = ({ title, status, index }) => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCollapse = () => {
    setIsOpen(!isOpen)
  }
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
        <ColumnContainer kebab='true' onClick={() => handleCollapse()}>
          <DotPlato />
          <DotPlato />
          <DotPlato />
          <OutsideClicker isOpen={isOpen} setIsOpen={setIsOpen}>
            <MenuCollapsable>
              <TaskDotMenu />
            </MenuCollapsable>
          </OutsideClicker>
        </ColumnContainer>
    </CardPlato>
  )
}

export default TaskCard
