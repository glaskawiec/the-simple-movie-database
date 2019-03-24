import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Heading from '../../Common/Heading';
import TextInput from './TextInput/TextInput';
import apiKey from '../../apiKey';
import Pagination from '../Discover/Pagination/Pagination';
import MoviesList from '../../Common/MoviesList';
import SearchInputForm from './SearchInputForm';

const api = 'https://api.themoviedb.org/3';
const fetchDelay = 500;

const Find = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);
  const [searchText, setSearchText] = useState('');

  const isSearchBoxEmpty = searchText.length <= 0;

  let timeout;

  useEffect(() => {
    if (!isSearchBoxEmpty) {
      timeout = setTimeout(() => {
        console.log('Fetch fired');
        (async () => {
          setIsLoading(true);
          const response = await fetch(`${api}/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=${page}&include_adult=false`);
          const parsedResponse = await response.json();
          setResults(parsedResponse.results);
          setTotal(parsedResponse.total_pages);
          setIsLoading(false);
        })();
      }, fetchDelay);
    }
  }, [searchText, page]);

  const onPageChange = (pageNumber) => {
    setIsLoading(true);
    setPage(pageNumber);
  };


  const onSearchInputChange = (event) => {
    clearTimeout(timeout);
    const newValue = event.target.value;
    if (newValue.length > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    setPage(1);
    setSearchText(newValue);
  };

  return (
    <>
      <Heading>
        {'Find movies'}
      </Heading>
      <SearchInputForm>
        <TextInput
          onChange={onSearchInputChange}
          placeholder="Search for a movie..."
          label="Search"
          value={searchText}
        />
      </SearchInputForm>
      <Pagination
        total={total}
        onPageChange={onPageChange}
        current={page}
      />
      <MoviesList
        isLoading={isLoading}
        movies={results}
      />
      <Pagination
        total={total}
        onPageChange={onPageChange}
        current={page}
      />
    </>
  );
};

Find.propTypes = {

};

export default Find;
