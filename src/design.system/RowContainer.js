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

    



`

export default RowContainer