import React from 'react'
import CardPlato from '../../design.system/CardPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import RequiredPlato from '../../design.system/RequiredPlato'
import { Body, Subtitle2 } from '../../design.system/text.styling/styles'
import EventCardDate from './EventCardDate'

const EventCard = ({event}) => {

  return (
    <CardPlato>

        <EventCardDate date={event.date}/>

        <ColumnContainer eventText>
            <Subtitle2>{event.title}</Subtitle2>
            <Body>{event.description}</Body>
        </ColumnContainer>

        <ColumnContainer kebab='true'>
        <RequiredPlato />
        <RequiredPlato />
        <RequiredPlato />
      </ColumnContainer>
        
    </CardPlato>
  )
}

export default EventCard