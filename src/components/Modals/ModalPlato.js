import styled from 'styled-components'

const ModalPlato = styled.div `

    

    background: linear-gradient(180deg, #042539 0%, #010C13 100%);
    border-radius: 1em 1em 0 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90vw;
    padding: 0.5em;
    position: absolute;
    bottom: 0%;
    left: 50%;
    transform: translateX(-50%);
    transition: all 0.2s ease-in-out; 

    ${props => props.toggled && `\
        transition-duration: 2s;
        bottom: 100%;
        
    `}

`

export default ModalPlato