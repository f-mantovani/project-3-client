import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body, H2 } from '../../design.system/text.styling/styles'
import ButtonPlato from '../../design.system/ButtonPlato'
const NoBooks = () => {
  return (
    <ColumnContainer mt5='true'>
      <div
        style={{ backgroundColor: 'grey', width: '160px', height: '160px' }}
      ></div>
      <ColumnContainer mt075>
        <H2>No books added yet!</H2>
        <Body>Search for your first book to add it to a list!</Body>
      </ColumnContainer>
      <ButtonPlato login mt2>Search Book</ButtonPlato>
    </ColumnContainer>
  )
}

export default NoBooks
