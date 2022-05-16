import { useState } from 'react'
import booksConnect from '../api.handlers/booksConnect'
import useAsyncMutation from './useAsyncMutation'

const useBookForm = () => {
  const [ name, setName ] = useState('')
  const [ author, setAuthor] = useState('')
  const [ year, setYear ] = useState('')
  const [ sinopsis, setSinopsis ] = useState('')
  const [ imageUrl, setImageUrl ] = useState('')
  const createBook = useAsyncMutation(booksConnect.createBook, 'user')

  const handleNameInput = (e) => {
    setName(e.target.value)
  }
  const handleAuthorInput = (e) => {
    setAuthor(e.target.value)
  }
  const handleYearInput = (e) => {
    setYear(e.target.value)
  }
  const handleSinopsisInput = (e) => {
    setSinopsis(e.target.value)
  }
  const handleImageUrlInput = (e) => {
    setImageUrl(e.target.value)
  }

  const saveNewBook = () => {
    const payload = {name, author, year, sinopsis, imageUrl}
    createBook(payload)
    setName('')
    setAuthor('')
    setYear('')
    setSinopsis('')
    setImageUrl('')
  }
  return { name, author, year, sinopsis, imageUrl, handleNameInput, handleAuthorInput, handleYearInput, handleSinopsisInput, handleImageUrlInput, saveNewBook }
}

export default useBookForm