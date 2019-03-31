import React, { useEffect } from 'react';
import { useHoux } from 'houx';
import Heading from '../../Common/Heading';
import FilterForm from './FilterForm/FilterForm';
import MoviesList from '../../Common/MoviesList/MoviesList';
import {
  discoverSetOptions,
  discoverSetPagination,
} from '../../Flux/Actions/discover';
import { requestApi, requestClear, requestError } from '../../Flux/Actions/requests';
import { requestsIds } from '../../Flux/Reducers/requests';

const Discover = () => {
  const { state, dispatch } = useHoux();
  const { options, pagination } = state.discover;
  const { isPending, hadError, responseData } = state.requests.discover;
  const { year, sort, genres } = options;
  const { current, total } = pagination;

  useEffect(() => {
    dispatch(requestApi(requestsIds.discover, {
      endpoint: '/discover/movie',
      queryParameters: {
        primary_release_year: year,
        sort_by: sort,
        page: pagination.current,
        with_genres: genres,
      },
    }, (responsedData) => {
      // eslint-disable-next-line camelcase
      const { errors, total_pages } = responsedData;
      if (errors) {
        return dispatch(requestError(requestsIds.discover, errors));
      }
      return dispatch(discoverSetPagination({ total: total_pages }));
    }));
    return () => {
      dispatch(requestClear(requestsIds.discover));
    };
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
        isLoading={isPending}
        isError={hadError}
        movies={responseData.results}
      />
    </>
  );
};

export default Discover;
