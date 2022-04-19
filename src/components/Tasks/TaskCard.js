import React from 'react'
import './TaskCard.css'
import CardPlato from '../../design.system/CardPlato'


const TaskCard = ({ title, status, index }) => {
  return (
    <CardPlato className='task-card'>
      <div className='checkbox-container'>
        <input type='checkbox' id={index} className='custom-checkbox'/>
        <label htmlFor={index} className='task-label body'> {title} </label>
      </div>
    </CardPlato>
  )
}

export default TaskCard