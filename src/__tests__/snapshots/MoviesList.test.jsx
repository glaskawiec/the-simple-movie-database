import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import MoviesList from '../../common/moviesList/MoviesList';

test('MoviesList snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <MoviesList
          currentPage={1}
          isError={false}
          isLoading={false}
          onPageChange={() => {}}
          totalPages={1}
        />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
