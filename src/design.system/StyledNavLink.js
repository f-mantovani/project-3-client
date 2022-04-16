import styled from "styled-components"
import { Link } from "react-router-dom"

const NavLinkPlato = styled(Link)`

    background-color: ${props => props.logout ? "red" : "steelblue"};
    
    color: white;
    text-decoration: none;
    padding: 0.25em 0.5em;
`

export default NavLinkPlato