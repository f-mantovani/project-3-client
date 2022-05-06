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

    ${props => props.modalButtons && `

    padding: 1em;
    width: 100%;
    margin-bottom: 1em;
    `}

    ${props => props.closingMenu && `

    justify-content: flex-end;
    margin: 1em 0 0.5em 0;
    `}

    ${props => props.userInfoArea && `

   
    width: 100%;
    margin: 1em 0 2em 0;
    `}

    ${props => props.userProfile && `
      justify-content: center;
      width: 90%;
      margin-bottom: 0.5em;
      
      & img {
        width: 1.5em;
        cursor: pointer;
      }
    `}
    



`

export default RowContainer