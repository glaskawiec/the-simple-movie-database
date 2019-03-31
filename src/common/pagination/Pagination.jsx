import React from 'react';
import PropTypes from 'prop-types';
import PaginationStyled from './PaginationStyled';
import PaginationWrapper from './PaginationWrapper';
import PageNumber from './PageNumber';
import Button from './Button';

const Pagination = ({ total, current, onPageChange }) => {
  const calculatePages = () => {
    const pagesToShow = [1, total];

    if (current !== 1 && current !== total) {
      pagesToShow.push(current);
    }

    for (let i = 1; i < 4; i += 1) {
      if (current + i < total) {
        pagesToShow.push(current + i);
      }

      if (current - i > 1) {
        pagesToShow.push(current - i);
      }
    }

    return pagesToShow.sort((a, b) => a - b);
  };

  const pagesToShow = calculatePages();

  if (total <= 1) {
    return null;
  }

  return (
    <PaginationWrapper>
      <PaginationStyled>
        {current > 1 ? <Button onClick={() => onPageChange(current - 1)}>← Previous</Button> : null}
        {pagesToShow.map(page => (
          <PageNumber
            key={page}
            onClick={() => onPageChange(page)}
            isActive={page === current}
          >
            {page}
          </PageNumber>
        ))}
        {current < total ? <Button onClick={() => onPageChange(current + 1)}>Next →</Button> : null}
      </PaginationStyled>
    </PaginationWrapper>
  );
};

Pagination.propTypes = {
  total: PropTypes.number.isRequired,
  current: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Pagination;
