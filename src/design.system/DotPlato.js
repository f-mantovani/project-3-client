import styled from 'styled-components'

const DotPlato = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 100%;
  background: #f1f1f1;
  margin: 1.5px 0;

  ${(props) =>props.required &&`
    position: absolute;
    background: #4980e9;  
    right: 8px;
    top: 20%; 
  `}
`

export default DotPlato
