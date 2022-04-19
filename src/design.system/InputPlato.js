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
  :focus + label,
  :valid + label {
    position: absolute;
    top: -1rem;
    left: 0.5em;
    font-style: normal;
    font-weight: var(--fw-400);
    font-size: var(--fs-small);
    line-height: var(--fs-large);
    color: var(--font-color);
    border: none;
    transition: 0.3 ease;
  }

  :focus {
    outline: none;
  }
`

export default InputPlato
