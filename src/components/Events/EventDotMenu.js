import React from 'react'
import MenuCard from '../../design.system/MenuCard'
import { Body } from '../../design.system/text.styling/styles'


const EventDotMenu = ({ id, setEditModal }) => {

  return (
    <>
      <MenuCard>
        <Body onClick={() => setEditModal(true)}>Edit Event</Body>
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