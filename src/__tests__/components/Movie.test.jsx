/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { HouxProvider } from 'houx';
import Movie from '../../routes/movie/Movie';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingScreen from '../../common/loadingScreen/LoadingScreen';

describe('Movie component tests', () => {
  it('should not render error message and loading bars when request is not pending and had no errors', () => {
    Movie.propTypes.match = PropTypes.object.isRequired;

    const preparedState = {
      details: {
        hadError: false,
        isPending: false,
      },
      credits: {
        hadError: false,
        isPending: false,
      },
    };

    const reducers = {
      requests: () => preparedState,
    };

    const props = {
      match: { params: { id: 1 } },
    };

    const wrapper = shallow(
      <HouxProvider reducers={reducers}>
        <Movie {...props} />
      </HouxProvider>,
    );

    const loadingScreen = wrapper.find(Movie).find(LoadingScreen);
    const errorMessage = wrapper.find(Movie).find(ErrorMessage);
    expect(loadingScreen).to.have.lengthOf(0);
    expect(errorMessage).to.have.lengthOf(0);
  });
});
