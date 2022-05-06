import React from 'react'
import noPhoto from '../../assets/user.png'
import editPencil from '../../assets/edit-pencil.png'

const NavUserDisplay = ({photo, name, email, display}) => {

  return (
    <div className={display}>
        {photo
        ? <img src={photo} alt='User profile'/>
        : <img src={noPhoto} alt='User profile'/>}

        <div>
            {name
            ? <p className='subtitle2'>{name}</p>
            : <p className='subtitle2'>User Name</p>}
            {email
            ? <p className='body'>{email}</p>
            : <p className='body'>email@email.com</p>}

        </div>

        
            <img 
              src={editPencil} 
              alt="Edit user information"
              className="edit-pencil"
              />
        

    </div>
  )
}

export default NavUserDisplay