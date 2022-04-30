import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiConnect from '../api.handlers/apiConnect'

import saveToken from './saveToken'

const useFormInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleNameInput = (e) => { 
    setName(e.target.value)
  }
  const handleEmailInput = (e) => { 
    setEmail(e.target.value)
  }
  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
   }

  const loginUser = async () => {
    const logUser = {email, password}
    try {
      const data = await apiConnect.logIn(logUser)
      console.log(data)
      saveToken(data)
      navigate('/private/dashboard')
      setEmail('')
      setPassword('')
    } catch (error) {
      console.log(error)
    }
  }
  const signUpUser = () => {
    const newUser = {name, email, password}
    apiConnect.signUp(newUser)
    console.log(newUser)
    setName('')
    setEmail('')
    setPassword('')
  }

  return { name, email, password, handleEmailInput, handleNameInput, handlePasswordInput, loginUser, signUpUser }
}

export default useFormInput