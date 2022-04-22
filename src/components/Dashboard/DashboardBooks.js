import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import RowContainer from '../../design.system/RowContainer'
import { Body, Label } from '../../design.system/text.styling/styles'
import getMostRecentBooks from '../../utils/controllers/getMostRecentBooks'
import BookCardDashboard from '../Books/BookCardDashboard'

const DashboardBooks = ({books}) => {
  const mostRecentBooks = getMostRecentBooks(books)

  console.log(mostRecentBooks)

  return (

    <>
        <ColumnContainer rowSpaceBetween>
            <h2>Books recently added</h2>
            <NavLinkPlato to="/events"><Label smalllink>View All</Label></NavLinkPlato>
        </ColumnContainer>

        <RowContainer bookRowContainer>
        {mostRecentBooks.map(book => <BookCardDashboard title={book.name} image={book.imageUrl}/>)}
        </RowContainer>
    </>
  )
}

export default DashboardBooks