
const useRemoveToken = (error) => {
  if (localStorage.getItem('token') && error.response.status === 401){ 
    localStorage.removeItem('token')
  }
}

export default useRemoveToken