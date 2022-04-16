import React from 'react'
import LoginHeader from '../../components/LoginHeader'
import ButtonPlato from '../../design.system/ButtonPlato'
import InputPlato from '../../design.system/InputPlato'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const navigate = useNavigate()

  return (
    <>
      <LoginHeader />
      <div className='login-container'>
        <fieldset>
          <legend>Sign up</legend>
          <div className='login-inputs'>
            <div className='input-field'>
              <label htmlFor='name'>Name: </label>
              <InputPlato id='name' placeholder='name here'></InputPlato>
            </div>
            <div className='input-field'>
              <label htmlFor='email'>Email: </label>
              <InputPlato id='email' placeholder='email here'></InputPlato>
            </div>
            <div className='input-field'>
              <label htmlFor='password'>Password: </label>
              <InputPlato
                id='password'
                placeholder='password here'
              ></InputPlato>
            </div>
            <div className='login-btn-group'>
              <ButtonPlato onClick={ () => navigate('/') }>Cancel</ButtonPlato>
              <ButtonPlato>Sign up</ButtonPlato>
            </div>
          </div>
        </fieldset>
      </div>
    </>
  )
}

export default Signup