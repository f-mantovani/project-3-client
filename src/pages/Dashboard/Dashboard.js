import React from 'react'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import TabPlato from '../../design.system/TabPlato'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import DashboardTasks from '../../components/Dashboard/DashboardTasks'

const Dashboard = () => {

  const types = ['Overview', 'Progress']

  const [active, setActive] = useState(types[0])

      // Some data mocking for rendering test

  const kanban = [
    { title: 'fazer html', status: 'done', _id: '1' },
    { title: 'fazer css', status: 'done', _id: '2' },
    { title: 'estudar matemática', status: 'done', _id: '3' },
    { title: 'doing1', status: 'done', _id: '4' },
    { title: 'doing2', status: 'done', _id: '5' },
    { title: 'doing3', status: 'done', _id: '6' },
    { title: 'doing3', status: 'done', _id: '7' },
    { title: 'done1', status: 'done', _id: '8' },
    { title: 'done2', status: 'done', _id: '9' },
  ]


  return (
    <div>
      
      <PageHeaderPlato>
        <Navbar/>
        <h1>Dashboard</h1>
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
        
        <DashboardTasks kanban={kanban}/> 

        
        
        
        }
    </div>
  )
}

export default Dashboard