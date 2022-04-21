import styled from 'styled-components'

export const Body = styled.p`
  font-style: normal;
  font-weight: var(--fw-300);
  font-size: var(--fs-medium);
  line-height: var(--fs-large);
  color: var(--font-color);

  ${(props) => props.done && `
    font-style: italic;
    font-weight: var(--fw-400);
    font-size: var(--fs-medium);
    line-height: var(--fs-large);
    color: var(--font-color);
    text-decoration-line: line-through;;
  `}
  
  ${(props) =>props.muted && `
    color: rgba(241, 241, 241, 0.5);
  `}
`


