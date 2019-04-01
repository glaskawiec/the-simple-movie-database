import React from 'react';
import PropTypes from 'prop-types';
import MoviesListWrapper from './MoviesListWrapper';
import Pagination from '../pagination/Pagination';
import LoadingBars from '../loadingBars/LoadingBars';
import Movie from './movie/Movie';
import ErrorMessage from '../errorMessage/ErrorMessage';
import config from '../../config';
import Heading from '../Heading';

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
  const getPosterSource = (posterPath) => {
    const isMobile = window.innerWidth <= 768;
    if (posterPath) {
      return `${imageServiceUrl}/${isMobile ? mobileImageSizeUrl : desktopImageSizeUrl}${posterPath}`;
    }
    return null;
  };

  if (isError) {
    return (
      <>
        <Pagination
          total={totalPages}
          onPageChange={onPageChange}
          current={currentPage}
        />
        <MoviesListWrapper isError>
          <ErrorMessage />
        </MoviesListWrapper>
        <Pagination
          total={totalPages}
          onPageChange={onPageChange}
          current={currentPage}
        />
      </>
    );
  }

  if (isLoading) {
    return (
      <>
        <Pagination
          total={totalPages}
          onPageChange={onPageChange}
          current={currentPage}
        />
        <MoviesListWrapper
          noData
        >
          <LoadingBars />
        </MoviesListWrapper>
        <Pagination
          total={totalPages}
          onPageChange={onPageChange}
          current={currentPage}
        />
      </>
    );
  }

  if (!movies) {
    return <MoviesListWrapper />;
  }

  if (movies.length <= 0) {
    return (
      <>
        <Pagination
          total={totalPages}
          onPageChange={onPageChange}
          current={currentPage}
        />
        <MoviesListWrapper
          noData
        >
          <Heading>
            {'No movies found'}
          </Heading>
        </MoviesListWrapper>
        <Pagination
          total={totalPages}
          onPageChange={onPageChange}
          current={currentPage}
        />
      </>
    );
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
        {movies.map(movie => (
          <Movie
            key={movie.id}
            id={movie.id}
            posterSrc={getPosterSource(movie.posterPath)}
            description={formatDescription(movie.description)}
            metaInformation={movie.releaseDate}
            title={movie.title}
          />
        ))}
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
  movies: null,
};

export default MoviesList;
