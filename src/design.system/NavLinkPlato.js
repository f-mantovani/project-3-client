import styled from "styled-components"
import { Link } from "react-router-dom"

const NavLinkPlato = styled(Link)`
    /* default */

    ${props => props.logout && `
            background-color: red;
            padding: 0.25em 0.5em;
            color: white;
            align-self: center;
            margin-top: 5em;
        `
    } 

    color: white;
    font-weight: 900;
      
    text-decoration: none;

`

export default NavLinkPlato