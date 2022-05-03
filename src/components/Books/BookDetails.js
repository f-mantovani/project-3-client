import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import booksConnect from '../../utils/api.handlers/booksConnect'

const BookDetails = () => {
  const { id } = useParams()

  const [book, setBook] = useState({})

  
  const getBook = async (id) => {
   const book = await booksConnect.getOneBook(id)
   setBook(book)
  }

  getBook(id)

  return (
    <div>BookDetails {id}</div>
  )
}

export default BookDetails