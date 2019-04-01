import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import MoviesListWrapper from './MoviesListWrapper';
import Pagination from '../pagination/Pagination';
import LoadingBars from '../loadingBars/LoadingBars';
import Movie from './movie/Movie';
import ErrorMessage from '../errorMessage/ErrorMessage';
import config from '../../config';
import slugify from '../../utils/slugify';
import NoDataMessage from '../NoDataMessage';

const { imageServiceUrl, mobileImageSizeUrl, desktopImageSizeUrl } = config;

const MoviesList = ({
  movies,
  isLoading,
  totalPages,
  currentPage,
  onPageChange,
  isError,
  history,
}) => {
  const getPosterSource = (posterPath) => {
    const isMobile = window.innerWidth <= 768;
    if (posterPath) {
      return `${imageServiceUrl}/${isMobile ? mobileImageSizeUrl : desktopImageSizeUrl}${posterPath}`;
    }
    return null;
  };

  const onMovieClick = (id, title) => {
    history.push({ pathname: (`/movie/${id}/${slugify(title)}`) });
  };

  const generateRender = (centerContent, content) => (
    <>
      <Pagination
        total={totalPages}
        onPageChange={onPageChange}
        current={currentPage}
      />
      <MoviesListWrapper centerContent={centerContent}>
        {content}
      </MoviesListWrapper>
      <Pagination
        total={totalPages}
        onPageChange={onPageChange}
        current={currentPage}
      />
    </>
  );

  if (isError) {
    return generateRender(true, <ErrorMessage />);
  }

  if (isLoading) {
    return generateRender(true, <LoadingBars />);
  }

  if (!movies) {
    return <MoviesListWrapper />;
  }

  if (movies.length <= 0) {
    return generateRender(true,
      <NoDataMessage />);
  }


  return generateRender(false, movies
    .map(movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        onClick={() => onMovieClick(movie.id, movie.title)}
        posterSrc={getPosterSource(movie.posterPath)}
        description={movie.description}
        metaInformation={movie.releaseDate}
        title={movie.title}
      />
    )));
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  history: ReactRouterPropTypes.history.isRequired,
};

MoviesList.defaultProps = {
  movies: null,
};

const MoviesListWithRouter = React.memo(withRouter(MoviesList));

export {
  MoviesListWithRouter as default,
  MoviesList as PureMoviesList,
};
