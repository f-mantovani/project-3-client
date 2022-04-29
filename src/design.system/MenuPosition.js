import styled from "styled-components"

const MenuPosition = styled.div`
  position:absolute;
  top: -30%;
  left:-525%;

  ${props => props.books && `
    left: -400%;
  `}
`

export default MenuPosition