import styled from 'styled-components'

const RowContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    ${props => props.event && `

        & > p {
        margin-right: 0.3em;
         }
    
    `}

    ${props => props.bookRowContainer && `

    overflow: scroll;

    & > div {

      align-self: center;
    }

    `}

    ${props => props.modalHeader && `

    overflow: scroll;
    padding: 1em;
    width: 100%;


    `}

    



`

export default RowContainer