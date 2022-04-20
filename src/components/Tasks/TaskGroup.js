import TaskCard from './TaskCard'
import './TaskGroup.css'

const TaskGroup = ({ children, kanban, name }) => {

  return (
    <>
      <div className='task-group-container'>
        <div
          className='task-card-grouping'
        >
          {kanban
            .filter((todo) => todo.status === name)
            .map((element) => (
              <TaskCard
                key={element._id}
                title={element.title}
                status={element.status}
                index={element._id}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default TaskGroup
