import React from 'react'
import './Login.css'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import useFormInput from '../../utils/controllers/useFormInput'
import { Overline } from '../../design.system/text.styling/styles.js'
import DotPlato from '../../design.system/DotPlato'

const LoginForm = () => {
  const { email,
          password,
          emailMessage,
          passwordMessage, 
          message, 
          handleEmailInput, 
          handlePasswordInput, 
          loginUser 
  } = useFormInput()

  return (
    <>
      <div className='login-container' onKeyDownCapture={(e) => e.key === 'Enter' && loginUser()}>
        <fieldset>
          <div>
            <legend className='main-title'>Access your account</legend>
            <div className='signup-header'>
              <p className='overline'>Don’T have an account YET?</p>
              <NavLinkPlato to='/signup' signup='true'>
                Register Here
              </NavLinkPlato>
            </div>
          </div>
          <div className='login-inputs'>
            <div className='input-field'>
              <InputPlato
                id='email'
                name='email'
                placeholder='johndoe@email.com'
                value={email}
                required='true'
                className={(message.includes('email') && 'error') || (emailMessage !== '' && 'error')}
                onChange={(e) => handleEmailInput(e)}
              ></InputPlato>
              <label className='input-label' htmlFor='email'>
                Email address
              </label>
              <DotPlato required='true' />
              {emailMessage?.length ? <Overline className='mt-05' destructive> {emailMessage} </Overline> : null}
            </div>
            <div className='input-field'>
              <InputPlato
                id='password'
                name='password'
                type='password'
                placeholder='*********'
                value={password}
                required='true'
                className={(message.includes('password') && 'error') || (passwordMessage !== '' && 'error')}
                onChange={(e) => handlePasswordInput(e)}
              ></InputPlato>  
              <label className='input-label' htmlFor='password'>
                Password
              </label>
              <DotPlato required='true' />
              {passwordMessage?.length ? <Overline className='mt-05' destructive> {passwordMessage} </Overline> : null}
            </div>
            {message?.length ? <Overline className='mx-075' destructive> {message} </Overline> : null}
            <div className='login-btn-group'>
              <ButtonPlato
                login='true'
                onClick={loginUser}
                
              >
                Login
              </ButtonPlato>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default LoginForm
