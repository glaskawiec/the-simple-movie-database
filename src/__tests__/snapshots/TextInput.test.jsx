import React from 'react';
import renderer from 'react-test-renderer';
import { ThemeProvider } from 'styled-components';
import themes from '../../themes';
import TextInput from '../../routes/find/textInput/TextInput';

test('TextInput snapshot', () => {
  const tree = renderer
    .create(
      <ThemeProvider theme={themes.light}>
        <TextInput
          label="snap"
          onChange={jest.fn()}
          placeholder="snap"
          value="snap"
        />
      </ThemeProvider>,
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
