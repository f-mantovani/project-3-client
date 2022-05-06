import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Body, H1, Overline, Subtitle2 } from '../../design.system/text.styling/styles'
import booksConnect from '../../utils/api.handlers/booksConnect'
import DetailsHeader from '../Modals/DetailsHeader'
import ModalInput from '../Modals/ModalInput'
import ModalLongText from '../Modals/ModalLongText'
import BookCoverDetails from './BookCoverDetails'

const BookDetails = () => {
  const { id } = useParams()

  const [book, setBook] = useState({})

  const navigate = useNavigate()
  
  const getBook = async (id) => {
   const book = await booksConnect.getOneBook(id)
   setBook(book)
  }
  useEffect(() => {
    getBook(id)
  }, [])
  
  return (
    <>
      <DetailsHeader action={() => navigate(-1)} />

      <BookCoverDetails src={book.imageUrl} />
      <div className='mx-15 pb375'>

        <H1 className='my-15'>{book.name}</H1>

        <div className='my-15'>
          <ModalInput label="Author" type="text" value={book.author} />
        </div>


        <div className='my-15'>
          <ModalInput label="Year" type="text"  value={book.year} className='my-15'/>
        </div>

        
        <ModalLongText>
          <Subtitle2 >Sinopsis</Subtitle2>
          <Body className='my-15'>{book.sinopsis}</Body>
        </ModalLongText>
      </div>
    </>
  )
}

export default BookDetails