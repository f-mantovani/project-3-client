import styled from 'styled-components'
import checkIcon from '../assets/check-circle3x.png'


const CustomCheckboxPlato = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .task-label {
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
  position: absolute;
  opacity: 0;  
  }

  .task-add {
    background: transparent;
    position: absolute;
    margin-left: 2rem;
    border: none;
    outline: none;
    width: 78vw;
    min-height: 4rem;
  }

  @media (min-width: 600px ){
    .task-add {
      width: 90vw;
    }
  }

  ${props => props.checkable && `
    .task-label {
      cursor: pointer;
    }

    .custom-checkbox{
      cursor: pointer;
    }

    .task-label:hover::before,
    .custom-checkbox:hover + .task-label::before {
     
    }

    .custom-checkbox:focus + .task-label::before {
      box-shadow: 1px solid rgba(241, 241, 241, 0.5);
    }   

    .custom-checkbox:checked + .task-label::before{
      content: '';
      border: none;
      width: 1.35rem;
      height: 1.35rem;
      background-image: url(${checkIcon});
      background-size: 1.35rem 1.35rem;
      background-repeat: no-repeat;
      margin-right:.65rem
    }
  
  `}
`

export default CustomCheckboxPlato
