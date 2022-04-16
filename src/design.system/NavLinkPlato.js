import styled from "styled-components"
import { Link } from "react-router-dom"

const NavLinkPlato = styled(Link)`
    /* default */

    ${props => props.logout && `
            background-color: red;
            padding: 0.25em 0.5em;
            margin: 0.25em;
            color: white;
        `
    } 
      
    text-decoration: none;

`

export default NavLinkPlato