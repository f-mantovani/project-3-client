import React from 'react'
import Navbar from '../../components/Navbar'
import { useState } from 'react'
import TabPlato from '../../design.system/TabPlato'
import LineBreak from '../../design.system/LineBreakePlato'

const Dashboard = () => {

  const types = ['Overview', 'Progress']

  const [active, setActive] = useState(types[0])


  return (
    <div>
      <div className="page-header">
        <Navbar/>
        <h1>Dashboard</h1>
      </div>
      <div className='tab-header'>
        <div className='tabs'>
          {types.map((type) => (
            <TabPlato
              key={type}
              className={active === type && 'active'}
              onClick={() => setActive(type)}
            >
              <p className='label'>{type}</p>
            </TabPlato>
          ))}

          
        </div>
        <LineBreak />
        </div>


        
    </div>
  )
}

export default Dashboard