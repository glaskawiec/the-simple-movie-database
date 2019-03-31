import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import Pagination from '../../common/pagination/Pagination';

test('Pagination snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <Pagination
          current={1}
          onPageChange={() => ({})}
          total={1}
        />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
