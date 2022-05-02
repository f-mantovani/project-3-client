import styled from "styled-components"

const MenuPosition = styled.div`
  position:absolute;
  top: -30%;
  left:-525%;
  z-index: 2;
  

  ${props => props.books && `
    right: -10px;
    left: -280%;
  `}
`

export default MenuPosition