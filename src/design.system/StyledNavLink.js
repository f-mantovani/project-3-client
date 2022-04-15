import styled from "styled-components"
import { Link } from "react-router-dom"

const StyledNavLink = styled(Link)`

    background-color: ${props => props.logout ? "red" : "var(--color)"};
    
    color: white;
    text-decoration: none;
`

export default StyledNavLink