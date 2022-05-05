import { useEffect, useState } from 'react'
import eventsConnect from '../api.handlers/eventsConnect'
import useAsyncMutation from './useAsyncMutation'

const useEditEvent = (title, local, details, date, id) => {
  
  const getDate = () => {
    const oldDate = {
      year: new Date(date).getFullYear(),
      month: new Date(date).getMonth() + 1,
      day: new Date(date).getDate(),
      hours: new Date(date).getHours(),
      minutes: new Date(date).getMinutes(),
    }
    return oldDate
  }

  const checkLength = (num) => {
    if (num.toString().length > 1) return num
    return `0${num}`
  }

  useEffect(() => {
    setNewDate(`${getDate().year}-${checkLength(getDate().month)}-${checkLength(getDate().day)}`)
    setNewTime(`${checkLength(getDate().hours)}:${checkLength(getDate().minutes)}`)
  }, [title, local, details, date])

  const [ newTitle, setNewTitle ] = useState(title)
  const [ newDate, setNewDate ] = useState('')
  const [ newTime, setNewTime ] = useState('')
  const [ newLocal, setNewLocal ] = useState(local)
  const [ newDetails, setNewDetails ] = useState(details)
  const editEvent = useAsyncMutation(eventsConnect.updateEvent, 'events')


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

    return new Date(year, month - 1, day, hour, minutes).toISOString()
  }

  const saveEdit = () => {
    const payload = {
      title: newTitle,
      date: manipulateDate(),
      time: newTime,
      local: newLocal,
      details: newDetails,
    }
    editEvent({ id, payload })
  }
  return { newTitle, newDate, newLocal, newDetails, newTime, handleTitleInput, handleDateInput, handleTimeInput, handleLocalInput, handleDetailsInput, saveEdit }
}



export default useEditEvent