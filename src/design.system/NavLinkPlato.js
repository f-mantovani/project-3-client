import styled from "styled-components"
import { Link } from "react-router-dom"

const NavLinkPlato = styled(Link)`
    /* default */
    color: var(--font-color);
    font-weight: 900;
    text-decoration: none;

    ${props => props.logout && `
            background-color: red;
            padding: 0.25em 0.5em;
            color: white;
            align-self: center;
            margin-top: 5em;
        `
    } 

    ${props => props.signup && `
           font-style: normal;
           font-weight: 500;
           font-size: var(--fs-xtra-small);
           line-height: var(--fs-xtra-small);
           letter-spacing: 0.015em;
           text-decoration: underline;
           text-transform: uppercase;
           color: #73BEC5;
        `
    } 
`

export default NavLinkPlato