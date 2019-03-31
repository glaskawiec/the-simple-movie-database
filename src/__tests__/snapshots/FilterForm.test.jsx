import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import FilterForm from '../../routes/discover/filterForm/FilterForm';

test('FilterForm snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <FilterForm
          genres="snap"
          onGenresChange={jest.fn()}
          onSortChange={jest.fn()}
          onYearChange={jest.fn()}
          sort="snap"
          year="snap"
        />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
