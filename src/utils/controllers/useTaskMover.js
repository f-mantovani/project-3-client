import tasksConnect from '../api.handlers/tasksConnect'
import useAsyncMutation from './useAsyncMutation'

const useTaskMover = () => {
  const moveToStatus = useAsyncMutation(tasksConnect.updateStatus, 'kanban')

  const moveTo = (status, position, id) => {
    if(position === 'first') {
      if (status === 'todo') {
        console.log('entrou no moveTo')
        const newStatus = {status: 'doing'}
        moveToStatus(id, newStatus)
      }
      const newStatus = {status: 'done'}
      moveToStatus(id, newStatus)
      }
    }
  return moveTo
}

export default useTaskMover