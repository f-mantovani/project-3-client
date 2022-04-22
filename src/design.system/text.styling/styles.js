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

export const H1 = styled.h1`
  font-style: normal;
  font-weight: var(--fw-400);
  font-size: var(--fs-main-title);
  line-height: 120%;
  color: var(--font-color);
` 

export const H2 = styled.h2`
  font-style: normal;
  font-weight: var(--fw-400);
  font-size: var(--fs-sub-title);
  color: var(--font-color);
`

export const H4 = styled.h4`
  font-style: normal;
  font-weight: var(--fw-400);
  font-size: var(--fs-xtra-large);
  line-height: 1;
  color: var(--font-color);
` 


export const Subtitle2 = styled.p`
  font-style: normal;
  font-weight: var(--fw-600);
  font-size: var(--fs-large);
  line-height: var(--fs-large);
  color: var(--font-color);
  
  ${(props) => props.done &&`
    font-style: italic;
    font-weight: var(--fw-600);
    font-size: var(--fs-large);
    line-height: var(--fs-large);
    color: var(--font-color);
    text-decoration-line: line-through;
  `}
  ${(props) => props.muted &&`
    color: rgba(241, 241, 241, 0.5);
  `}
`

export const Label = styled.p`
  font-style: normal;
  font-weight: var(--fw-400);
  font-size: var(--fs-large);
  line-height: var(--fs-large);
  color: var(--font-color);

  ${(props) => props.muted &&`
    font-style: normal;
    font-weight: var(--fw-400);
    font-size: var(--fs-small);
    line-height: var(--fs-large);
    color: var(--font-color);
  `}

  ${(props) => props.muted &&`
    color: rgba(241, 241, 241, 0.5);
  `}
` 
export const ButtonLabel = styled.p`
  font-style: normal;
  font-weight: var(--fw-600);
  font-size: var(--fs-medium);
  line-height: var(--fs-medium);
  letter-spacing: 0.04em;
  text-transform: uppercase;
` 

export const Overline = styled.p`
  font-style: normal;
  font-weight: var(--fw-300);
  font-size: var(--fs-xtra-small);
  line-height: var(--fs-xtra-small);
  color: var(--font-color);
  letter-spacing: 0.015em;
  text-transform: uppercase;

  ${props => props.destructive && `
    color: #E05252;
  `}
` 


