import React from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import DotPlato from '../../design.system/DotPlato'
import useFormInput from '../../utils/controllers/useFormInput'
import { ButtonLabel, Overline } from '../../design.system/text.styling/styles.js'
import { ClipLoader } from 'react-spinners'

const SignupForm = () => {
  const {
    name,
    email,
    password,
    signUpUser,
    emailMessage,
    passwordMessage,
    nameMessage,
    message,
    success,
    handleNameInput,
    handleEmailInput,
    handlePasswordInput,
    loading,
    color,
    styleLoader,
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
                className={nameMessage !== '' && 'error'}
                required='true'
                onChange={(e) => handleNameInput(e)}
              ></InputPlato>
              <label className='input-label' htmlFor='name'>Name </label>
              <DotPlato required='true' />
              {nameMessage?.length ? <Overline className='mt-05' destructive> {nameMessage} </Overline> : null}
            </div>
            <div className='input-field'>
              <InputPlato
                id='email'
                placeholder='johndoe@email.com'
                type='text'
                value={email}
                className={(message.includes('email') && 'error') || (emailMessage !== '' && 'error')}
                required='true'
                onChange={(e) => handleEmailInput(e)}
              ></InputPlato>
              <label className='input-label' htmlFor='email'>Email address </label>
              <DotPlato required='true' />
              {emailMessage?.length ? <Overline className='mt-05' destructive> {emailMessage} </Overline> : null}
            </div>
            <div className='input-field'>
              <InputPlato
                id='password'
                placeholder='***********'
                type='password'
                className={passwordMessage !== '' && 'error'}
                required='true'
                value={password}
                onChange={(e) => handlePasswordInput(e)}
              ></InputPlato>
              <label className='input-label' htmlFor='password'>Password </label>
              <DotPlato required='true' />
              {passwordMessage?.length ? <Overline className='mt-05' destructive> {passwordMessage} </Overline> : null}
            </div>
            {success?.length ? <ButtonLabel className='mx-05'> {success} </ButtonLabel> : null}
            {message?.length ? <Overline className='mx-05' destructive> {message} </Overline> : null}
            {loading ? (<ClipLoader color={color} loading={loading} css={styleLoader} />) : (<div className='login-btn-group'>
              <ButtonPlato login="true" onClick={signUpUser}>Create Account</ButtonPlato>
            </div>)}
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default SignupForm
