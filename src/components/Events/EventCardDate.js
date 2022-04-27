import React from 'react'
import ColumnContainer from '../../design.system/ColumnContainer'
import calendarIcon from '../../assets/calendar.png'
import { Body } from '../../design.system/text.styling/styles'
import RowContainer from '../../design.system/RowContainer'

const EventCardDate = ({date}) => {

    const formatedDate = new Date(date)

    const month = ['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN', 'JUL', 'AUG', 'SEP', 'OCT', 'NOV', 'DEC']
  return (
    <ColumnContainer eventImg>
        <img src={calendarIcon} alt="Calendar Icon"/>
        <RowContainer event>
            <Body>{month[formatedDate.getMonth()]}</Body>
            <Body>{formatedDate.getDate()}</Body>
        </RowContainer>

        <RowContainer event> 
            <Body>{formatedDate.toLocaleTimeString().substr(0, 4)} </Body>
            <Body>{formatedDate.toLocaleTimeString().substr(8, 12)}</Body>
        </RowContainer> 
        
    </ColumnContainer>
  )
}

export default EventCardDate