import styled from 'styled-components'

const SearchInputPlato = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 15rem;
  font-style: normal;
  font-weight: var(--fw-400);
  font-size: var(--fs-sub-title);
  color: var(--font-color);
  border-radius: 1rem 1rem 0px 0px;
  background: var(--bg-clr);
  position: fixed;
  bottom: 0;
  z-index: 100;
  transition: ease 1s;


  & > div {
    display: flex;
    align-items: center;
    margin-top: 2rem;
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
