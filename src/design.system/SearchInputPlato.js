import styled from 'styled-components'

const SearchInputPlato = styled.div`
  display: flex;
  min-height: 3rem;
  font-style: normal;
  font-weight: var(--fw-400);
  font-size: var(--fs-sub-title);
  color: var(--font-color);

  .search-input{ 
    width: 17rem;
    background-color: transparent;
    padding: 0.5em;
    border: none;
    color: var(--font-color);
    font: inherit;
  }

  .search-input::placeholder {
    opacity: 0;
  }

  .input-label{
    margin-left: 2.5rem;
    margin-top: .5rem;
  }

  
  .search-input:focus + .input-label,
  .search-input:valid + .input-label {
    opacity: 0;
    font-style: normal;
    font-weight: var(--fw-400);
    font-size: var(--fs-small);
    line-height: var(--fs-large);
    color: var(--font-color);
    border: none;
  }

  .search-input:focus {
    outline: none;
  }
`

export default SearchInputPlato
