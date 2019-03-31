import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import ThemeToggle from '../../common/themeToggle/ThemeToggle';

test('ThemeToggle snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <ThemeToggle />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
