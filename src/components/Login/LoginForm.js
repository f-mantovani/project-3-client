import React from 'react'
import './Login.css'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import useFormInput from '../../utils/controllers/useFormInput'

const LoginForm = () => {
  const { 
    email, 
    password, 
    handleEmailInput, 
    handlePasswordInput, 
    loginUser 
  } = useFormInput()

  return (
    <>
      <div className='login-container'>
        <fieldset>
          <legend>Login</legend>
          <div className='login-inputs'>
            <div className='input-field'>
              <label htmlFor='email'>Email: </label>
              <InputPlato
                id='email'
                placeholder='email aqui'
                value={email}
                onChange={(e) => handleEmailInput(e)}
              ></InputPlato>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password: </label>
              <InputPlato
                id='password'
                placeholder='password aqui'
                value={password}
                onChange={(e) => handlePasswordInput(e)}
              ></InputPlato>
            </div>
            <div className='login-btn-group'>
              <NavLinkPlato logout to='/signup'>Sign up</NavLinkPlato>
              <ButtonPlato onClick={loginUser}>Login</ButtonPlato>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default LoginForm
