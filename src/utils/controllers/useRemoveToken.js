import { useNavigate } from "react-router-dom"


const useRemoveToken = (error) => {

  const navigate = useNavigate()

  if (localStorage.getItem('token') || error.response.status === 401){ 
    localStorage.removeItem('token')
    navigate('/')
  }
}

export default useRemoveToken