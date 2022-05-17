import React, { useState } from 'react'
import { ClipLoader } from 'react-spinners'

const useSpinner = () => {

  const [ loading, setLoading ] = useState(false)
  const [ color, setColor ] = useState(var(--font-link))

  return (
    <ClipLoader color={color} />
  )
}

export default useSpinner