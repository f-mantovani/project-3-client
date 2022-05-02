import tasksConnect from '../api.handlers/tasksConnect'
import useAsyncMutation from './useAsyncMutation'

const useTaskMover = () => {
  const moveToStatus = useAsyncMutation(tasksConnect.updateStatus, 'kanban')

  const moveTo = (status, position, id) => {
    if (position === 'first') {
      if (status === 'todo') {
        const payload = {
          id,
          status: 'doing',
        }
        moveToStatus(payload)
      } else {
        const payload = {
          id,
          status: 'todo',
        }
        console.log('entrou no moveTo')
        moveToStatus(payload)
        console.log('passou pelo moveto')
      }
    }

    if (position === 'second') {
      if (status === 'done') {
        const payload = {
          id,
          status: 'doing',
        }
        moveToStatus(payload)
      } else {
        const payload = {
          id,
          status: 'done',
        }
        console.log('entrou no moveTo')
        moveToStatus(payload)
        console.log('passou pelo moveto')
      }
    }
  }
  return moveTo
}

export default useTaskMover
