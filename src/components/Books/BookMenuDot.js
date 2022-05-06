import React from 'react'
import MenuCard from '../../design.system/MenuCard'
import { Body } from '../../design.system/text.styling/styles'
import userConnect from '../../utils/api.handlers/userConnect'
import useAsyncMutation from '../../utils/controllers/useAsyncMutation'

const BookMenuDot = ({id, status }) => {

  const changeBookshelves = useAsyncMutation(userConnect.changeBookshelves, 'user')

  return (
    <>
      <MenuCard onClick={() => changeBookshelves({id, oldStatus: status, status: 'booksReading' })}>
        <Body>Move to Reading Now</Body>
      </MenuCard>

      <MenuCard onClick={() => changeBookshelves({id, oldStatus: status, status: 'booksToRead' })}>
        <Body>Move to Reading List</Body>
      </MenuCard>

      <MenuCard onClick={() => changeBookshelves({id, oldStatus: status, status: 'booksDone' })}>
        <Body>Add to Done</Body>
      </MenuCard>
    </>
  )
}

export default BookMenuDot
