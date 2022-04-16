import { useState } from 'react'

const useFormInput = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleNameInput = (e) => { 
    setName(e.target.value)
  }
  const handleEmailInput = (e) => { 
    setEmail(e.target.value)
  }
  const handlePasswordInput = (e) => {
    setPassword(e.target.value)
   }

  const loginUser = () => {
    const logUser = {email, password}
    // Login User
    console.log(logUser)
    setEmail('')
    setPassword('')
  }
  const signUpUser = () => {
    const newUser = {name, email, password}
    // Create user route
    console.log(newUser)
    setName('')
    setEmail('')
    setPassword('')
  }

  return { name, email, password, handleEmailInput, handleNameInput, handlePasswordInput, loginUser, signUpUser }
}

export default useFormInput