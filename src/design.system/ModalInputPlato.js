import styled from 'styled-components'

const ModalInputPlato = styled.div `

    width: 98%;
    padding: 0.6em;
    background: rgba(241, 241, 241, 0.05);
    border-radius: 1em;
    margin: 0.5em 0;
    display: flex;
    justify-content: space-between;
    align-items: baseline;

    & > label {
        color: white;
        font-weight: 500;
    }

    & > input {
        background: none;
        color: white;
        border: none;
        width: 80%;
        margin-left: .5em;
        /* text-align: center; */
        ::-webkit-calendar-picker-indicator {
            filter: invert(1);
        }

        ::active {
            outline: none;
        }
    }    
        
    & > textarea {
        background: none;
        color: white;
        border: none;
        width: 75%;
        text-align: left;
        /* overflow: auto; */
        min-height: 5rem;
    }

    ::active {
        outline: none;
    }

`
export default ModalInputPlato