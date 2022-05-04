import { useState } from 'react'
import Navbar from '../../components/Navbar'
import NoTasks from '../../components/Tasks/NoTasks'
import TaskGroup from '../../components/Tasks/TaskGroup'
import LineBreakPlato from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import tasksConnect from '../../utils/api.handlers/tasksConnect'
import { useQuery } from "react-query";

const types = ['To Do', 'Doing', 'Done']

const MyTasks = () => {
  
  const [active, setActive] = useState(types[0])
  const { isLoading, error, data: kanban } = useQuery('kanban', tasksConnect.getAllTasks)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;

  return (
    <div>
      <PageHeaderPlato>
        <h1>Tasks</h1>
        <Navbar />
      </PageHeaderPlato>

      <TabHeaderPlato>
        <div className='tabs'>
          {types.map((type) => (
            <TabPlato
              key={type}
              active={active === type && 'active'}
              onClick={() => setActive(type)}
            >
              <p className='label'>{type}</p>
            </TabPlato>
          ))}
        </div>
        <LineBreakPlato />
      </TabHeaderPlato>

      {active === types[0] && (
        <TaskGroup kanban={kanban} name='todo'>
          To Do
        </TaskGroup>
      )}

      {active === types[1] && (
        <TaskGroup kanban={kanban} name='doing'>
          Doing
        </TaskGroup>
      )}

      {active === types[2] && (
        <TaskGroup kanban={kanban} name='done'>
          Done
        </TaskGroup>
      )}

      {!kanban.length ? <NoTasks /> : null }

    </div>
  )
}

export default MyTasks
