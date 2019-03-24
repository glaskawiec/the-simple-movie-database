import React, { useState, useEffect } from 'react';
import Heading from '../../Common/Heading';
import FilterForm from './FilterForm/FilterForm';
import apiKey from '../../apiKey';
import MoviesList from '../../Common/MoviesList/MoviesList';

const api = 'https://api.themoviedb.org/3';

const Discover = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [sort, setSort] = useState('popularity.desc');
  const [genres, setGenres] = useState('');
  const [year, setYear] = useState('');

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      const response = await fetch(`${api}/discover/movie?api_key=${apiKey}&language=en-US&sort_by=${sort}&include_adult=false&include_video=false&page=${page}&with_genres=${genres}&year=${year}`);
      const parsedResponse = await response.json();
      setResults(parsedResponse.results);
      setTotal(parsedResponse.total_pages);
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
        movies={results}
      />
    </>
  );
};

export default Discover;
