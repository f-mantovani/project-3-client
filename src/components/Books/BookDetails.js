import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { H1, Overline } from '../../design.system/text.styling/styles'
import booksConnect from '../../utils/api.handlers/booksConnect'
import DetailsHeader from '../Modals/DetailsHeader'
import ModalInput from '../Modals/ModalInput'
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
      <div className='mx-15'>

        <H1 className='my-15'>{book.name}</H1>

        <div className='my-15'>
          <ModalInput label="Author" type="text" value={book.author} />
        </div>


        <div className='my-15'>
          <ModalInput label="Year" type="text"  value={book.year} className='my-15'/>
        </div>
        <div className='my-15'>
          <ModalInput label="Sinopsis" type="text"  value={book.sinopsis} className='my-15' /> 
        </div>
      </div>
    </>
  )
}

export default BookDetails