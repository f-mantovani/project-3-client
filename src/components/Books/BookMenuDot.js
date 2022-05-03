import React from 'react'
import MenuCard from '../../design.system/MenuCard'
import { Body } from '../../design.system/text.styling/styles'

const BookMenuDot = () => {
  return (
    <>
      <MenuCard>
        <Body>Move to Reading Now</Body>
      </MenuCard>
      <MenuCard>
        <Body>Move to Reading List</Body>
      </MenuCard>
      <MenuCard>
        <Body>Add to Done</Body>
      </MenuCard>
      <MenuCard>
        <Body destructive>Delete</Body>
      </MenuCard>
    </>
  )
}

export default BookMenuDot
