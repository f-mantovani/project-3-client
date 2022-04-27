import React from 'react'
import CardPlato from '../../design.system/CardPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import { Body, Subtitle2 } from '../../design.system/text.styling/styles'
import EventCardDate from './EventCardDate'

const EventCard = ({event, done}) => {

  return (
    <CardPlato>

        <EventCardDate date={event.date}/>

        <ColumnContainer eventText>
            {done ? <Subtitle2 muted done>{event.title}</Subtitle2> : <Subtitle2>{event.title}</Subtitle2>}
            {done ? <Body muted done>{event.description}</Body> : <Body>{event.description}</Body> }
        </ColumnContainer>

        <ColumnContainer kebab='true'>
        <DotPlato />
        <DotPlato />
        <DotPlato />
      </ColumnContainer>
        
    </CardPlato>
  )
}

export default EventCard