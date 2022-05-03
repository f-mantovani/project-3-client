import React from 'react'
import { useParams } from 'react-router-dom'
import booksConnect from '../../utils/api.handlers/booksConnect'

const BookDetails = () => {
  const { id } = useParams()

  
  const getBook = async (id) => {
   const book = await booksConnect.getOneBook(id)
   console.log(book)
  }

  getBook(id)

  return (
    <div>BookDetails {id}</div>
  )
}

export default BookDetails