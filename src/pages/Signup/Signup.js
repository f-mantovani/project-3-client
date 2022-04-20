import React from 'react'
import LogoHeader from '../../components/LogoHeader'
import SignupForm from '../../components/Singup/SignupForm'
import Navbar from '../../components/Navbar'
import DevelopedFooterPlato from '../../design.system/DevelopedFooterPlato'

const Signup = () => {
  return (
    <>
      <Navbar />
      <LogoHeader />
      <SignupForm />
      {/* Login social */}
      <DevelopedFooterPlato className='overline'>
        Developed by F. Mantovani and L. Mendes @ 2022{' '}
      </DevelopedFooterPlato>
    </>
  )
}

export default Signup
