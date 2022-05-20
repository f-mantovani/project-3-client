import React, { useEffect, useState } from 'react'
import './Login.css'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import NavLinkPlato from '../../design.system/NavLinkPlato'
import useFormInput from '../../utils/controllers/useFormInput'
import { Overline } from '../../design.system/text.styling/styles.js'
import DotPlato from '../../design.system/DotPlato'
import { ClipLoader } from 'react-spinners'
import userConnect from '../../utils/api.handlers/userConnect'
import { useNavigate } from 'react-router-dom'

const LoginForm = () => {
  const { email,
          password,
          emailMessage,
          passwordMessage, 
          message, 
          handleEmailInput, 
          handlePasswordInput, 
          loginUser,
          loading,
          setLoading,
          color,
          styleLoader,
  } = useFormInput()

  const navigate = useNavigate()

  useEffect(() => {
    const checkUser = async () => {
      try {
        if (localStorage.getItem('token')){
          setLoading(true)
          const user = await userConnect.getUser()
          console.log(user)
          if (user) {
            navigate('/dashboard')
          }
        }
      } catch (error) {
        setLoading(false)
        throw error
      }
    }
    checkUser()
  
  }, [])

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

            {message?.length ? <Overline className='mx-05' destructive> {message} </Overline> : null}
            
            {loading ? 
              (<ClipLoader color={color} loading={loading} css={styleLoader}  />) 
              :
              (<div className='login-btn-group'>
                <ButtonPlato login='true' onClick={loginUser}>
                  Login
                </ButtonPlato>
              </div>)
            }
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default LoginForm
