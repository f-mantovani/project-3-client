import {useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import userConnect from '../../utils/api.handlers/userConnect'
import ColumnContainer from '../../design.system/ColumnContainer'
import noUserPhoto from '../../assets/user-photo.png'
import RowContainer from '../../design.system/RowContainer'
import { Body, Label } from '../../design.system/text.styling/styles'
import editPencil from '../../assets/edit-pencil.png'

const User = () => {
    const [user, setUser] = useState({})

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
          <div>
            {image
            ? <img src={image} alt="User Profile"/>
            : <img src={noUserPhoto} alt="User Profile"/>
            }
          </div>

          

            <ColumnContainer userProfile>
            <img src={editPencil} alt="edit user info"/>
                <RowContainer userProfile>
                    <Label>Name:</Label>
                </RowContainer>
                <Body>{name}</Body>
            </ColumnContainer>

            <ColumnContainer userProfile>
                <RowContainer userProfile>
                    <Label>Email:</Label>
                </RowContainer>
                <Body>{email}</Body>
            </ColumnContainer>


          
      </ColumnContainer>



    </div>
  )
}

export default User