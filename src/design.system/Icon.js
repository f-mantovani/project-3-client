import styled from 'styled-components'

const Icon = styled.img`
  object-fit: contain;
  width: 2.5rem;
  height: 2.5rem;

  ${props => props.close && `
    width: 1.5rem;
    height: 1.5rem;
  `}

`

export default Icon