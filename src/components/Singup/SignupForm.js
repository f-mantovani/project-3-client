import React from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import DotPlato from '../../design.system/DotPlato'
import useFormInput from '../../utils/controllers/useFormInput'
import { ButtonLabel, Overline } from '../../design.system/text.styling/styles.js'

const SignupForm = () => {
  const {
    name,
    email,
    password,
    signUpUser,
    message,
    success,
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
  } = useFormInput()

  return (
    <>
      <div className='login-container' onKeyDown={(e) => e.key === 'Enter' && signUpUser()}>
        <fieldset >
        <div>
          <legend className='main-title'>Create new account</legend>
          <div className='signup-header'>
            <p className='overline'>Already have an account?</p>
            <NavLinkPlato to='/' signup="true">Login Here</NavLinkPlato>
          </div>
        </div>
          <div className='login-inputs'>
            <div className='input-field'>
              <InputPlato
                id='name'
                placeholder='John Doe'
                type='text'
                value={name}
                className={message?.includes('name') ? 'error' : null}
                required
                onChange={(e) => handleNameInput(e)}
              ></InputPlato>
              <label className='input-label' htmlFor='name'>Name </label>
              <DotPlato required='true' />
            </div>
            <div className='input-field'>
              <InputPlato
                id='email'
                placeholder='johndoe@email.com'
                type='text'
                value={email}
                className={message?.includes('email') ? 'error' : null}
                required
                onChange={(e) => handleEmailInput(e)}
              ></InputPlato>
              <label className='input-label' htmlFor='email'>Email address </label>
              <DotPlato required='true' />
            </div>
            <div className='input-field'>
              <InputPlato
                id='password'
                placeholder='***********'
                type='password'
                className={message?.includes('password') ? 'error' : null}
                required
                value={password}
                onChange={(e) => handlePasswordInput(e)}
              ></InputPlato>
              <label className='input-label' htmlFor='password'>Password </label>
              <DotPlato required='true' />
            </div>
            {success?.length ? <ButtonLabel> {success} </ButtonLabel> : null}
            {message?.length ? <Overline destructive> {message} </Overline> : null}
            <div className='login-btn-group'>
              <ButtonPlato login="true" onClick={signUpUser}>Create Account</ButtonPlato>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default SignupForm
