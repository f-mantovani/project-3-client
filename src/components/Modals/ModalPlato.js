import styled from 'styled-components'

const ModalPlato = styled.div `

    bottom:  ${props => props.toggled ? "-100%" : "0%"};

    background: linear-gradient(180deg, #042539 0%, #010C13 100%);
    border-radius: 1em 1em 0 0;
    z-index: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 90vw;
    padding: 0.5em;
    position: fixed;
    left: 50%;
    transform: translateX(-50%);
    transition: bottom 0.7s;

   

`

export default ModalPlato