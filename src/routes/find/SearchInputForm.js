import styled from 'styled-components';

const SearchInputForm = styled.form`
  margin-top: 2em;
  
  @media (max-width: 576px) {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export default SearchInputForm;
