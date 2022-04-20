import styled from 'styled-components'


    const SideBar = styled.nav `
        
        
        width: ${props => props.toggled ? "0%" : "60%"};
        padding: ${props => props.toggled ? "0" : "0.5em 1em"};

        background: linear-gradient(180deg, #042539 0%, #010C13 100%);
        border-left: 0.05em white solid;
        color: white;
        height: 100vh;
        overflow: hidden;
        display: flex;
        position: fixed;
        top: 0;
        right: 0;
        flex-direction: column;
        transition-duration: 0.3s;
        z-index: 1;
    `

export default SideBar