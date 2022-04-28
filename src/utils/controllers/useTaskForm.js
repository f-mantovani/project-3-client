import { useState } from 'react'

const useTaskForm = () => {
  const [ newTask, setNewTask ] = useState('')

  const handleTaskInput = (e) => {
    setNewTask(e.target.value)
  }

  const saveNewTask = () => {
    // Here goes api call
    console.log(newTask)
    setNewTask('')
  }
  return { newTask, handleTaskInput, saveNewTask }
}

export default useTaskForm