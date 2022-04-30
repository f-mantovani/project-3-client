import { useState } from 'react'
import tasksConnect from '../api.handlers/tasksConnect'
import useAsyncMutation from './useAsyncMutation'

const useTaskForm = () => {
  const [ newTask, setNewTask ] = useState('')
  const createTask = useAsyncMutation(tasksConnect.createTask, 'kanban')

  const handleTaskInput = (e) => {
    setNewTask(e.target.value)
  }

  const saveNewTask = () => {
    createTask({ title: newTask })
    setNewTask('')
  }
  return { newTask, handleTaskInput, saveNewTask }
}

export default useTaskForm