import React from 'react'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import TabPlato from '../../design.system/TabPlato'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import DashboardTasks from '../../components/Dashboard/DashboardTasks'
import DashboardEvents from '../../components/Dashboard/DashboardEvents'
import books from '../../books.json'
import DashboardBooks from '../../components/Dashboard/DashboardBooks'
import ColumnContainer from '../../design.system/ColumnContainer'


const Dashboard = () => {

  const types = ['Overview', 'Progress']

  const [active, setActive] = useState(types[0])

      // Some data mocking for rendering test

  const kanban = [
    { title: 'fazer html', status: 'doing', _id: '1' },
    { title: 'fazer css', status: 'doing', _id: '2' },
    { title: 'estudar matemática', status: 'done', _id: '3' },
    { title: 'doing1', status: 'done', _id: '4' },
    { title: 'doing2', status: 'done', _id: '5' },
    { title: 'doing3', status: 'done', _id: '6' },
    { title: 'doing3', status: 'done', _id: '7' },
    { title: 'done1', status: 'done', _id: '8' },
    { title: 'done2', status: 'done', _id: '9' },
  ]

  const events = [
    {
      title: "Este evento é em menos de 14 dias",
      date: new Date('2022-04-25T23:00:00.000+00:00'),
      description: "Este é um teste de descrição",
      is_past: true,
      id: "1"
    },
    {
      title: "Este evento também é em menos de 14 dias",
      date: new Date('2022-04-30T23:00:00.000+00:00'),
      description: "Este é um teste de descrição",
      is_past: true,
      id: "2"
    },
    {
      title: "Teste delete outro user",
      date: new Date('2022-05-02T23:00:00.000+00:00'),
      is_past: true,
      id: "3"
    }
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