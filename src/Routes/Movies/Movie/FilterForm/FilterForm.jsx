import React from 'react';
import FilterFormWrapper from './FilterFormWrapper';
import Select from './Select/Select';

const FilterForm = props => (
  <FilterFormWrapper>
    <Select label="Year" options={['2019', '2018', '2017']} />
    <Select label="Sort By" options={['Popularity Descending', 'Popularity Ascending']} />
    <Select label="Genres" options={['All', 'Action', 'Adventure']} />
  </FilterFormWrapper>
);

FilterForm.propTypes = {

};

export default FilterForm;
