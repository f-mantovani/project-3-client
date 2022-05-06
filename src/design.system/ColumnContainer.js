import styled from 'styled-components'

const ColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  ${props => props.kebab && `
    margin-left: .75rem;
    min-height: 2.5rem;
    padding-right: 1.125em;
    position: relative;
  `}
  
  ${props => props.mt3 && `
    margin-top: 3rem;
  `}

  ${props => props.mt325 && `
    margin-top: 3.25rem;
  `}

  ${props => props.mt5 && `
    margin-top: 5rem;
  `}

  ${props => props.mt075 && `
    margin-top: 0.75rem;
  `}

${props => props.mt100 && `
    margin-top: 1rem;
  `}

${props => props.mt150 && `
    margin-top: 1.5rem;
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

  ${props => props.bookContainer && `
      margin: 1em 1em;
      border-radius: .5em;
      width: 10em;
      min-width: 9em;
      height: 14em;
      justify-content: space-between;
      background: #042539;
      box-sizing: border-box;
      position: relative;
      }
    `}

  ${props => props.bookImgContainer && `
      height: 80%;
      overflow: hidden;
      border-radius: 0.5rem 0.5rem 0 0;
      & > img {
        width: 15em;
        height: 100%;
      }  
    `}

  ${props => props.bookTitleContainer && `
      height:20%;
      width: 100%;
      padding: 0 0.3em;
      align-items: flex-start;
      }
    `}

  ${props => props.kebabBooks && `
    position: absolute;
    background: #042539;
    justify-content: center;
    top: 0.5em;
    right: 0.5em;
    align-items: center;
    width: 2em;
    height: 2em;
    border-radius: 2em;
    }
  `}

${props => props.addButton && `
    width: 100%;
    position: fixed;
    bottom: 1em;
    }
  `}

${props => props.eventList && `
    display: block;
    height: 63vh;
    overflow: scroll;
    }
  `}

${props => props.noEvents && `
    justify-content: space-evenly;
    align-items: space-evenly;
    height: 60vh;
    }
  `}

${props => props.userProfile && `
    align-items: flex-start;
    width: 100%;
  `}

${props => props.userContainer && `
    align-items: flex-start;
    width: 80%;
    height: 10vh;
    justify-content: space-between;
  `}

${props => props.userPhoto && `
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `}

`
  

export default ColumnContainer