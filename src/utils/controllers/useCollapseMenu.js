import { useState } from 'react'

const useCollapseMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  const handleCollapse = () => {
    setIsOpen(!isOpen)
  }
  return { isOpen, setIsOpen, handleCollapse }
}

export default useCollapseMenu