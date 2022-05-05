import React from 'react'
import noEventsImg from '../../assets/noEvents3x.png'
import ColumnContainer from '../../design.system/ColumnContainer'
import EmptyState from '../../design.system/EmptyState'
import { Body, H4 } from '../../design.system/text.styling/styles'

const NoEventsCard = ({eventType}) => {
  return (
    <ColumnContainer noEvents>
      <EmptyState src={noEventsImg} alt="No Events to display"/>
      <H4>No {eventType} events to display</H4>
      {eventType === "upcoming"
      ?
      <ColumnContainer>
        <Body>Check your Previous events tab or </Body>
        <Body>create a new event!</Body>
      </ColumnContainer>
      :

      null
        
      }
    </ColumnContainer>
  )
}

export default NoEventsCard