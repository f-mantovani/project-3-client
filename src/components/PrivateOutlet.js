import { Navigate, Outlet } from 'react-router-dom'

const PrivateOutlet = () => {
  const auth = localStorage.getItem('token')
  return auth ? <Outlet /> : <Navigate to='/' />
}

export default PrivateOutlet