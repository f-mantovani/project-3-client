import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import { H1, H2, Label } from '../../design.system/text.styling/styles'
import books from '../../books.json'
import NoBooks from '../../components/Books/NoBooks'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import RowContainer from '../../design.system/RowContainer'
import BookCardDashboard from '../../components/Books/BookCardDashboard'
import searchIcon from '../../assets/search.png'
import SearchIcon from '../../design.system/SearchIcon'

const types = ['To Read', 'Done']

const Books = () => {
  const [active, setActive] = useState(types[0])
  // books = []

  return (
    <>
      <PageHeaderPlato>
        <H1>Books</H1>
        <div className='flex space-between'>
          <SearchIcon src={searchIcon} alt='magnifying glass for search icon' />
          <Navbar />
        </div>
      </PageHeaderPlato>
      <TabHeaderPlato>
        <div className='tabs'>
          {types.map((type) => (
            <TabPlato
              key={type}
              active={active === type && 'active'}
              onClick={() => setActive(type)}
            >
              <Label>{type}</Label>
            </TabPlato>
          ))}
        </div>
        <LineBreak />
      </TabHeaderPlato>
      {(!books.length && active === types[0]) && (
        <NoBooks />) }
        {(active === types[0] && books.length) &&
        <>
          <ColumnContainer rowSpaceBetween>
            <H2>Reading now</H2>
            <ColumnContainer kebab>
              <DotPlato />
              <DotPlato />
              <DotPlato />
            </ColumnContainer>
          </ColumnContainer>
          <RowContainer bookRowContainer>
            {books.map((book) => (
              <BookCardDashboard key={book._id} title={book.name} image={book.imageUrl} />
            ))}
          </RowContainer>
          <div className='pb375'>
          <ColumnContainer rowSpaceBetween mt325>
            <H2>Reading list</H2>
            <ColumnContainer kebab>
              <DotPlato />
              <DotPlato />
              <DotPlato />
            </ColumnContainer>
          </ColumnContainer>
          <RowContainer bookRowContainer>
            {books.map((book) => (
              <BookCardDashboard key={book._id}title={book.name} image={book.imageUrl} />
            ))}
          </RowContainer>
          </div>
        </>
      }
    </>
  )
}

export default Books
