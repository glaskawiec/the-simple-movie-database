import React, { useEffect, useRef } from 'react';
import { useHoux } from 'houx';
import Heading from '../../common/Heading';
import FilterForm from './filterForm/FilterForm';
import MoviesList from '../../common/moviesList/MoviesList';
import {
  discoverSetMovies,
  discoverSetOptions,
  discoverSetPagination,
} from '../../flux/actions/discover';
import { requestApi, requestError } from '../../flux/actions/requests';
import { requestsIds } from '../../flux/reducers/requests';
import jsonToModel from '../../utils/jsonToModel';
import moviesListModel from '../../models/moviesList';

const Discover = () => {
  const { state, dispatch } = useHoux();
  const isMounted = useRef(false);
  const { options, pagination, movies } = state.discover;
  const { isPending, hadError } = state.requests.discover;
  const { year, sort, genres } = options;
  const { current, total } = pagination;

  useEffect(() => {
    if (isMounted.current || !movies) {
      dispatch(requestApi(requestsIds.discover, {
        endpoint: '/discover/movie',
        queryParameters: {
          primary_release_year: year,
          sort_by: sort,
          page: pagination.current,
          with_genres: genres,
        },
      }, (rawData) => {
        const { errors } = rawData;

        if (errors) {
          return dispatch(requestError(requestsIds.discover, errors));
        }

        try {
          const { movies: newMovies, totalPages } = jsonToModel(rawData, moviesListModel);
          dispatch(discoverSetMovies(newMovies));
          return dispatch(discoverSetPagination({ total: totalPages }));
        } catch (error) {
          return dispatch(requestError(requestsIds.discover, error));
        }
      }));
    }

    isMounted.current = true;
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
        movies={movies}
      />
    </>
  );
};

export default Discover;
