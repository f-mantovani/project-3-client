const getUpcomingEvents = (events) => {
    const fourteenDaysInTheFuture = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 14)

    const upcomingEvents = events.filter(event => new Date(event.date) < fourteenDaysInTheFuture && new Date(event.date) > Date.now())

    return upcomingEvents
}

export default getUpcomingEvents