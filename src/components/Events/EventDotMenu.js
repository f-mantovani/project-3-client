import React from 'react'
import MenuCard from '../../design.system/MenuCard'
import { Body } from '../../design.system/text.styling/styles'


const EventDotMenu = () => {

  return (
    <>
      <MenuCard>
        <Body>Edit Event</Body>
      </MenuCard>
      <MenuCard>
        <Body>View Details</Body>
      </MenuCard>
      <MenuCard>
        <Body destructive>Delete Event</Body>
      </MenuCard>
    </>
  )
}

export default EventDotMenu