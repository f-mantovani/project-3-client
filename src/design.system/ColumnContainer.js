import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => props.kebab && `
    min-height: 2.5rem;
    padding-right: 1.125em;
  `}
  
  ${props => props.mt3 && `
    margin-top: 3rem;
  `}

  ${props => props.mt075 && `
    margin-top: 0.75rem;
  `}
`

export default ColumnContainer