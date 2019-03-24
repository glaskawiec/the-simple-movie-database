import React from 'react';
import PropTypes from 'prop-types';
import MoviesWrapper from '../Routes/Discover/MoviesWrapper';
import Pagination from '../Routes/Discover/Pagination/Pagination';
import LoadingBars from '../Routes/Discover/Movie/LoadingBars/LoadingBars';
import Movie from '../Routes/Discover/Movie/Movie';

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
    <MoviesWrapper isLoading={isLoading}>

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
    </MoviesWrapper>
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
