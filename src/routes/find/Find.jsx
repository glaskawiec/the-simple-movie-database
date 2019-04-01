import React, { useEffect, useState, useRef } from 'react';
import { useHoux } from 'houx';
import Heading from '../../common/Heading';
import TextInput from '../../common/textInput/TextInput';
import SearchInputForm from './SearchInputForm';
import MoviesList from '../../common/moviesList/MoviesList';
import { findSetMovies, findSetPagination, findSetSearchText } from '../../flux/actions/find';
import { requestApi, requestError } from '../../flux/actions/requests';
import { requestsIds } from '../../flux/reducers/requests';
import config from '../../config';
import jsonToModel from '../../utils/jsonToModel';
import moviesListModel from '../../models/moviesList';

const Find = () => {
  const { state, dispatch } = useHoux();
  const { searchText, pagination, movies } = state.find;
  const { hadError } = state.requests.search;
  const [isLoading, setIsLoading] = useState(false);
  const isSearchBoxEmpty = searchText.length <= 0;
  const isMounted = useRef(false);
  let timeout;

  useEffect(() => {
    if (!isSearchBoxEmpty && isMounted.current) {
      timeout = setTimeout(() => {
        setIsLoading(true);
        const request = {
          endpoint: '/search/movie',
          queryParameters: {
            query: searchText,
            page: pagination.current,
          },
        };
        dispatch(requestApi(requestsIds.search, request, (rawData) => {
          setIsLoading(false);
          const { errors } = rawData;
          if (errors) {
            return dispatch(requestError(requestsIds.search, errors));
          }

          try {
            const { movies: newMovies, totalPages } = jsonToModel(rawData, moviesListModel);
            dispatch(findSetMovies(newMovies));
            const newPagination = {
              total: totalPages,
            };
            return dispatch(findSetPagination(newPagination));
          } catch (error) {
            return dispatch(requestError(requestsIds.search, error));
          }
        }));
      }, config.find.fetchDelayMs);
    }
    isMounted.current = true;
  }, [searchText, pagination.current]);

  const onPageChange = (pageNumber) => {
    setIsLoading(true);
    dispatch(findSetPagination({ current: pageNumber }));
  };

  const onSearchInputChange = (event) => {
    clearTimeout(timeout);
    const newValue = event.target.value;
    if (newValue.length > 0) {
      setIsLoading(true);
    } else {
      setIsLoading(false);
    }
    dispatch(findSetPagination({ current: 1 }));
    dispatch(findSetSearchText(newValue));
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
      <MoviesList
        totalPages={pagination.total}
        onPageChange={onPageChange}
        currentPage={pagination.current}
        isLoading={isLoading}
        isError={hadError}
        movies={movies}
      />
    </>
  );
};

export default Find;
