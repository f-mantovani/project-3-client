import styled from 'styled-components'

const SearchInputPlato = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15rem;
  width: 80%;
  font-style: normal;
  font-weight: var(--fw-400);
  font-size: var(--fs-sub-title);
  color: var(--font-color);
  border-radius: 1rem 1rem 0px 0px;
  background: var(--bg-clr);
  position: fixed;
  left: 50%;
  transition: 1s;
  transform: translateX(-50%);
  bottom: 0;
  transform: translate(-50%);
  left: 50%;
  z-index: 2;

  & > div {
    display: flex;
    align-items: center;
    margin-top: 2rem;
  }

  @media (min-width: 600px ){
    width: 60%;
    }

  .search-input{ 
    width: 17rem;
    background-color: transparent;
    padding: 0.5em;
    border: none;
    color: var(--font-color);
    font: inherit;
    height: var(--fs-sub-title); 
  }

  .search-input::placeholder {
    font: inherit;
  }

  .search-label{
    opacity: 0;
  }

  .search-input:focus {
    outline: none;
  }
`

export default SearchInputPlato
