import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body } from '../../design.system/text.styling/styles'
import notAvialble from '../../assets/cover-art-not-available.png'
import DotPlato from '../../design.system/DotPlato'
const BookCardDashboard = ({image, title}) => {
  return (
    <ColumnContainer bookContainer>
        <ColumnContainer bookImgContainer>
        <ColumnContainer kebabBooks>
        <DotPlato />
        <DotPlato />
        <DotPlato />
      </ColumnContainer>
        <img src={image ? image : notAvialble} alt="Book cover"/>
        </ColumnContainer>
        <ColumnContainer bookTitleContainer>
          <Body>{title}</Body>
        </ColumnContainer>
          
    </ColumnContainer>
  )
}

export default BookCardDashboard