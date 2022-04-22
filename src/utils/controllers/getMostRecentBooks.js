const getMostRecentBooks = (books) => {

    const mostRecentBooks = books.sort((a,b) => {
        if (a.createdAt > b.createdAt) return  -1
    })

    return mostRecentBooks.slice(0, 5)

}

export default getMostRecentBooks