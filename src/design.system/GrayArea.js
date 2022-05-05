import styled from "styled-components"

const GrayArea = styled.div`
  width: 100vw;
  height: 200vh;
  background: var(--bg-blur);
  opacity: 0.9;
  position: fixed;
  top:0;
  right: 0;
  transition-duration: 1s;
  z-index: 2;
  margin-top: -3em;
`

export default GrayArea