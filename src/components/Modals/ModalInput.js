import React from 'react'
import ModalInputPlato from '../../design.system/ModalInputPlato'

const ModalInput = ({label, type, placeholder}) => {
  return (
    <ModalInputPlato>
        <label>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        >

        </input>
    </ModalInputPlato>
  )
}

export default ModalInput