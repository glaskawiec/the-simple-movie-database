import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import Footer from '../../layout/footer/Footer';

test('Footer snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <Footer />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
