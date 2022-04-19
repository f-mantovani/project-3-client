import styled from 'styled-components'

const ButtonPlato = styled.div`
  cursor: pointer;
  
  ${(props) =>
    props.login &&
    `
            font-style: normal;
            font-weight: var(--fw-600);
            font-size: var(--fs-medium);
            line-height: var(--fs-medium);
            color: var(--font-color);
            letter-spacing: 0.04em;
            text-transform: uppercase;
            background: 
              linear-gradient(180deg, #77c4ca 0%, #2b546e 100%),
              linear-gradient(180deg, #77cabb 0%, #1d4941 100%), #3c9a89;
            box-shadow: 0px 5px 7px rgba(74, 134, 138, 0.25);
            border-radius: 22px;
            padding: 1em 1.5em;
            
          
            :hover {
              background: #5491A0;
            }        
        `}
`

export default ButtonPlato
