import React from 'react';
import PropTypes from 'prop-types';
import FilterFormWrapper from './FilterFormWrapper';
import Select from '../../../common/select/Select';
import yearOptions from './yearOptions';
import sortOptions from './sortOptions';
import genresOptions from './genresOptions';

const FilterForm = ({
  onYearChange,
  onSortChange,
  onGenresChange,
  year,
  sort,
  genres,
}) => (
  <FilterFormWrapper>
    <Select
      onChange={onSortChange}
      label="Sort By"
      options={sortOptions}
      value={sort}
    />
    <Select
      onChange={onYearChange}
      label="Year"
      options={yearOptions}
      value={year}
    />

    <Select
      onChange={onGenresChange}
      label="Genres"
      options={genresOptions}
      value={genres}
    />
  </FilterFormWrapper>
);

FilterForm.propTypes = {
  onYearChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onGenresChange: PropTypes.func.isRequired,
  year: PropTypes.string.isRequired,
  sort: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
};

export default FilterForm;
