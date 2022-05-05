const getPastAndUpcomingEvents = (events) => {

    const eventsList = {
        pastEvents: events.filter(event => new Date(event.date) < new Date()).sort((a, b) => new Date(a.date) - new Date(b.date)),
        upcomingEvents: events.filter(event => new Date(event.date) > new Date()).sort((a, b) => new Date(a.date) - new Date(b.date))

    }

    return eventsList

}

export default getPastAndUpcomingEvents