import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body } from '../../design.system/text.styling/styles'
import notAvialble from '../../assets/cover-art-not-available.png'
const BookCardDashboard = ({image, title}) => {
  return (
    <ColumnContainer bookContainer>
        <img src={image ? image : notAvialble} alt="Book cover"/>
        <Body>{title}</Body>
    </ColumnContainer>
  )
}

export default BookCardDashboard