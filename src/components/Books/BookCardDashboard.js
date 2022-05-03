import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body } from '../../design.system/text.styling/styles'
import notAvialble from '../../assets/cover-art-not-available.png'
import DotPlato from '../../design.system/DotPlato'
import MenuCollapsable from '../MenuCollapsable'
import useCollapseMenu from '../../utils/controllers/useCollapseMenu'
import OutsideClickerBook from '../OutsideClickerBook'
import BookMenuDot from './BookMenuDot'
import { Link } from 'react-router-dom'

const BookCardDashboard = ({image, title, _id}) => {
  const id = _id
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
        <Link to={`/private/book/${id}`}>
          <img src={image ? image : notAvialble} alt="Book cover"/>
        </Link>
        </ColumnContainer>
        <ColumnContainer bookTitleContainer>
          <Link to={`/private/book/${id}`}>
           <Body>{title}</Body>
          </Link>
        </ColumnContainer>
    </ColumnContainer>
  )
}

export default BookCardDashboard