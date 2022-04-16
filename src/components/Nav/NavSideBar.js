import styled from 'styled-components'


    const SideBar = styled.nav `
        
        
        width: ${props => props.toggled ? "10%" : "29%"};
        padding: ${props => props.toggled ? "0.5em 0.2em" : "0.5em 1em"};

        background-color: steelblue;
        color: white;
        height: 100vh;
        overflow: hidden;
        display: flex;
        position: fixed;
        flex-direction: column;
        transition-duration: 0.3s;
    `

export default SideBar