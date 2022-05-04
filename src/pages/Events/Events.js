import { useState } from 'react'
import EventCard from '../../components/Events/EventCard'
import Navbar from '../../components/Navbar'
import ColumnContainer from '../../design.system/ColumnContainer'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import { Body, ButtonLabel, Overline } from '../../design.system/text.styling/styles'
import events from '../../events.json'
import getPastAndUpcomingEvents from '../../utils/controllers/getPastEvents'
import addButton from '../../assets/button-add.png'
import InputPlato from '../../design.system/InputPlato'
import ModalPlato from '../../components/Modals/ModalPlato'
import ModalHeader from '../../components/Modals/ModalHeader'
import ModalInput from '../../components/Modals/ModalInput'
import ButtonPlato from '../../design.system/ButtonPlato'
import RowContainer from '../../design.system/RowContainer'


const Events = () => {

  const types = ['Upcoming', 'Previous']

  const [active, setActive] = useState(types[0])

  const [addModal, setAddModal] = useState(false)

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

        <ColumnContainer eventList>

        {active === types[0] && 
          
          upcomingEvents.map(event => <EventCard key={event.id} event={event}/>)

        }

        {active === types[1] && 
          pastEvents.map(event => <EventCard done key={event.id} event={event}/>)
}

      </ColumnContainer>
      <ColumnContainer mt150>
        <Overline destructive> Delete all events </Overline>
      </ColumnContainer>

      

      
      <ModalPlato toggled={!addModal}> 
          <ModalHeader title="Create new event" action={() => setAddModal(false)}/>

          <InputPlato addModalTitle
            placeholder="Type event title...">

          </InputPlato>

          <ModalInput label="Date" type="date"></ModalInput>
          <ModalInput label="Hour" type="time" placeholder="00:00 pm"></ModalInput>
          <ModalInput label="Local" type="text" placeholder="Address or URL"></ModalInput>
          <ModalInput label="Details" type="text" placeholder="Details about the event..."></ModalInput>  

          <RowContainer modalButtons>
            <ButtonPlato saveModal><ButtonLabel>Save Event</ButtonLabel></ButtonPlato>
            <ButtonPlato cancelModal><ButtonLabel>Cancel</ButtonLabel></ButtonPlato> 
          </RowContainer> 
        
      </ModalPlato>
      
      
      <ColumnContainer addButton>
        <img 
          src={addButton} 
          alt="Add Button/"
          onClick={() => setAddModal(true)}
          style={{cursor: "pointer"}}
          />
      </ColumnContainer>
      

      
    </div>
  )
}

export default Events