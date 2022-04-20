import React from 'react'
import noPhoto from '../../assets/user.png'

const NavUserDisplay = ({photo, name, email}) => {

  return (
    <div className="user-info">
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

    </div>
  )
}

export default NavUserDisplay