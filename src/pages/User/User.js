import {useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import userConnect from '../../utils/api.handlers/userConnect'
import ColumnContainer from '../../design.system/ColumnContainer'
import noUserPhoto from '../../assets/user-photo.png'
import RowContainer from '../../design.system/RowContainer'
import { Body } from '../../design.system/text.styling/styles'
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

      <ColumnContainer>
          <div>
            {image
            ? <img src={image} alt="User Profile"/>
            : <img src={noUserPhoto} alt="User Profile"/>
            }
          </div>

          <img src={editPencil} alt="Edit user info"/>

          <RowContainer>
              <Body>Name:</Body>
              <Body>{name}</Body>

          </RowContainer>
          <RowContainer>
              <Body>Email:</Body>
              <Body>{email}</Body>
          </RowContainer>
      </ColumnContainer>



    </div>
  )
}

export default User