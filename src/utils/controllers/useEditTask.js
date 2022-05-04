import { useState } from 'react'
import tasksConnect from '../api.handlers/tasksConnect'
import useAsyncMutation from './useAsyncMutation'

const useEditTask = (title, id) => {
  const [ newTask, setNewTask ] = useState(title)
  const editTask = useAsyncMutation(tasksConnect.updateTitle, 'kanban')

  const handleTaskInput = (e) => {
    setNewTask(e.target.value)
  }

  const editTitle = () => {
    editTask({ id , title: newTask })
  }
  return { newTask, handleTaskInput, editTitle }
}

export default useEditTask