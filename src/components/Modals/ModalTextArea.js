import React from 'react'
import ModalInputPlato from '../../design.system/ModalInputPlato'

const ModalInput = ({label, type, placeholder, value, onChange, readOnly, className}) => {
  return (
    <ModalInputPlato className={className}>
        <label>{label}</label>
        <textarea
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        readOnly={readOnly}
        className='addModalTitle'
        >

        </textarea>
    </ModalInputPlato>
  )
}

export default ModalInput