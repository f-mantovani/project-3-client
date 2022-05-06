import styled from 'styled-components'

const BookCoverDetails = styled.div`
  width: 100%;
  height: 10rem;

  background-image: ${props => props.src ? `url(${props.src})` : null};
  background-size: cover ;
  background-repeat: no-repeat;
  
`

export default BookCoverDetails