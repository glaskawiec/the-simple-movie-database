import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Heading from './Heading';
import Movie from './Movie/Movie';
import MoviesWrapper from './MoviesWrapper';
import FilterForm from './Movie/FilterForm/FilterForm';
import Pagination from './Pagination/Pagination';
import apiKey from '../../apiKey';
import LoadingBars from './Movie/LoadingBars/LoadingBars';
import LoadingScreen from './Movie/LoadingBars/LoadingScreen';

const api = 'https://api.themoviedb.org/3';

const Movies = (props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState('popularity.desc');
  const [genres, setGenres] = useState('all');
  const [year, setYear] = useState(2019);
  const [query, setQuery] = useState('');


  useEffect(() => {
    console.log('useEffect called');
    (async () => {
      setIsLoading(true);
      const response = await fetch(`${api}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}`);
      const parsedResponse = await response.json();
      setResults(parsedResponse.results);
      setTotal(parsedResponse.total_pages);
      setIsLoading(false);
    })();
  }, [page, year, genres, sort]);

  useEffect(() => {
    if (query.length > 3) {
      (async () => {
        setIsLoading(true);
        const response = await fetch(`${api}/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=1&include_adult=false`);
        const parsedResponse = await response.json();
        setResults(parsedResponse.results);
        setTotal(parsedResponse.total_pages);
        setIsLoading(false);
      })();
    }
  }, [query]);

  const formatDescription = (text) => {
    // @TODO: Correct format
    if (text.length > 200) {
      return `${text.substring(0, 200)}...`;
    }
    return text;
  };

  console.log('render fired');
  return (
    <>
      <Heading>
        {'Discover movies'}
      </Heading>
      <FilterForm
        onGenresChange={event => setGenres(event.target.value)}
        onKeywordsChange={event => setQuery(event.target.value)}
        onSortChange={event => setSort(event.target.value)}
        onYearChange={event => setYear(event.target.value)}
        sort={sort}
        keywords={query}
        genres={genres}
        year={year}
      />
      <Pagination
        total={total}
        setPage={setPage}
        current={page}
      />
      {isLoading
        ? <LoadingScreen><LoadingBars /></LoadingScreen>
        : (
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
        )}
      <Pagination
        total={total}
        setPage={setPage}
        current={page}
      />
    </>
  );
};

Movies.propTypes = {

};

export default Movies;
