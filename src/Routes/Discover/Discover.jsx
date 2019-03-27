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
  const { options, request, pagination } = state.discover;
  const { year, sort, genres } = options;
  const { current, total } = pagination;

  useEffect(() => {
    (async () => {
      try {
        dispatch(discoverRequestDataIsPending());
        const response = await requestTheMovieDbApi({
          endpoint: '/discover/movie',
          queryParameters: {
            primary_release_year: year,
            sort_by: sort,
            page: pagination.current,
            with_genres: genres,
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
  }, [current, sort, genres, year]);

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
        sort={sort}
        genres={genres}
        year={year}
      />
      <MoviesList
        totalPages={total}
        onPageChange={onPageChange}
        currentPage={current}
        isLoading={request.isPending}
        isError={request.hadError}
        movies={request.responseData}
      />
    </>
  );
};

export default Discover;
