import React, { useState, useEffect } from 'react';
import { useHoux } from 'houx';
import Heading from '../../Common/Heading';
import FilterForm from './FilterForm/FilterForm';
import MoviesList from '../../Common/MoviesList/MoviesList';
import requestTheMovieDbApi from '../../utils/requestTheMovieDbApi';
import {
  discoverRequestDataFailure,
  discoverRequestDataIsPending,
  discoverRequestDataSuccess, discoverSetOptions, discoverSetPagination,
} from '../../Flux/Actions/discover';

const Discover = () => {
  const [state, dispatch] = useHoux();
  console.log(state);
  const { options, request, pagination } = state.discover;

  useEffect(() => {
    (async () => {
      try {
        dispatch(discoverRequestDataIsPending());
        const response = await requestTheMovieDbApi({
          endpoint: '/discover/movie',
          queryParameters: {
            primary_release_year: options.year,
            sort_by: options.sort,
            page: pagination.current,
            with_genres: options.genres,
          },
        });
        const parsedResponse = await response.json();
        if (!parsedResponse.results) {
          dispatch(discoverRequestDataFailure({}));
        }
        dispatch(discoverRequestDataSuccess(parsedResponse.results));
        dispatch(discoverSetPagination({
          total: parsedResponse.total_pages,
        }));
      } catch (error) {
        dispatch(discoverRequestDataFailure(error));
      }
    })();
  }, [pagination.current]);

  const onPageChange = (pageNumber) => {
    dispatch(discoverSetPagination({ current: pageNumber }));
  };

  const onSortChange = (value) => {
    dispatch(discoverSetOptions({ sort: value }));
  };

  const onYearChange = (value) => {
    dispatch(discoverSetOptions({ year: value }));
  };

  const onGenresChange = (value) => {
    dispatch(discoverSetOptions({ genres: value }));
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
        sort={options.sort}
        genres={options.genres}
        year={options.year}
      />
      <MoviesList
        totalPages={pagination.total}
        onPageChange={onPageChange}
        currentPage={pagination.current}
        isLoading={request.isPending}
        isError={request.hadError}
        movies={request.responseData}
      />
    </>
  );
};

export default Discover;
