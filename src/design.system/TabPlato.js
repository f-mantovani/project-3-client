import styled from 'styled-components'

const TabPlato = styled.div`
  cursor: pointer;
  padding: .75em 1em 1em 1em;

  ${props => props.active && `
      border-bottom: 2px solid #F1F1F1;
  `}
`

export default TabPlato