import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import themes from '../../themes';

test('ErrorMessage snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <ErrorMessage />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
