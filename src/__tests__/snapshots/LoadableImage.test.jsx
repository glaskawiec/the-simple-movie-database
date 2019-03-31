import React from 'react';
import renderer from 'react-test-renderer';
import LoadableImage from '../../common/loadableImage/LoadableImage';

test('LoadableImage snapshot', () => {
  const tree = renderer
    .create(<LoadableImage />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
