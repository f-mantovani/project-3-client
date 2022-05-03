const saveToken = (data) => {
  if (!localStorage.getItem('token')) {
    localStorage.setItem('token', data.token)
  }
}

export default saveToken