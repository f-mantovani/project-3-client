import React from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import RowContainer from '../../design.system/RowContainer'
import { ButtonLabel } from '../../design.system/text.styling/styles'
import useBookForm from '../../utils/controllers/useBookForm'
import useEventForm from '../../utils/controllers/useEventForm'
import ModalHeader from '../Modals/ModalHeader'
import ModalInput from '../Modals/ModalInput'


const AddEvent = ({changeAddModal}) => {

  const { 
    title, 
    author, 
    year, 
    sinopsis, 
    imageUrl, 
    handleTitleInput, 
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
        value={title}
        onChange={(e) => handleTitleInput(e)}
        >
      </InputPlato>

     
        
      <ModalInput label="Author" type="text" placeholder="Name" value={author} onChange={(e) => handleAuthorInput(e)} />
      <ModalInput label="Year" type="text" placeholder="yyyy" value={year} onChange={(e) => handleYearInput(e)} />
      <ModalInput label="Sinopsis" type="text" placeholder="book details" value={sinopsis} onChange={(e) => handleSinopsisInput(e)}></ModalInput>
      <ModalInput label="ImageUrl" type="text" placeholder="Book cover url" value={imageUrl} onChange={(e) => handleImageUrlInput(e)}></ModalInput>  

      <RowContainer modalButtons>
        <ButtonPlato saveModal ><ButtonLabel>Save Book</ButtonLabel></ButtonPlato>
        <ButtonPlato cancelModal onClick={() => changeAddModal()} ><ButtonLabel>Cancel</ButtonLabel></ButtonPlato> 
      </RowContainer> 
    </>
  )
}

export default AddEvent