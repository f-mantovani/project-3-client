const getPastAndUpcomingEvents = (events) => {

    const eventsList = {
        pastEvents: events.filter(event => new Date(event.date) < new Date()),
        upcomingEvents: events.filter(event => new Date(event.date) > new Date())

    }

    return eventsList

}

export default getPastAndUpcomingEvents