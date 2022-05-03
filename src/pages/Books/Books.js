import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import { H1, H2, Label } from '../../design.system/text.styling/styles'
// import books from '../../books.json'
import NoBooks from '../../components/Books/NoBooks'
import ColumnContainer from '../../design.system/ColumnContainer'
import DotPlato from '../../design.system/DotPlato'
import RowContainer from '../../design.system/RowContainer'
import BookCardDashboard from '../../components/Books/BookCardDashboard'
import searchIcon from '../../assets/search.png'
import Icon from '../../design.system/Icon'
import SearchInput from '../../components/Books/SearchInput'
import GrayArea from '../../design.system/GrayArea'
import { useQuery } from 'react-query'
import booksConnect from '../../utils/api.handlers/booksConnect'

const types = ['To Read', 'Done']

const Books = () => {
  const [active, setActive] = useState(types[0])
  const [open, setOpen] = useState(false)
  const { isLoading, error, data: books } = useQuery('books', booksConnect.getAllBooks)

  if (isLoading) return "Loading...";

  if (error) return "An error has occurred: " + error.message;


  const changeOpen = () => {
    setOpen(!open)
  }

  return (
    <>
      {open && (
        <>
          <GrayArea onClick={() => changeOpen()} />
          <SearchInput changeOpen={changeOpen} />
        </>
      )}
      <PageHeaderPlato>
        <H1>Books</H1>
        <div className='flex space-between'>
          <Icon
            src={searchIcon}
            alt='magnifying glass for search icon'
            onClick={() => changeOpen()}
          />
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
      {!books.length && active === types[0] && <NoBooks />}
      {active === types[0] && books.length && (
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
              <BookCardDashboard
                key={book._id}
                title={book.name}
                image={book.imageUrl}
                _id={book._id}
              />
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
                <BookCardDashboard
                  key={book._id}
                  title={book.name}
                  image={book.imageUrl}
                  _id={book._id}
                />
              ))}
            </RowContainer>
          </div>
        </>
      )}
    </>
  )
}

export default Books
