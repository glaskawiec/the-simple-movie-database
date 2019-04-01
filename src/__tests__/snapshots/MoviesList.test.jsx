import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import themes from '../../themes';
import MoviesList from '../../common/moviesList/MoviesList';

test('MoviesList snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <ThemeProvider theme={themes.light}>
          <MoviesList
            currentPage={1}
            isError={false}
            isLoading={false}
            onPageChange={() => {}}
            totalPages={1}
          />
        </ThemeProvider>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
