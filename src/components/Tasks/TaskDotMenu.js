import React from 'react'
import MenuCard from '../../design.system/MenuCard'
import { Body } from '../../design.system/text.styling/styles'

const TaskDotMenu = () => {
  return (
    <>
      <MenuCard>
        <Body>Edit</Body>
      </MenuCard>
      <MenuCard>
        <Body>Move to Doing</Body>
      </MenuCard>
      <MenuCard>
        <Body>Move to Done</Body>
      </MenuCard>
      <MenuCard>
        <Body destructive>Delete</Body>
      </MenuCard>
    </>
  )
}

export default TaskDotMenu
