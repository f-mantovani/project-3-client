import {useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import userConnect from '../../utils/api.handlers/userConnect'
import ColumnContainer from '../../design.system/ColumnContainer'
import noUserPhoto from '../../assets/user-photo.png'
import RowContainer from '../../design.system/RowContainer'
import { Body, Label } from '../../design.system/text.styling/styles'
import editPencil from '../../assets/edit-pencil.png'
import ModalPlato from '../../components/Modals/ModalPlato'
import EditUser from '../../components/User/EditUser'

const User = () => {

    const [user, setUser] = useState({})
    const [editModal, setEditModal] = useState(false)

    useEffect(() => {
        const getUser = async () => {
          const userFromDB = await userConnect.getUser()
          setUser(userFromDB)
        }
        getUser()
      }, [])

      const { name, email, image } = user

  return (
    <div>
        <PageHeaderPlato>
        <h1>Profile</h1>
        <Navbar />
      </PageHeaderPlato>

      <ColumnContainer noEvents>
          <ColumnContainer noEvents>
            {image
            ? <img src={image} alt="User Profile"/>
            : <img className='userImg' src={noUserPhoto} alt="User Profile"/>
            }
            <Body>Click on the photo to update</Body>
          </ColumnContainer>

          
            <RowContainer userProfile>
            <ColumnContainer userContainer>
                <ColumnContainer userProfile>
                        <Label>Name:</Label>
                        <Body>{name}</Body>
                </ColumnContainer>

                <ColumnContainer userProfile>
                        <Label>Email:</Label>
                        <Body>{email}</Body>
                </ColumnContainer>

            </ColumnContainer>

            <img    src={editPencil} 
                    alt='Edit user info'
                    onClick={() => setEditModal(!editModal)}
                    />

            </RowContainer>
          
      </ColumnContainer>

      <ModalPlato toggled={!editModal}>
          <EditUser setEditModal={setEditModal}/>
      </ModalPlato>

    </div>
  )
}

export default User