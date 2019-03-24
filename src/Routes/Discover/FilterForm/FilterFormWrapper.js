import styled from 'styled-components';

const FilterFormWrapper = styled.form`
    margin-top: 30px;
    margin-bottom: 30px;
    
    @media (max-width: 576px) {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export default FilterFormWrapper;
