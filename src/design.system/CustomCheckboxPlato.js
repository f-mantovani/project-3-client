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
    max-width: 1.25em;
    min-width: 1.25em;
    max-height: 1.25em;
    min-height: 1.25em;
    border: 1px solid var(--font-color);
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
    cursor: pointer;
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
      border: 3px solid var(--font-link);
    }   

    .custom-checkbox:checked + .task-label::before{
      content: '';
      border: none;
      max-width: 1.35rem;
      max-height: 1.35rem;
      background-image: url(${checkIcon});
      background-size: 1.35rem 1.35rem;
      background-repeat: no-repeat;
      margin-right:.65rem
    }
  
  `}
`

export default CustomCheckboxPlato
