import React from 'react'
import LogoHeader from '../../components/LogoHeader'
import LoginForm from '../../components/Login/LoginForm'
import Navbar from '../../components/Navbar'
import DevelopedFooterPlato from '../../design.system/DevelopedFooterPlato'

const Login = () => {
  return (
    <>
      <Navbar />
      <div>
        <LogoHeader />
        <LoginForm />
        {/* Login social */}
        <DevelopedFooterPlato className='overline'>
          Developed by F. Mantovani and L. Mendes @ 2022{' '}
        </DevelopedFooterPlato>
      </div>
    </>
  )
}

export default Login
