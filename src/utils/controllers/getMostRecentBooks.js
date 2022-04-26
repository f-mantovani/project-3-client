const getMostRecentBooks = (books) => {

    const mostRecentBooks = books.reverse()

    return mostRecentBooks.slice(0, 5)

}

export default getMostRecentBooks