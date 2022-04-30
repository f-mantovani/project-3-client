const removeToken = (data) => {
  if (!localStorage.getItem('token')) return
  localStorage.removeItem('token')
}

export default removeToken