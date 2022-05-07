import React, { useState } from 'react'
import Icon from '../../design.system/Icon'
import searchIcon from '../../assets/search.png'
import SearchInputPlato from '../../design.system/SearchInputPlato'
import { H2 } from '../../design.system/text.styling/styles'
import close from '../../assets/x.png'
import booksConnect from '../../utils/api.handlers/booksConnect'
import BookCardDashboard from './BookCardDashboard'
import RowContainer from '../../design.system/RowContainer'
import BookNotFound from './BookNotFound'

const SearchInput = ({ changeOpen, changeAddModal }) => {
  
  const [search, setSearch] = useState('')
  const [booksSearched, setBooksSearched] = useState([])
  const [notFound, setNotFound] = useState(false)

  const searchBook = async () => {
    try {
      const bookList = await booksConnect.searchBook(search)
      if (!bookList.length) {
        setNotFound(true)
      }
      setBooksSearched(bookList)
    } catch (error) {
      throw error.message
    }
  }

  return (
    <>
      <SearchInputPlato
        onKeyDownCapture={(e) => e.key === 'Enter' && searchBook()}
      >
        <div className='flex space-between mx-15'>
          <H2>Search for a book</H2>
          <Icon src={close} alt='Closing Icon' close onClick={changeOpen} />
        </div>
        <div className='mx-075'>
          <Icon src={searchIcon} alt='magnifying glass for search icon' />
          <input
            id='search'
            name='search'
            type='search'
            placeholder='Search by title, author..'
            required
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className='search-input'
            autoFocus
          />
          <label className='search-label' htmlFor='search'>
            <H2 muted>Search by title, author...</H2>
          </label>
        </div>

        <RowContainer bookRowContainer >
          {booksSearched.length
            ? booksSearched.map((book) => (
                <BookCardDashboard
                  key={book._id}
                  title={book.name}
                  image={book.imageUrl}
                  _id={book._id}
                  bookPage
                />
              ))
            : 
            notFound ? <BookNotFound changeAddModal={changeAddModal} changeOpen={changeOpen} /> 
            : null}
        </RowContainer>
      </SearchInputPlato>
    </>
  )
}

export default SearchInput
