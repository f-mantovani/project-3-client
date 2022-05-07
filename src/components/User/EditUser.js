import {useState, useEffect } from 'react'
import ButtonPlato from '../../design.system/ButtonPlato'
import RowContainer from '../../design.system/RowContainer'
import { ButtonLabel } from '../../design.system/text.styling/styles'
import ModalHeader from '../Modals/ModalHeader'
import ModalInput from '../Modals/ModalInput'
import userConnect from '../../utils/api.handlers/userConnect'

const EditUser = ({name, email, setEditModal, getUser}) => {

  const [newName, setNewName ] = useState()
  const [newEmail, setNewEmail] = useState()

  useEffect(() => {
    setNewName(name)
    setNewEmail(email)
  }, [name, email])

  console.log(newName)
  console.log(newEmail)

  const handleUpdateUser = async () => {
    const payload = {name: newName, email: newEmail}

    console.log(payload)

    try {
        await userConnect.updateUser(payload)
        await getUser()
    } catch (error) {
        console.log(error.message)
    }
  }

  return (
    <>
      <ModalHeader title="Update your information" action={() => setEditModal(false)}/>


      <ModalInput label="Name" type="text" value={newName} onChange={(e) => setNewName(e.target.value)}></ModalInput>
      <ModalInput label="Email" type="email" placeholder="example@example.com" value={newEmail} onChange={(e) => setNewEmail(e.target.value)}></ModalInput> 

      <RowContainer modalButtons>
        <ButtonPlato saveModal>
          <ButtonLabel onClick={() => {handleUpdateUser(); setEditModal(false)}}>Save Changes</ButtonLabel>
        </ButtonPlato>
        <ButtonLabel light onClick={() => setEditModal(false)}>Cancel</ButtonLabel> 
      </RowContainer> 
    </>
  )
}

export default EditUser