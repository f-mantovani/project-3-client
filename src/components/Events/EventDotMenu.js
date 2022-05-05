import React from 'react'
import MenuCard from '../../design.system/MenuCard'
import { Body } from '../../design.system/text.styling/styles'
import useAsyncMutation from '../../utils/controllers/useAsyncMutation'
import eventsConnect from '../../utils/api.handlers/eventsConnect'


const EventDotMenu = ({ id, setEditModal }) => {
  const deleteEvent = useAsyncMutation(eventsConnect.deleteEvent, 'events')

  return (
    <>
      <MenuCard>
        <Body onClick={() => setEditModal(true)}>Edit Event</Body>
      </MenuCard>
      <MenuCard>
        <Body>View Details</Body>
      </MenuCard>
      <MenuCard>
        <Body destructive onClick={() => deleteEvent(id)}>Delete Event</Body>
      </MenuCard>
    </>
  )
}

export default EventDotMenu