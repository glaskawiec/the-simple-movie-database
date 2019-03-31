import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import LoadingBars from '../../common/loadingBars/LoadingBars';
import themes from '../../themes';

test('LoadingBars snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <LoadingBars />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
