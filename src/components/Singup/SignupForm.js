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
              <InputPlato
                id='name'
                placeholder='John Doe'
                type='text'
                value={name}
                required
                onChange={(e) => handleNameInput(e)}
              ></InputPlato>
              <label htmlFor='name'>Name </label>
            </div>
            <div className='input-field'>
              <InputPlato
                id='email'
                placeholder='johndoe@email.com'
                type='text'
                value={email}
                required
                onChange={(e) => handleEmailInput(e)}
              ></InputPlato>
              <label htmlFor='email'>Email address </label>
            </div>
            <div className='input-field'>
              <InputPlato
                id='password'
                placeholder='***********'
                type='password'
                required
                value={password}
                onChange={(e) => handlePasswordInput(e)}
              ></InputPlato>
              <label htmlFor='password'>Password </label>
            </div>
            <div className='login-btn-group'>
              <ButtonPlato onClick={() => navigate('/')}>Cancel</ButtonPlato>
              <ButtonPlato login="true" onClick={signUpUser}>Create Account</ButtonPlato>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default SignupForm
