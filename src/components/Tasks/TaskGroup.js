import TaskCard from './TaskCard'

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
                id={element._id}
              />
            ))}
        </div>
      </div>
    </>
  )
}

export default TaskGroup
