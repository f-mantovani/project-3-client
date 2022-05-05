import { Navigate } from 'react-router-dom'

const PrivateOutlet = ( { children } ) => {

  const auth = localStorage.getItem('token')

  return auth ? children : <Navigate to='/login' />
}

export default PrivateOutlet