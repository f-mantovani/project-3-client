import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import apiConnect from '../api.handlers/apiConnect'
import saveToken from './saveToken'

const useFormInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
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
  const handleErrorFeedbackLogin = (email, password) => {
    setMessage('')
    if (email === '' && password === '') {
      setMessage('email and password are required')
      throw new Error('email and password are required') 
    }
    if (email === '' && password !== '') {
      setMessage('email is required')
      throw new Error('email is required')
    }
    if (email !== '' && password === ''){
      setMessage('password is required')
      throw new Error('password is required')
    }
  }

  const handleErrorFeedbackSignup = (email, password, name) => {
    setMessage('')
    if (email === '' && password === '' && name === '') {
      setMessage('name, email and password are required')
      throw new Error('name, email and password are required')
    }
    if (email === '' && password === '' && name !== ''){
      setMessage('email and password are required')
      throw new Error('email and password are required')
    }
    if (email !== '' && password === '' && name === ''){
      setMessage('name and password are required')
      throw new Error('name and password are required')
    }
    if (email === '' && password !== '' && name === ''){
      setMessage('name and email are required')
      throw new Error('name and email are required')
    }
    if (email !== '' && password === '' && name !== ''){
      setMessage('password is required')
      throw new Error('password is required')
    }
    if (email !== '' && password !== '' && name === ''){
      setMessage('name is required')
      throw new Error('name is required')
    }
    if (email === '' && password !== '' && name !== ''){
      setMessage('email is required')
      throw new Error('email is required')
    }
  }


  const loginUser = async () => {
    const logUser = {email, password}
    try {
      handleErrorFeedbackLogin(email, password)
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
    const newUser = {name, email, password}
    try {
      handleErrorFeedbackSignup(email, password, name)
      await apiConnect.signUp(newUser)
      setSuccess('user created successfully')
      await loginUser()
      setName('') 
      setSuccess('')
    } catch (error) {
      console.log('eu sou o primeiro erro e o log', error.error.slice(0, 22))
      if (error.error.slice(0, 22) === 'User validation failed') {
        setMessage('please use a valid email')
      }
      if (error.error === 'User already exists') {
        setMessage('email already in use')
      }
      throw error
    }
  }

  return { name, email, password, message, success,handleEmailInput, handleNameInput, handlePasswordInput, loginUser, signUpUser }
}

export default useFormInput
