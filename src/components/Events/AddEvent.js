import React from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import RowContainer from '../../design.system/RowContainer'
import { ButtonLabel } from '../../design.system/text.styling/styles'
import useEventForm from '../../utils/controllers/useEventForm'
import ModalHeader from '../Modals/ModalHeader'
import ModalInput from '../Modals/ModalInput'

const AddEvent = ({setAddModal}) => {

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
    saveNewEvent 
  } = useEventForm()

  return (
    <>
      <ModalHeader title="Create new event" action={() => setAddModal(false)}/>

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
        <ButtonPlato saveModal onClick={() => {saveNewEvent(); setAddModal(false)}}><ButtonLabel>Save Event</ButtonLabel></ButtonPlato>
        <ButtonPlato cancelModal onClick={() => setAddModal(false)}><ButtonLabel>Cancel</ButtonLabel></ButtonPlato> 
      </RowContainer> 
    </>
  )
}

export default AddEvent