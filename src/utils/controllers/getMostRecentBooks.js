const getMostRecentBooks = (books) => {


    return books.slice(-5, books.length).reverse()

}

export default getMostRecentBooks