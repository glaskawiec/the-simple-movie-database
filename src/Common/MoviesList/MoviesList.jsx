import React from 'react';
import PropTypes from 'prop-types';
import MoviesListWrapper from './MoviesListWrapper';
import Pagination from '../Pagination/Pagination';
import LoadingBars from '../LoadingBars/LoadingBars';
import Movie from './Movie/Movie';
import ErrorMessage from '../ErrorMessage/ErrorMessage';
import config from '../../config';
import parseDate from '../../utils/parseDate';

const { imageServiceUrl, mobileImageSizeUrl, desktopImageSizeUrl } = config;

const formatDescription = (text) => {
  // @TODO: Correct format
  if (text.length > 150) {
    return `${text.substring(0, 150)}...`;
  }
  return text;
};

const MoviesList = React.memo(({
  movies,
  isLoading,
  totalPages,
  currentPage,
  onPageChange,
  isError,
}) => {
  let content;

  const getPosterSource = (posterPath) => {
    const isMobile = window.innerWidth <= 768;
    if (posterPath) {
      return `${imageServiceUrl}/${isMobile ? mobileImageSizeUrl : desktopImageSizeUrl}${posterPath}`;
    }
    return null;
  };

  if (isError) {
    content = <ErrorMessage />;
  } else if (isLoading || !movies) {
    content = <LoadingBars />;
  } else {
    content = movies.map(movie => (
      <Movie
        key={movie.id}
        id={movie.id}
        posterSrc={getPosterSource(movie.poster_path)}
        description={formatDescription(movie.overview)}
        metaInformation={parseDate(movie.release_date)}
        title={movie.title}
      />
    ));
  }
  return (
    <>
      <Pagination
        total={totalPages}
        onPageChange={onPageChange}
        current={currentPage}
      />
      <MoviesListWrapper
        withPagination={totalPages > 1}
        isError={isError}
        isLoading={isLoading}
      >
        {content}
      </MoviesListWrapper>
      <Pagination
        total={totalPages}
        onPageChange={onPageChange}
        current={currentPage}
      />
    </>
  );
});

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

MoviesList.defaultProps = {
  movies: [],
};

export default MoviesList;
