import React from 'react'
import { H1 } from '../../design.system/text.styling/styles'
import closingX from '../../assets/x.png'
import RowContainer from '../../design.system/RowContainer'

const DetailsHeader = ({title, action}) => {
  return (
        <RowContainer modalHeader>
            <H1>{title}</H1>
            <img  className="closing-x" 
                  src={closingX} 
                  alt="Close the Window"
                  onClick={action}
                  />
        </RowContainer>
  )
}

export default DetailsHeader