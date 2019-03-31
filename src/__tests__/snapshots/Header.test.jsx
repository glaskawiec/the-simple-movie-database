import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import { MemoryRouter } from 'react-router-dom';
import { HouxProvider } from 'houx';
import themes from '../../themes';
import global from '../../flux/reducers/global';
import discover from '../../flux/reducers/discover';
import find from '../../flux/reducers/find';
import requests from '../../flux/reducers/requests';
import Header from '../../layout/header/Header';

const reducers = {
  global,
  discover,
  find,
  requests,
};

test('Header snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <HouxProvider reducers={reducers}>
          <ThemeProvider theme={themes.light}>
            <Header />
          </ThemeProvider>
        </HouxProvider>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
