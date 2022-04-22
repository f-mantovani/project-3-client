import React from 'react'
import CardPlato from '../../design.system/CardPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body, Subtitle2 } from '../../design.system/text.styling/styles'

const EventCard = ({event}) => {

  return (
    <CardPlato>

        <ColumnContainer alignFlexEnd>
            <Subtitle2>{event.title}</Subtitle2>
            <Body>{event.description}</Body>
        </ColumnContainer>
        
    </CardPlato>
  )
}

export default EventCard