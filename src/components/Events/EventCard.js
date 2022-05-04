import React from 'react'
import useCollapseMenu from '../../utils/controllers/useCollapseMenu'
import CardPlato from '../../design.system/CardPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import { Body, Subtitle2 } from '../../design.system/text.styling/styles'
import EventCardDate from './EventCardDate'
import OutsideClicker from '../OutsideClicker'
import MenuCollapsable from '../MenuCollapsable'
import EventDotMenu from './EventDotMenu'

const EventCard = ({event, done}) => {

  const { isOpen, setIsOpen, handleCollapse } = useCollapseMenu()


  return (
    <CardPlato>

        <EventCardDate date={event.date}/>

        <ColumnContainer eventText>
            {done ? <Subtitle2 muted done>{event.title}</Subtitle2> : <Subtitle2>{event.title}</Subtitle2>}
            {done ? <Body muted done>{event.description}</Body> : <Body>{event.description}</Body> }
        </ColumnContainer>

        <ColumnContainer kebab='true' onClick={() => handleCollapse()}>
        <DotPlato />
        <DotPlato />
        <DotPlato />
        <OutsideClicker isOpen={isOpen} setIsOpen={setIsOpen}>
            <MenuCollapsable>
              <EventDotMenu/>
            </MenuCollapsable>
          </OutsideClicker>
        </ColumnContainer>
        
    </CardPlato>
  )
}

export default EventCard