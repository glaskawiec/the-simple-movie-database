/* eslint-disable react/forbid-foreign-prop-types */
import React from 'react';
import PropTypes from 'prop-types';
import { shallow } from 'enzyme';
import { expect } from 'chai';
import { PureMoviesList } from '../../common/moviesList/MoviesList';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import LoadingBars from '../../common/loadingBars/LoadingBars';
import Movie from '../../common/moviesList/movie/Movie';
import NoDataMessage from '../../common/NoDataMessage';

describe('MovieList component tests', () => {
  it('should render only error message when error occurred', () => {
    PureMoviesList.propTypes.history = PropTypes.func.isRequired;

    const props = {
      movies: [],
      isLoading: false,
      totalPages: 10,
      currentPage: 1,
      onPageChange: jest.fn(),
      isError: true,
      history: jest.fn(),
    };

    const wrapper = shallow(<PureMoviesList {...props} />);

    const noDataMessage = wrapper.find(NoDataMessage);
    const errorMessage = wrapper.find(ErrorMessage);
    const loadingBars = wrapper.find(LoadingBars);
    const movies = wrapper.find(Movie);

    expect(movies).to.have.lengthOf(0);
    expect(noDataMessage).to.have.lengthOf(0);
    expect(errorMessage).to.have.lengthOf(1);
    expect(loadingBars).to.have.lengthOf(0);
  });

  it('should render only no data message when movies list is empty and there is no errors', () => {
    PureMoviesList.propTypes.history = PropTypes.func.isRequired;

    const props = {
      movies: [],
      isLoading: false,
      totalPages: 10,
      currentPage: 1,
      onPageChange: jest.fn(),
      isError: false,
      history: jest.fn(),
    };

    const wrapper = shallow(<PureMoviesList {...props} />);

    const noDataMessage = wrapper.find(NoDataMessage);
    const errorMessage = wrapper.find(ErrorMessage);
    const loadingBars = wrapper.find(LoadingBars);
    const movies = wrapper.find(Movie);

    expect(movies).to.have.lengthOf(0);
    expect(noDataMessage).to.have.lengthOf(1);
    expect(errorMessage).to.have.lengthOf(0);
    expect(loadingBars).to.have.lengthOf(0);
  });

  it('should render only loading bars when data is loading and there is no errors', () => {
    PureMoviesList.propTypes.history = PropTypes.func.isRequired;

    const props = {
      movies: null,
      isLoading: true,
      totalPages: 10,
      currentPage: 1,
      onPageChange: jest.fn(),
      isError: false,
      history: jest.fn(),
    };

    const wrapper = shallow(<PureMoviesList {...props} />);

    const noDataMessage = wrapper.find(NoDataMessage);
    const errorMessage = wrapper.find(ErrorMessage);
    const loadingBars = wrapper.find(LoadingBars);
    const movies = wrapper.find(Movie);

    expect(movies).to.have.lengthOf(0);
    expect(noDataMessage).to.have.lengthOf(0);
    expect(errorMessage).to.have.lengthOf(0);
    expect(loadingBars).to.have.lengthOf(1);
  });

  it('should render proper number of movies when data fetching is done and there is no errors', () => {
    PureMoviesList.propTypes.history = PropTypes.func.isRequired;

    const props = {
      movies: [
        {
          title: 'testTitle',
          description: 'testDesc',
          id: 1,
          onClick: jest.fn(),
          posterPath: null,
          releaseDate: 'testReleaseData',
        },
      ],
      isLoading: false,
      totalPages: 10,
      currentPage: 1,
      onPageChange: jest.fn(),
      isError: false,
      history: jest.fn(),
    };

    const wrapper = shallow(<PureMoviesList {...props} />);

    const noDataMessage = wrapper.find(NoDataMessage);
    const errorMessage = wrapper.find(ErrorMessage);
    const loadingBars = wrapper.find(LoadingBars);
    const movies = wrapper.find(Movie);

    expect(movies).to.have.lengthOf(1);
    expect(noDataMessage).to.have.lengthOf(0);
    expect(errorMessage).to.have.lengthOf(0);
    expect(loadingBars).to.have.lengthOf(0);
  });
});
