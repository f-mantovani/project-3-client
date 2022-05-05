import React from 'react'
import ModalInputPlato from '../../design.system/ModalInputPlato'

const ModalInput = ({label, type, placeholder, value, onChange}) => {
  return (
    <ModalInputPlato>
        <label>{label}</label>
        <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        >

        </input>
    </ModalInputPlato>
  )
}

export default ModalInput