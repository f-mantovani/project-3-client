import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body } from '../../design.system/text.styling/styles'
import notAvialble from '../../assets/cover-art-not-available.png'
import DotPlato from '../../design.system/DotPlato'
import MenuCollapsable from '../MenuCollapsable'
import useCollapseMenu from '../../utils/controllers/useCollapseMenu'
import OutsideClickerBook from '../OutsideClickerBook'
import BookMenuDot from './BookMenuDot'

const BookCardDashboard = ({image, title}) => {
  const { isOpen, setIsOpen, handleCollapse } = useCollapseMenu()
  return (
    <ColumnContainer bookContainer>
        <ColumnContainer bookImgContainer>
        <ColumnContainer kebabBooks onClick={handleCollapse}>
        <DotPlato />
        <DotPlato />
        <DotPlato />
        <OutsideClickerBook isOpen={isOpen} setIsOpen={setIsOpen}>
            <MenuCollapsable>
              <BookMenuDot />
            </MenuCollapsable>
          </OutsideClickerBook>
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