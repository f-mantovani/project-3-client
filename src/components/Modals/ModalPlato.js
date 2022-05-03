import styled from 'styled-components'

const ModalPlato = styled.div `
    background: linear-gradient(180deg, #042539 0%, #010C13 100%);
    z-index: 3;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: space-evenly;
    width: 90vw;
    padding: 0.5em;
    position: fixed;
    left: 50%;
    bottom: 0%;
    transform: translateX(-50%);


    & > img {

    }

`

export default ModalPlato