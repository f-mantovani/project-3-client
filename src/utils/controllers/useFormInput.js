import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { css } from 'styled-components'
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
  const [loading, setLoading] = useState(false)
  const [color, setColor] = useState('#73BEC5')
  const navigate = useNavigate()

  const styleLoader = css`
    display: block;
    margin: 0 auto;
  `

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
      setLoading(true)
      const data = await apiConnect.logIn(logUser)
      if (localStorage.getItem('token')){
        localStorage.removeItem('token')
      }
      saveToken(data)
      navigate('/dashboard')
      setEmail('')
      setPassword('')
      setLoading(false)
    } catch (error) {
      if (error.error === 'Email or password incorrect') {
        setMessage('email and/or password incorrect')
      }
      setLoading(false)
      throw error
      
    }
  }

  const signUpUser = async () => {
    const newUser = { name, email, password }
    try {
      handleFeedbackSignup(email, password, name)
      setLoading(true)
      await apiConnect.signUp(newUser)
      setSuccess('user created successfully')
      setLoading(false)
      await loginUser()
      setName('')
      setEmail('')
      setPassword('')
      setSuccess('')
    } catch (error) {
      handleErrorSignup(error)
      setLoading(false)
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
    loading,
    setLoading,
    color,
    styleLoader,
    handleEmailInput,
    handleNameInput,
    handlePasswordInput,
    loginUser,
    signUpUser,
  }
}

export default useFormInput
