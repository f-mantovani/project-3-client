import OutsideClickHandler from 'react-outside-click-handler/build/OutsideClickHandler'
import MenuPosition from '../design.system/MenuPosition'

const OutsideClicker = ({ children, isOpen, setIsOpen }) => {
  return (
    <OutsideClickHandler onOutsideClick={() => {
      if (!isOpen) return
      setIsOpen(!isOpen)
    }}>
      <MenuPosition>
        {isOpen && <>{children}</>}
      </MenuPosition>
    </OutsideClickHandler>
  )
}

export default OutsideClicker