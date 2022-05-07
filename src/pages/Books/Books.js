import React, { useState } from 'react'
import Navbar from '../../components/Navbar'
import LineBreak from '../../design.system/LineBreakePlato'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import TabPlato from '../../design.system/TabPlato'
import { H1, H2, Label } from '../../design.system/text.styling/styles'
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
import userConnect from '../../utils/api.handlers/userConnect'
import ModalPlato from '../../components/Modals/ModalPlato'
import AddBook from '../../components/Books/AddBook'

const types = ['To Read', 'Done']

const Books = () => {

  const [active, setActive] = useState(types[0])
  const [open, setOpen] = useState(false)

  const [addModal, setAddModal] = useState(false)

  const {
    isLoading,
    error,
    data: books,
  } = useQuery('user', userConnect.getUser)

  if (isLoading) return 'Loading...'

  if (error) return 'An error has occurred: ' + error.message

  const changeOpen = () => {
    setOpen(!open)
  }

  const changeAddModal = () => {
    setAddModal(!addModal)
  }

  return (
    <>
      {open && (
        <>
          <GrayArea onClick={() => changeOpen()} />
          <SearchInput changeOpen={changeOpen} changeAddModal={changeAddModal}/>
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
      {!(books.booksReading.length || books.booksToRead.length || books.booksDone.length) &&
        active === types[0] && <NoBooks changeOpen={changeOpen} />}
      {active === types[0] &&
        (books.booksReading.length || books.booksToRead.length || books.booksDone.length) && (
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
              {books.booksReading.map((book) => (
                <BookCardDashboard
                  key={book._id}
                  title={book.name}
                  image={book.imageUrl}
                  _id={book._id}
                  status='booksReading'
                  bookPage
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
                {books.booksToRead.map((book) => (
                  <BookCardDashboard
                    key={book._id}
                    title={book.name}
                    image={book.imageUrl}
                    _id={book._id}
                    status='booksToRead'
                    bookPage
                  />
                ))}
              </RowContainer>
            </div>
          </>
        )}
      {active === types[1] &&
        (books.booksReading.length || books.booksToRead.length || books.booksDone.length) ? (
          <>
            <ColumnContainer rowSpaceBetween>
              <H2>Done</H2>
              <ColumnContainer kebab>
                <DotPlato />
                <DotPlato />
                <DotPlato />
              </ColumnContainer>
            </ColumnContainer>
            <RowContainer bookRowContainer>
              {books.booksDone.map((book) => (
                <BookCardDashboard
                  key={book._id}
                  title={book.name}
                  image={book.imageUrl}
                  _id={book._id}
                  status='booksDone'
                  bookPage
                />
              ))}
            </RowContainer>
          </>
        ) : null }

        <ModalPlato toggled={!addModal}>  
          <AddBook changeAddModal={changeAddModal} searchModal={changeOpen}/>
        </ModalPlato>
    </>
  )
}

export default Books
