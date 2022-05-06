import styled from 'styled-components'


    const SideBar = styled.nav `
        
        
        width: ${props => props.toggled ? "0" : "260px"};
        padding: ${props => props.toggled ? "0" : "0.5em 1em"};

        background: var(--bg-menu);
        color: white;
        height: 100vh;
        overflow: hidden;
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        flex-direction: column;
        transition-duration: 0.3s;
        z-index: 3;
    `

export default SideBar