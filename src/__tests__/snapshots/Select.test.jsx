import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import Select from '../../routes/discover/filterForm/Select/Select';

test('Select snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <Select
          label="snap"
          onChange={jest.fn()}
          options={[{ label: 'snap', value: 'snap' }]}
          value="snap"
        />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
