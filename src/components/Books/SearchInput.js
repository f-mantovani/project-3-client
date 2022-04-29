import React from 'react'
import Icon from '../../design.system/Icon'
import searchIcon from '../../assets/search.png'
import SearchInputPlato from '../../design.system/SearchInputPlato'
import { H2 } from '../../design.system/text.styling/styles'
import close from '../../assets/x.png'

const SearchInput = ({ changeOpen }) => {
  return (
    <>
      <SearchInputPlato>
        <div className='flex space-between mx-15'>
          <H2>Search for a book</H2>
          <Icon src={close} alt='Closing Icon' close onClick={changeOpen} />
        </div>
        <div className='mx-075'>
          <Icon src={searchIcon} alt='magnifying glass for search icon' />
          <input
            id='search'
            name='search'
            type='text'
            placeholder='Search by title, author..'
            required
            className='search-input'
          />
          <label className='search-label' htmlFor='search'>
            <H2 muted>Search by title, author...</H2>
          </label>
        </div>
      </SearchInputPlato>
    </>
  )
}

export default SearchInput
