import { useState } from 'react'
import useCollapseMenu from '../../utils/controllers/useCollapseMenu'
import CardPlato from '../../design.system/CardPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import { Body, Subtitle2 } from '../../design.system/text.styling/styles'
import EventCardDate from './EventCardDate'
import OutsideClicker from '../OutsideClicker'
import MenuCollapsable from '../MenuCollapsable'
import EventDotMenu from './EventDotMenu'
import ModalPlato from '../Modals/ModalPlato'
import EditEvent from './EditEvent'
import TextIcon from '../../design.system/TextIcon'
import locationIcon from '../../assets/locationVector.svg'
import locationIconMuted from '../../assets/locationVectorMuted.svg'

const EventCard = ({event, done}) => {

  const { isOpen, setIsOpen, handleCollapse } = useCollapseMenu()

  const [editModal, setEditModal] = useState(false)


  return (
    <CardPlato >

        <EventCardDate date={event.date}/>

        <ColumnContainer eventText>
            {done ? <Subtitle2 muted done>{event.title}</Subtitle2> : <Subtitle2>{event.title}</Subtitle2>}
            {done ? <Body muted done>{event.details}</Body> : <Body>{event.details}</Body> }
            {done ? 
            <div className='flex'>
              {event.local && <TextIcon background={locationIconMuted} muted />} <Body muted done>{event.local}</Body>      
            </div>
              : 
              <div className='flex'>
                {event.local && <TextIcon background={locationIcon} />}<Body>{event.local}</Body> 
              </div>
              }
        </ColumnContainer>

        <ColumnContainer kebab='true' onClick={() => handleCollapse()}>
        <DotPlato />
        <DotPlato />
        <DotPlato />
        <OutsideClicker isOpen={isOpen} setIsOpen={setIsOpen}>
            <MenuCollapsable>
              <EventDotMenu id={event._id} setEditModal={setEditModal}/>
            </MenuCollapsable>
          </OutsideClicker>
        </ColumnContainer>

        <ModalPlato toggled={!editModal}>  
          <EditEvent {...event} setEditModal={setEditModal} />
        </ModalPlato>
        
    </CardPlato>
  )
}

export default EventCard