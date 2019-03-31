import React from 'react';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import FilterForm from '../../routes/discover/filterForm/FilterForm';

describe('FilterForm component tests', () => {
  it('should call proper onChange handler after select changed', () => {
    const props = {
      onYearChange: jest.fn(),
      onSortChange: jest.fn(),
      onGenresChange: jest.fn(),
      year: '',
      sort: '',
      genres: '',
    };

    const wrapper = shallow(<FilterForm {...props} />);

    const sortSelect = wrapper.find({ label: 'Sort By' });
    const yearSelect = wrapper.find({ label: 'Year' });
    const genresSelect = wrapper.find({ label: 'Genres' });

    sortSelect.simulate('change', { target: { value: 'sort' } });
    yearSelect.simulate('change', { target: { value: 'year' } });
    genresSelect.simulate('change', { target: { value: 'genre' } });

    expect(props.onYearChange.mock.calls.length).to.equal(1);
    expect(props.onSortChange.mock.calls.length).to.equal(1);
    expect(props.onGenresChange.mock.calls.length).to.equal(1);
  });
});
