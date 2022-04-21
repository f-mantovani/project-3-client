import React from 'react'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import TabPlato from '../../design.system/TabPlato'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'

const Dashboard = () => {

  const types = ['Overview', 'Progress']

  const [active, setActive] = useState(types[0])


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
    </div>
  )
}

export default Dashboard