import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import { Body } from '../../design.system/text.styling/styles'
import notAvialble from '../../assets/cover-art-not-available.png'
import DotPlato from '../../design.system/DotPlato'
import MenuCollapsable from '../MenuCollapsable'
import useCollapseMenu from '../../utils/controllers/useCollapseMenu'
import OutsideClickerBook from '../OutsideClickerBook'
import BookMenuDot from './BookMenuDot'
import NavLinkPlato from '../../design.system/NavLinkPlato'

const BookCardDashboard = ({image, title, _id, status, bookPage}) => {

  const id = _id
  const { isOpen, setIsOpen, handleCollapse } = useCollapseMenu()
  
  return (
    <ColumnContainer bookContainer>
        <ColumnContainer bookImgContainer>
        {bookPage && <ColumnContainer kebabBooks onClick={handleCollapse}>
        <DotPlato />
        <DotPlato />
        <DotPlato />
        <OutsideClickerBook isOpen={isOpen} setIsOpen={setIsOpen}>
            <MenuCollapsable>
              <BookMenuDot id={id} status={status} />
            </MenuCollapsable>
          </OutsideClickerBook>
      </ColumnContainer>}
        <NavLinkPlato to={`/book/${id}`} style={{borderRadius: ".5em"}}>
          <img src={image ? image : notAvialble} alt="Book cover"/>
        </NavLinkPlato>
        </ColumnContainer>
        <ColumnContainer bookTitleContainer>
          <NavLinkPlato to={`/book/${id}`}>
           <Body>{title}</Body>
          </NavLinkPlato>
        </ColumnContainer>
    </ColumnContainer>
  )
}

export default BookCardDashboard