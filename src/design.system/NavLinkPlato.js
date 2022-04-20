import styled from "styled-components"
import { Link } from "react-router-dom"

const NavLinkPlato = styled(Link)`
    /* default */
    color: var(--font-color);
    font-weight: 300;
    text-decoration: none;

    ${props => props.signup && `
           font-style: normal;
           font-family: 'Krub';
           font-weight: 300;
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