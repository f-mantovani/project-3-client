const getUpcomingEvents = (events) => {
    const fourteenDaysInTheFuture = new Date(Date.now() + 1000 /*sec*/ * 60 /*min*/ * 60 /*hour*/ * 24 /*day*/ * 13)

    const upcomingEvents = events.filter(event => new Date(event.date) < fourteenDaysInTheFuture)

    return upcomingEvents
}

export default getUpcomingEvents