import React, { useState, useEffect } from 'react';
import Heading from '../../Common/Heading';
import FilterForm from './FilterForm/FilterForm';
import MoviesList from '../../Common/MoviesList/MoviesList';
import requestTheMovieDbApi from '../../utils/requestTheMovieDbApi';

const Discover = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState('popularity.desc');
  const [genres, setGenres] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    (async () => {
      setIsError(false);
      setIsLoading(true);
      try {
        const request = {
          endpoint: '/discover/movie',
          queryParameters: {
            primary_release_year: year,
            sort_by: sort,
            page,
            with_genres: genres,
          },
        };
        const response = await requestTheMovieDbApi(request);
        const parsedResponse = await response.json();
        if (!parsedResponse.results) {
          setIsError(true);
        }
        setResults(parsedResponse.results);
        setTotal(parsedResponse.total_pages);
      } catch (error) {
        setIsError(true);
      }
      setIsLoading(false);
    })();
  }, [page, year, genres, sort]);

  const onPageChange = (pageNumber) => {
    setIsLoading(true);
    setPage(pageNumber);
  };

  const onSortChange = (value) => {
    setIsLoading(true);
    setSort(value);
  };

  const onYearChange = (value) => {
    setIsLoading(true);
    setYear(value);
  };

  const onGenresChange = (value) => {
    setIsLoading(true);
    setGenres(value);
  };

  return (
    <>
      <Heading>
        {'Discover movies'}
      </Heading>
      <FilterForm
        onGenresChange={event => onGenresChange(event.target.value)}
        onSortChange={event => onSortChange(event.target.value)}
        onYearChange={event => onYearChange(event.target.value)}
        sort={sort}
        genres={genres}
        year={year}
      />
      <MoviesList
        totalPages={total}
        onPageChange={onPageChange}
        currentPage={page}
        isLoading={isLoading}
        isError={isError}
        movies={results}
      />
    </>
  );
};

export default Discover;
