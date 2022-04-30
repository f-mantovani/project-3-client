import React, { useState } from 'react'
import CardPlato from '../../design.system/CardPlato'
import CustomCheckboxPlato from '../../design.system/CustomCheckboxPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import { Body } from '../../design.system/text.styling/styles'
import OutsideClicker from '../OutsideClicker'
import MenuCollapsable from '../MenuCollapsable'
import TaskDotMenu from './TaskDotMenu'
import useCollapseMenu from '../../utils/controllers/useCollapseMenu'


const TaskCard = ({ title, status, id }) => {
  const { isOpen, setIsOpen, handleCollapse } = useCollapseMenu()
  
  return (
    <CardPlato className='task-card'>
      <CustomCheckboxPlato checkable>
        <input type='checkbox' id={id} className='custom-checkbox' />
        <label
          htmlFor={id}
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
              <TaskDotMenu id={id}/>
            </MenuCollapsable>
          </OutsideClicker>
        </ColumnContainer>
    </CardPlato>
  )
}

export default TaskCard
