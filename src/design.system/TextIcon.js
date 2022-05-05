import styled from 'styled-components'

const TextIcon = styled.div `
  width: .75rem;
  height: .75rem;
  margin-right: .25rem;
  background-image: ${props => props.background ? `url(${props.background})` : null};
  background-repeat: no-repeat;
  

  ${(props) => props.muted &&`
    background-image: ${props => props.background ? `url(${props.background})` : null};
  `}
`

export default TextIcon