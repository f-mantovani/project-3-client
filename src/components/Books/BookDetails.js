import React, { useLayoutEffect } from 'react'
import { useParams } from 'react-router-dom'
import { H1 } from '../../design.system/text.styling/styles'


const BookDetails = () => {
  const { _id } = useParams()
 

  return ( <H1> Marcação do Book details {_id}</H1>
    
  )
}

export default BookDetails