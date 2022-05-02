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
        moveToStatus(payload)
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
        moveToStatus(payload)
      }
    }
  }

  const clickMover = (status, id) => {
    if (status !== 'done') {
      const payload = {
        id,
        status: 'done',
      }
      moveToStatus(payload)
    } else {
      const payload = {
        id,
        status: 'todo',
      }
      moveToStatus(payload)
    }
  }
  return { moveTo, clickMover }
}

export default useTaskMover
