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
import SetPhotoInput from '../../components/User/SetPhotoInput'

const User = () => {

    const [user, setUser] = useState({})
    const [editModal, setEditModal] = useState(false)
    const [changePicModal, setChangePicModal] = useState(false)

    const getUser = async () => {
        const userFromDB = await userConnect.getUser()
        setUser(userFromDB)
      }
      

    useEffect(() => {
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
            ? <img src={image} alt="User Profile" onClick={() => setChangePicModal(true)}/>
            : <img className='userImg' src={noUserPhoto} alt="User Profile" onClick={() => setChangePicModal(!changePicModal)}/>
            }
            
        <ModalPlato toggled={!changePicModal}>
            <SetPhotoInput setChangePicModal={setChangePicModal}/>
        </ModalPlato>
            

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
          <EditUser name={name} email={email} setEditModal={setEditModal} getUser={getUser}/>
      </ModalPlato>

    </div>
  )
}

export default User