import React from 'react';
import PropTypes from 'prop-types';
import MoviesListWrapper from './MoviesListWrapper';
import Pagination from './Pagination/Pagination';
import LoadingBars from './Movie/LoadingBars/LoadingBars';
import Movie from './Movie/Movie';

const formatDescription = (text) => {
  // @TODO: Correct format
  if (text.length > 200) {
    return `${text.substring(0, 200)}...`;
  }
  return text;
};

const MoviesList = ({
  movies, isLoading, totalPages, currentPage, onPageChange,
}) => (
  <>
    <Pagination
      total={totalPages}
      onPageChange={onPageChange}
      current={currentPage}
    />
    <MoviesListWrapper isLoading={isLoading}>

      {isLoading
        ? <LoadingBars />
        : movies.map(movie => (
          <Movie
            key={movie.title}
            posterSrc={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
            description={formatDescription(movie.overview)}
            metaInformation={movie.release_date}
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

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object).isRequired,
  isLoading: PropTypes.bool.isRequired,
  totalPages: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default MoviesList;
