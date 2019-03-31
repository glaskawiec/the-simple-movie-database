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
import Layout from '../../layout/Layout';

const reducers = {
  global,
  discover,
  find,
  requests,
};

test('layout snapshot', () => {
  const tree = renderer
    .create(
      <MemoryRouter initialEntries={[{ pathname: '/', key: 'testKey' }]}>
        <HouxProvider reducers={reducers}>
          <ThemeProvider theme={themes.light}>
            <Layout>
              <div />
              <div />
            </Layout>
          </ThemeProvider>
        </HouxProvider>
      </MemoryRouter>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
