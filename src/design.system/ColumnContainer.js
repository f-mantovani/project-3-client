import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => props.kebab && `
    min-height: 2.5rem;
    padding-right: 1.125em;
    position: relative
  `}
  
  ${props => props.mt3 && `
    margin-top: 3rem;
  `}

  ${props => props.mt075 && `
    margin-top: 0.75rem;
  `}
  
  ${props => props.rowSpaceBetween && `
    flex-direction: row;
    justify-content: space-between;
    padding: 1.125em;
  `}

${props => props.startSpaceBetween && `
    justify-content: space-between;
    align-items: flex-start;
    min-height: 2em;
    padding: 0 1.125em;
  `}

${props => props.eventText && `
    justify-content: center;
    align-items: flex-start;
    text-align: left;
    min-height: 2em;
    padding: 0 1.125em;
    width: 90%;
  `}

${props => props.eventImg && `
    
    & > img {
      width: 1em;
    }
  `}
`
  

export default ColumnContainer