import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiConnect from '../api.handlers/apiConnect'
import saveToken from './saveToken'

const useFormInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [message, setMessage] = useState('')
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
      setMessage('')
      if (email === '' && password === '') {
        setMessage('Email and password are required')
        return 
      }
      if (email === '' && password.length !== 0) {
        setMessage('Email is required')
        return
      }
      if (email.length !== 0 && password === ''){
        setMessage('Password is required')
        return
      }
      const data = await apiConnect.logIn(logUser)
      saveToken(data)
      navigate('/')
      setEmail('')
      setPassword('')
    } catch (error) {
      setMessage('Username and/or Password incorrect')
      throw error
    }
  }
  const signUpUser = async () => {
    const newUser = {name, email, password}
    try {
      setMessage('')
      if (name === '' || email === '' || password === ''){
        setMessage('All fields are required')
        return
      }
      await apiConnect.signUp(newUser)
      await loginUser()
      setName('') 
    } catch (error) {
      setMessage('Email already in use')
      throw error
    }
  }

  return { name, email, password, message, handleEmailInput, handleNameInput, handlePasswordInput, loginUser, signUpUser }
}

export default useFormInput
