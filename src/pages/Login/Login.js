import React from 'react'
import './Login.css'
import LoginHeader from '../../components/LoginHeader'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import NavLinkPlato from '../../design.system/StyledNavLink'

const Login = () => {
  return (
    <>
      <LoginHeader />
      <div className='login-container'>
        <fieldset>
          <legend>Login</legend>
          <div className='login-inputs'>
            <div className='input-field'>
              <label htmlFor='email'>Email: </label>
              <InputPlato id='email' placeholder='email aqui'></InputPlato>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password: </label>
              <InputPlato
                id='password'
                placeholder='password aqui'
              ></InputPlato>
            </div>
            <div className='login-btn-group'>
              <NavLinkPlato to="/signup">Sign up</NavLinkPlato>
              <ButtonPlato>Login</ButtonPlato>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default Login
