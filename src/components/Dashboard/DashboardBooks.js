import { useEffect, useState } from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import RowContainer from '../../design.system/RowContainer'
import { Body, Label } from '../../design.system/text.styling/styles'
import getMostRecentBooks from '../../utils/controllers/getMostRecentBooks'
import BookCardDashboard from '../Books/BookCardDashboard'

const DashboardBooks = ({books}) => {
  

  const [mostRecentBooks, setMostRecentBooks] = useState([])

  useEffect(() => {
    setMostRecentBooks(getMostRecentBooks(books))
  }, [])
  

  return (

    <>
        <ColumnContainer rowSpaceBetween>

            <h2>Books recently added</h2>
            {mostRecentBooks.length > 0
            &&
            <NavLinkPlato to="/books">
              <Label smalllink>View All</Label>
            </NavLinkPlato>}
        </ColumnContainer>

        {mostRecentBooks.length > 0

        ? 
        
        <RowContainer bookRowContainer>
        {mostRecentBooks.map(book => <BookCardDashboard title={book.name} image={book.imageUrl}/>)}
        </RowContainer>

        : 

        <ColumnContainer startSpaceBetween>
          <Body>No books added to this list yet...</Body>
          <NavLinkPlato to="/books">
            <Label smalllink>SEARCH FOR A NEW BOOK</Label>
          </NavLinkPlato>
        </ColumnContainer>}
        
    </>
  )
}

export default DashboardBooks