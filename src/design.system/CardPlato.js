import styled from 'styled-components'

const CardPlato = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background: rgba(241, 241, 241, 0.05);
  padding: 0.75rem 0 0.75rem 1rem;
  min-height: 4rem;
  margin: 0.25em 0;
  position: relative;

  & > span{
    content: '';
    cursor: pointer;
    position: absolute;
    width: 90%;
    height: 100%;
    left: 0;
    z-index: 1;
  }

  ${(props) => props.muted && `
    .task-label{
      color: rgba(241, 241, 241, 0.5);
    }
    .custom-checkbox {
      color: rgba(241, 241, 241, 0.5);
    }
  `}
`

export default CardPlato
