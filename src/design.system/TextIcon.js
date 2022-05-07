import styled from 'styled-components'

const TextIcon = styled.div `
  width: 1.25rem;
  height: 1.25rem;
  margin-right: .25rem;
  background-image: ${props => props.background ? `url(${props.background})` : null};
  background-repeat: no-repeat;

  @media (min-width: 600px) {
    margin-right: 0;
  }
  

  ${(props) => props.muted &&`
    background-image: ${props => props.background ? `url(${props.background})` : null};
  `}
`

export default TextIcon