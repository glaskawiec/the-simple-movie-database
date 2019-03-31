import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import FeaturedCrew from '../../routes/movie/featuredCrew/FeaturedCrew';

test('FeaturedCrew snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <FeaturedCrew />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
