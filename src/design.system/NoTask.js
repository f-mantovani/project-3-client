import styled from 'styled-components'

const NoTask = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;


  ${props => props.mt3 && `
    margin-top: 3rem;
  `}

  ${props => props.mt075 && `
    margin-top: 0.75rem;
  `}
`

export default NoTask