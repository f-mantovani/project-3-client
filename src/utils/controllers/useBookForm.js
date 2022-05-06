import { useState } from 'react'
import booksConnect from '../api.handlers/booksConnect'
import useAsyncMutation from './useAsyncMutation'

const useBookForm = () => {
  const [ title, setTitle ] = useState('')
  const [ author, setAuthor] = useState('')
  const [ year, setYear ] = useState('')
  const [ sinopsis, setSinopsis ] = useState('')
  const [ imageUrl, setImageUrl ] = useState(null)
  const createBook = useAsyncMutation(booksConnect.createBook, 'user')

  const handleTitleInput = (e) => {
    setTitle(e.target.value)
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
    const payload = {title, author, year, sinopsis, imageUrl}
    console.log(payload)
    // createTask(payload)
    // setTitle('')
    // setAuthor('')
    // setYear('')
    // setSinopsis('')
    // setImageUrl('')
  }
  return { title, author, year, sinopsis, imageUrl, handleTitleInput, handleAuthorInput, handleYearInput, handleSinopsisInput, handleImageUrlInput, saveNewBook }
}

export default useBookForm