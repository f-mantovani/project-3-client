import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import { Body, Label } from '../../design.system/text.styling/styles'
import getUpcomingEvents from '../../utils/controllers/getUpcomingEvents'
import EventCard from '../Events/EventCard'

const DashboardEvents = ({ events }) => {

  const upcomingEvents = getUpcomingEvents(events)

  return (
    <>
        <div>
    <ColumnContainer rowSpaceBetween>
        <h2>Upcoming Events</h2>
        {upcomingEvents.length > 0 && <NavLinkPlato to="/private/events"><Label smalllink>View All</Label></NavLinkPlato>}
    </ColumnContainer>
    </div>

    {upcomingEvents.length > 0

    ? upcomingEvents.map(event => <EventCard key={event._id} event={event}/>)

    : <ColumnContainer startSpaceBetween>
        <Body>No events in the next 14 days...</Body>
        <NavLinkPlato to="/private/events"><Label smalllink>View Events List</Label></NavLinkPlato>
    </ColumnContainer>

    }
    </>
  )
}

export default DashboardEvents