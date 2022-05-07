import React from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import RowContainer from '../../design.system/RowContainer'
import { ButtonLabel } from '../../design.system/text.styling/styles'
import useBookForm from '../../utils/controllers/useBookForm'
import ModalHeader from '../Modals/ModalHeader'
import ModalInput from '../Modals/ModalInput'
import ModalTextArea from '../Modals/ModalTextArea'

const AddEvent = ({changeAddModal}) => {

  const { 
    name, 
    author, 
    year, 
    sinopsis, 
    imageUrl, 
    handleNameInput, 
    handleAuthorInput, 
    handleYearInput, 
    handleSinopsisInput, 
    handleImageUrlInput, 
    saveNewBook 
  } = useBookForm()

  return (
    <>
      <ModalHeader title="Create new book" action={() => changeAddModal()}/>

      <InputPlato addModalTitle
        placeholder="Type book title..."
        value={name}
        onChange={(e) => handleNameInput(e)}
        >
      </InputPlato>

     
        
      <ModalInput label="Author" type="text" placeholder="Name" value={author} onChange={(e) => handleAuthorInput(e)} />
      <ModalInput label="Year" type="number" placeholder="YYYY" value={year} onChange={(e) => handleYearInput(e)} />
      <ModalTextArea label="Sinopsis" type="textarea" placeholder="Book details" value={sinopsis} onChange={(e) => handleSinopsisInput(e)} />
      <ModalInput label="Book Cover" type="text" placeholder="Book cover url" value={imageUrl} onChange={(e) => handleImageUrlInput(e)} />  

      <RowContainer modalButtons>
        <ButtonPlato saveModal onClick={() => saveNewBook()}><ButtonLabel>Save Book</ButtonLabel></ButtonPlato>
        <ButtonPlato cancelModal onClick={() => changeAddModal()} ><ButtonLabel>Cancel</ButtonLabel></ButtonPlato> 
      </RowContainer> 
    </>
  )
}

export default AddEvent