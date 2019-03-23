import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Movie from './Movie/Movie';
import MoviesWrapper from './MoviesWrapper';
import FilterForm from './Movie/FilterForm/FilterForm';


const Movies = (props) => {
  const [results, setResults] = useState([]);
  // const [sort, setSort] = useState(1);
  // const [genres, setGenres] = useState('All');

  useEffect(() => {
    (async () => {
      const response = await fetch('https://api.themoviedb.org/3/discover/movie?api_key=1c6dfc1666fd2e3d7d8fb65576f5ef82&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1');
      const parsedResponse = await response.json();
      setResults(parsedResponse.results);
    })();
  }, []);

  const formatDescription = (text) => {
    // @TODO: Correct format
    if (text.length > 200) {
      return `${text.substring(0, 200)}...`;
    }
    return text;
  };


  return (
    <>
      <Heading>
        {'Discover movies'}
      </Heading>
      <FilterForm />
      <MoviesWrapper>
        {results.map(movie => (
          <Movie
            key={movie.title}
            posterSrc={`https://image.tmdb.org/t/p/w185_and_h278_bestv2${movie.poster_path}`}
            description={formatDescription(movie.overview)}
            metaInformation={movie.release_date}
            title={movie.title}
          />
        ))}
      </MoviesWrapper>
    </>
  );
};

Movies.propTypes = {

};

export default Movies;
