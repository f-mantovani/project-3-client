import { useState } from 'react'
import Navbar from '../../components/Navbar'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'

const Events = () => {

  const types = ['Upcoming', 'Previous']

  const [active, setActive] = useState(types[0])


  return (
    <div>
    <Navbar/>
    <PageHeaderPlato>
        <Navbar/>
        <h1>Events</h1>
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

        <p>Upcoming</p>}

        {active === types[1] && 

        <p>Previous</p>}
    </div>
  )
}

export default Events