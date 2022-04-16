import React from 'react'
import { useNavigate } from 'react-router-dom'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import useFormInput from '../../utils/controllers/useFormInput'

const SignupForm = () => {
  const navigate = useNavigate()
  const {
    name,
    email,
    password,
    signUpUser,
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
  } = useFormInput()

  return (
    <>
      <div className='login-container'>
        <fieldset>
          <legend>Sign up</legend>
          <div className='login-inputs'>
            <div className='input-field'>
              <label htmlFor='name'>Name: </label>
              <InputPlato
                id='name'
                placeholder='name here'
                type='text'
                value={name}
                onChange={(e) => handleNameInput(e)}
              ></InputPlato>
            </div>
            <div className='input-field'>
              <label htmlFor='email'>Email: </label>
              <InputPlato
                id='email'
                placeholder='email here'
                type='text'
                value={email}
                onChange={(e) => handleEmailInput(e)}
              ></InputPlato>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password: </label>
              <InputPlato
                id='password'
                placeholder='password here'
                type='password'
                value={password}
                onChange={(e) => handlePasswordInput(e)}
              ></InputPlato>
            </div>
            <div className='login-btn-group'>
              <ButtonPlato onClick={() => navigate('/')}>Cancel</ButtonPlato>
              <ButtonPlato onClick={signUpUser}>Sign up</ButtonPlato>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default SignupForm
