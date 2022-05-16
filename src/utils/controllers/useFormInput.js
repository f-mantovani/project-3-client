import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiConnect from '../api.handlers/apiConnect'
import saveToken from './saveToken'

const useFormInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameMessage, setNameMessage] = useState('')
  const [emailMessage, setEmailMessage] = useState('')
  const [passwordMessage, setPasswordMessage] = useState('')
  const [message, setMessage] = useState('')
  const [success, setSuccess] = useState('')
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
  const handleFeedbackLogin = (email, password) => {
    setMessage('')
    setEmailMessage('')
    setPasswordMessage('')
    if (email === '' || password === '') {
      if (email === '') {
        setEmailMessage('email is required')
      }
      if (password === '') {
        setPasswordMessage('password is required')
      }
      throw new Error('Fields missing')
    }
  }

  const handleFeedbackSignup = (email, password, name) => {
    setMessage('')
    setEmailMessage('')
    setPasswordMessage('')
    setNameMessage('')
    if (email === '' || password === '' || name === '') {
      if (email === '') {
        setEmailMessage('email is required')
      }
      if (password === '') {
        setPasswordMessage('password is required')
      }
      if (name === '') {
        setNameMessage('name is required')
      }
      throw new Error('Fields missing')
    }
  }

  const handleErrorSignup = (error) => {
    if (error.error === 'User already exists') {
      setMessage('email already in use')
      return
    }
    
    if (error.message === 'Fields missing') return
    setMessage('please use a valid email')
  }

  const loginUser = async () => {
    const logUser = { email, password }
    try {
      handleFeedbackLogin(email, password)
      const data = await apiConnect.logIn(logUser)
      saveToken(data)
      navigate('/dashboard')
      setEmail('')
      setPassword('')
    } catch (error) {
      if (error.error === 'Email or password incorrect') {
        setMessage('email and/or password incorrect')
      }
      throw error
    }
  }

  const signUpUser = async () => {
    const newUser = { name, email, password }
    try {
      handleFeedbackSignup(email, password, name)
      await apiConnect.signUp(newUser)
      setSuccess('user created successfully')
      await loginUser()
      setName('')
      setEmail('')
      setPassword('')
      setSuccess('')
    } catch (error) {
      handleErrorSignup(error)
      throw error
    }
  }

  return {
    name,
    email,
    password,
    nameMessage,
    emailMessage,
    passwordMessage,
    message,
    success,
    handleEmailInput,
    handleNameInput,
    handlePasswordInput,
    loginUser,
    signUpUser,
  }
}

export default useFormInput
