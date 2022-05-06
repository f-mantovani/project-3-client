import {useState, useEffect } from 'react'
import Navbar from '../../components/Navbar'
import PageHeaderPlato from '../../design.system/PageHeaderPlato'
import TabHeaderPlato from '../../design.system/TabHeaderPlato'
import { Body } from '../../design.system/text.styling/styles'
import userConnect from '../../utils/api.handlers/userConnect'

const User = () => {
    const [user, setUser] = useState({})

    useEffect(() => {
        const getUser = async () => {
          const userFromDB = await userConnect.getUser()
          setUser(userFromDB)
        }
        getUser()
      }, [])

  return (
    <div>
        <PageHeaderPlato>
        <h1>Profile</h1>
        <Navbar />
      </PageHeaderPlato>
      <TabHeaderPlato></TabHeaderPlato>
    </div>
  )
}

export default User