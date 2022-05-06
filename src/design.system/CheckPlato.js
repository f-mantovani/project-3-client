import styled from 'styled-components'
import confirmCheck from '../assets/check-3x.png'

const CheckPlato = styled.div`
  width: 1rem;
  height: 1rem;
  z-index: 2;
  background-image: url(${confirmCheck});
  background-size: 1rem .75rem;
  background-repeat: no-repeat;
  margin-right: .75rem;
  cursor: pointer;
  border: none;
  
`

export default CheckPlato