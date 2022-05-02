import React from 'react'
import MenuCard from '../../design.system/MenuCard'
import { Body } from '../../design.system/text.styling/styles'
import tasksConnect from '../../utils/api.handlers/tasksConnect'
import useAsyncMutation from '../../utils/controllers/useAsyncMutation'
import useTaskMover from '../../utils/controllers/useTaskMover'

const TaskDotMenu = ({ id, status }) => {
  const deleteTask = useAsyncMutation(tasksConnect.deleteTask, 'kanban')
  const move = useTaskMover()

  return (
    <>
      <MenuCard>
        <Body>Edit</Body>
      </MenuCard>
      <MenuCard>
        <Body onClick={() => move(status, 'first', id)}>{status === 'todo' ? 'Move to Doing' : 'Move to To Do'}</Body>
      </MenuCard>
      <MenuCard>
        <Body onClick={() => move(status, 'second', id)}>{status === 'done' ? 'Move to Doing' : 'Move to Done'}</Body>
      </MenuCard>
      <MenuCard>
        <Body destructive onClick={() => deleteTask(id)}>Delete</Body>
      </MenuCard>
    </>
  )
}

export default TaskDotMenu
