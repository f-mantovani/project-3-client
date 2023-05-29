
const removeToken = (error) => {

  const token = localStorage.getItem('token')
  console.log(error.response)
  if (token && (error.response.status === 401 || error.response.data === 'jwt malformed')){ 
 
    localStorage.removeItem('token');
    window.location.pathname = '/'
  }   


}

export default removeToken