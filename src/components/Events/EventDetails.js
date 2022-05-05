import RowContainer from '../../design.system/RowContainer'
import { ButtonLabel, Overline } from '../../design.system/text.styling/styles'
import eventsConnect from '../../utils/api.handlers/eventsConnect'
import useAsyncMutation from '../../utils/controllers/useAsyncMutation'
import useEditEvent from '../../utils/controllers/useEditEvent'
import DetailsHeader from '../Modals/DetailsHeader'
import ModalInput from '../Modals/ModalInput'

const EditEvent = ({ _id, title, local, details, date, setDetailsOpen, setEditModal}) => {

  const deleteEvent = useAsyncMutation(eventsConnect.deleteEvent, 'events')

  const { 
    newTitle, 
    newDate,
    newTime, 
    newLocal, 
    newDetails, 
  } = useEditEvent(title, local, details, date, _id)

  return (
    <>
      <DetailsHeader title={newTitle} action={() => setDetailsOpen(false)}/>

      <ModalInput label="Date" type="date" value={newDate} readOnly></ModalInput>
      <ModalInput label="Hour" type="time" placeholder="00:00 pm" value={newTime} readOnly></ModalInput>
      <ModalInput label="Local" type="text" placeholder="Address or URL" value={newLocal} readOnly></ModalInput>
      <ModalInput label="Details" type="text" placeholder="Details about the event..." value={newDetails} readOnly></ModalInput>  

      <RowContainer modalButtons>
        <ButtonLabel light onClick={() => {setDetailsOpen(false); setEditModal(true)}}>Edit Event</ButtonLabel>
        <Overline destructive onClick={() => {setDetailsOpen(false); deleteEvent(_id)}}>Delete Event</Overline> 
      </RowContainer> 
    </>
  )
}

export default EditEvent