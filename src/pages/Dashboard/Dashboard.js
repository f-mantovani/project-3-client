import { useEffect, useState } from 'react'
import Navbar from '../../components/Navbar'
import TabPlato from '../../design.system/TabPlato'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import DashboardTasks from '../../components/Dashboard/DashboardTasks'
import DashboardEvents from '../../components/Dashboard/DashboardEvents'
import DashboardBooks from '../../components/Dashboard/DashboardBooks'
import ColumnContainer from '../../design.system/ColumnContainer'
import userConnect from '../../utils/api.handlers/userConnect'


const Dashboard = () => {

  const types = ['Overview', 'Progress']

  const [active, setActive] = useState(types[0])

  // Some data mocking for rendering test

  const [kanban, setKanban] = useState([])
  const [events, setEvents] = useState([])
  const [books, setBooks] = useState([])

  
  
  useEffect(() => {
    const getUser = async () => {
      const user = await userConnect.getUser()
      setBooks(user.books)
      setEvents(user.events)
      setKanban(user.tasks)
    }
    getUser()
    
  }, [])

  return (
    <div>
      
      <PageHeaderPlato>
        <h1>Dashboard</h1>
        <Navbar/>
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
        </TabHeaderPlato>

        <LineBreak />    
        
        {active === types[0] && 

        <>
        <DashboardTasks kanban={kanban}/> 

        <DashboardEvents events={events}/>

        <DashboardBooks books={books}/>

        {/* Page Breather */}
        <ColumnContainer>
          <br/><br/><br/><br/>
        </ColumnContainer>
        
        </>
        }
    </div>
  )
}

export default Dashboard