import { useState } from 'react'
import EventCard from '../../components/Events/EventCard'
import Navbar from '../../components/Navbar'
import ColumnContainer from '../../design.system/ColumnContainer'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import { Overline } from '../../design.system/text.styling/styles'
import events from '../../events.json'
import getPastAndUpcomingEvents from '../../utils/controllers/getPastEvents'
import addButton from '../../assets/button-add.png'


const Events = () => {

  const types = ['Upcoming', 'Previous']

  const [active, setActive] = useState(types[0])

  const sortedEvents = getPastAndUpcomingEvents(events)

  const { pastEvents, upcomingEvents } = sortedEvents

  console.log(pastEvents, upcomingEvents)

  

  return (
    <div>
    <PageHeaderPlato>
        <h1>Events</h1>
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
        </TabHeaderPlato>

        <LineBreak />  

        {active === types[0] && 
          
          upcomingEvents.map(event => <EventCard key={event.id} event={event}/>)

        }

        {active === types[1] && 
          pastEvents.map(event => <EventCard done key={event.id} event={event}/>)
}
      <ColumnContainer mt3>
        <Overline destructive> Delete all events </Overline>
      </ColumnContainer>

      <ColumnContainer addButton>
        <img src={addButton} alt="Add Button/"/>
      </ColumnContainer>
    </div>
  )
}

export default Events