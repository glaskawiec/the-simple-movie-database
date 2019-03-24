import React from 'react';
import PropTypes from 'prop-types';
import MoviesListWrapper from './MoviesListWrapper';
import Pagination from './Pagination/Pagination';
import LoadingBars from './Movie/LoadingBars/LoadingBars';
import Movie from './Movie/Movie';
import ErrorMessage from './Movie/ErrorMessage/ErrorMessage';

const formatDescription = (text) => {
  // @TODO: Correct format
  if (text.length > 150) {
    return `${text.substring(0, 150)}...`;
  }
  return text;
};

const mobileSrc = 'w1000_and_h563_face';
const desktopSrc = 'w185_and_h278_bestv2';

const MoviesList = ({
  movies, isLoading, totalPages, currentPage, onPageChange, isError,
}) => {
  const isMobile = window.innerWidth <= 768;
  let content;
  if (isError) {
    content = <ErrorMessage />;
  } else if (isLoading) {
    content = <LoadingBars />;
  } else {
    content = movies.map(movie => (
      <Movie
        key={movie.id}
        posterSrc={`https://image.tmdb.org/t/p/${isMobile ? mobileSrc : desktopSrc}${movie.poster_path}`}
        description={formatDescription(movie.overview)}
        metaInformation={movie.release_date}
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
};

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  isError: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default MoviesList;
