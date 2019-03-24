import React from 'react';
import PropTypes from 'prop-types';
import FilterFormWrapper from './FilterFormWrapper';
import Select from './Select/Select';
import TextInput from './TextInput/TextInput';


const yearOptions = [
  {
    label: '2019',
    value: 2019,
  },
  {
    label: '2018',
    value: 2018,
  },
  {
    label: '2017',
    value: 2017,
  },
];

const sortOptions = [
  {
    label: 'Popularity Descending',
    value: 'popularity.desc',
  },
  {
    label: 'Popularity Ascending',
    value: 'popularity.asc',
  },
];

const genresOptions = [
  {
    label: 'All',
    value: 'all',
  },
  {
    label: 'Action',
    value: 'action',
  },
];

const FilterForm = ({
  onYearChange, onSortChange, onGenresChange, onKeywordsChange, year, sort, genres, keywords,
}) => (
  <FilterFormWrapper>
    <TextInput
      onChange={onKeywordsChange}
      placeholder="Filter by keywords..."
      label="Keywords"
      value={keywords}
    />
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
  onKeywordsChange: PropTypes.func.isRequired,
  onSortChange: PropTypes.func.isRequired,
  onGenresChange: PropTypes.func.isRequired,
  year: PropTypes.number.isRequired,
  sort: PropTypes.string.isRequired,
  genres: PropTypes.string.isRequired,
  keywords: PropTypes.string.isRequired,
};

export default FilterForm;
