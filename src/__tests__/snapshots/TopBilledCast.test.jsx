import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import TopBilledCast from '../../routes/movie/topBilledCast/TopBilledCast';

test('TopBilledCast snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <TopBilledCast />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
