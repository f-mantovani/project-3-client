import React from 'react'
import { H1, H2 } from '../../design.system/text.styling/styles'
import closingX from '../../assets/x.png'
import RowContainer from '../../design.system/RowContainer'

const ModalHeader = ({title, action}) => {
  return (
        <RowContainer modalHeader>
            <H2>{title}</H2>
            <img  className="closing-x" 
                  src={closingX} 
                  alt="Close the Window"
                  onClick={action}
                  />
        </RowContainer>
  )
}

export default ModalHeader