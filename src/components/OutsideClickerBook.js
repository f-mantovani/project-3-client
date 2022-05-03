import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'
import MenuPosition from '../design.system/MenuPosition'

const OutsideClickerBook = ({ children, isOpen, setIsOpen }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => {
      if (!isOpen) return
      setIsOpen(!isOpen)
    }}>
      <MenuPosition books>
        {isOpen && <>{children}</>}
      </MenuPosition>
    </OutsideClickHandler>
  )
}

export default OutsideClickerBook