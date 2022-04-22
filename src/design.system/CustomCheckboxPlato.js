import styled from 'styled-components'
import checkIcon from '../assets/check-circle3x.png'


const CustomCheckboxPlato = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .task-label {
  cursor: pointer;
  display: flex;
  align-items: center;
  }

  .task-label::before {
  content: '';
  width: 1.25em;
  height: 1.25em;
  border: 1px solid rgba(241, 241, 241, 0.5);
  border-radius: 100%;
  margin-right: 0.75em;
  }

  .custom-checkbox{
  cursor: pointer;
  position: absolute;
  opacity: 0;  
  }

  ${props => props.checkable && `
    .task-label:hover::before,
    .custom-checkbox:hover + .task-label::before {
      background-color: black;
    }

    .custom-checkbox:focus + .task-label::before {
    border: .05em slateblue solid;
    box-shadow: 2px 2px 2px slateblue;
    }   

    .custom-checkbox:checked + .task-label::before{
      content: '';
      border: none;
      width: 1.25rem;
      height: 1.25rem;
      background-image: url(${checkIcon});
      background-size: 1.25rem 1.25rem;
      background-repeat: no-repeat;
    }
  
  `}
`

export default CustomCheckboxPlato
