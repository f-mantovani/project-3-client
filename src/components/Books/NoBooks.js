import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body, H2 } from '../../design.system/text.styling/styles'
import ButtonPlato from '../../design.system/ButtonPlato'
import EmptyState from '../../design.system/EmptyState'
import noBooks from '../../assets/noBooks3x.png'

const NoBooks = ({changeOpen}) => {
  return (
    <ColumnContainer mt5='true'>
      <EmptyState src={noBooks} alt='No Books added' />
      <ColumnContainer mt075>
        <H2>No books added yet!</H2>
        <Body>Search for your first book to add it to a list!</Body>
      </ColumnContainer>
      <ButtonPlato login mt2 onClick={() => changeOpen()}>Search Book</ButtonPlato>
    </ColumnContainer>
  )
}

export default NoBooks
