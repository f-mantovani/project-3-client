import styled from 'styled-components'

const InputPlato = styled.input`
  width: 17rem;
  background-color: transparent;
  padding: 0.5em;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #f1f1f1;
  color: var(--font-color);

  ::placeholder {
    opacity: 0;
  }

  :focus::placeholder {
    opacity: 1;
    transition: 300ms ease-in;
  }
  
  :focus + .input-label,
  :valid + .input-label {
    position: absolute;
    top: -1rem;
    left: 0.85em;
    font-style: normal;
    font-weight: var(--fw-400);
    font-size: var(--fs-small);
    line-height: var(--fs-large);
    color: var(--font-color);
    border: none;
    transition: 0.3s ease;
  }

  :focus {
    outline: none;
  }

  ${props => props.addModalTitle && `
    width: 80%;
    font-size: 1em;
    border: none;
    ::placeholder {
     opacity: 1;
      }

  `}
`

export default InputPlato
