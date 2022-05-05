import React from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import RowContainer from '../../design.system/RowContainer'
import { ButtonLabel } from '../../design.system/text.styling/styles'
import useEditEvent from '../../utils/controllers/useEditEvent'
import ModalHeader from '../Modals/ModalHeader'
import ModalInput from '../Modals/ModalInput'

const EditEvent = ({ _id, title, local, details, date, setEditModal}) => {

  const { 
    newTitle, 
    newDate,
    newTime, 
    newLocal, 
    newDetails, 
    handleTitleInput, 
    handleDateInput, 
    handleTimeInput, 
    handleLocalInput, 
    handleDetailsInput, 
    saveEdit 
  } = useEditEvent(title, local, details, date, _id)

  return (
    <>
      <ModalHeader title="Edit event" action={() => setEditModal(false)}/>

      <InputPlato addModalTitle
        placeholder="Type event title..."
        value={newTitle}
        onChange={(e) => handleTitleInput(e)}
        >
      </InputPlato>

      <ModalInput label="Date" type="date" value={newDate} onChange={(e) => handleDateInput(e)}></ModalInput>
      <ModalInput label="Hour" type="time" placeholder="00:00 pm" value={newTime} onChange={(e) => handleTimeInput(e)}></ModalInput>
      <ModalInput label="Local" type="text" placeholder="Address or URL" value={newLocal} onChange={(e) => handleLocalInput(e)}></ModalInput>
      <ModalInput label="Details" type="text" placeholder="Details about the event..." value={newDetails} onChange={(e) => handleDetailsInput(e)}></ModalInput>  

      <RowContainer modalButtons>
        <ButtonPlato saveModal>
          <ButtonLabel light onClick={() => {saveEdit(); setEditModal(false)}}>Save Event</ButtonLabel>
        </ButtonPlato>
        <ButtonLabel light onClick={() => setEditModal(false)}>Cancel</ButtonLabel> 
      </RowContainer> 
    </>
  )
}

export default EditEvent