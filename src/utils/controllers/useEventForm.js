import { useState } from 'react'
import eventsConnect from '../api.handlers/eventsConnect'
import useAsyncMutation from './useAsyncMutation'

const useEventForm = () => {
  const [ newTitle, setNewTitle ] = useState('')
  const [ newDate, setNewDate ] = useState('')
  const [ newTime, setNewTime ] = useState('')
  const [ newLocal, setNewLocal ] = useState('')
  const [ newDetails, setNewDetails ] = useState('')
  const createEvent = useAsyncMutation(eventsConnect.createEvent, 'events')

  const handleTitleInput = (e) => {
    setNewTitle(e.target.value)
  }
  const handleDateInput = (e) => {
    setNewDate(e.target.value)
  }
  const handleTimeInput = (e) => {
    setNewTime(e.target.value)
  }
  const handleLocalInput = (e) => {
    setNewLocal(e.target.value)
  }
  const handleDetailsInput = (e) => {
    setNewDetails(e.target.value)
  }

  const manipulateDate = () => {
    const year = newDate.slice(0, 4)
    const month = newDate.slice(5, 7)
    const day = newDate.slice(8, 10)
    const hour = newTime.slice(0, 2)
    const minutes = newTime.slice(3, 5)
    return new Date(year, month - 1 , day, hour, minutes).toISOString()
  }

  const saveNewEvent = () => {
    const payload = {
      title: newTitle,
      date: manipulateDate(),
      time: newTime,
      local: newLocal,
      details: newDetails,
    }
    createEvent(payload)
    setNewTitle('')
    setNewDate('')
    setNewTime('')
    setNewLocal('')
    setNewDetails('')
  }
  return { newTitle, newDate, newLocal, newDetails, newTime, handleTitleInput, handleDateInput, handleTimeInput, handleLocalInput, handleDetailsInput, saveNewEvent }
}

export default useEventForm