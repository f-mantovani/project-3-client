import React from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import ColumnContainer from '../../design.system/ColumnContainer'
import EmptyState from '../../design.system/EmptyState'
import { Body, H2 } from '../../design.system/text.styling/styles'
import bookNotFound from '../../assets/bookNotFound3x.png'

const BookNotFound = ({changeAddModal, changeOpen}) => {
  return (
    <ColumnContainer className='mx-auto mb-3'>
      <EmptyState src={bookNotFound} alt='No Books added' />
      <ColumnContainer mt075>
        <H2>Ops, book not found!</H2>
        <Body className='line-break'>Check if it was typed correctly or add a new book to your list:</Body>
      </ColumnContainer>
      <ButtonPlato login mt2 onClick={() => {changeAddModal(); changeOpen()}}>Add new book</ButtonPlato>
    </ColumnContainer>
  )
}

export default BookNotFound