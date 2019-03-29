import React, { useEffect } from 'react';
import { useHoux } from 'houx';
import Heading from '../../Common/Heading';
import FilterForm from './FilterForm/FilterForm';
import MoviesList from '../../Common/MoviesList/MoviesList';
import {
  discoverSetOptions,
  discoverSetPagination,
  discoverRequestData,
} from '../../Flux/Actions/discover';

const Discover = () => {
  const { state, dispatch } = useHoux();
  const { options, request, pagination } = state.discover;
  const { year, sort, genres } = options;
  const { current, total } = pagination;

  useEffect(() => {
    dispatch(discoverRequestData({
      endpoint: '/discover/movie',
      queryParameters: {
        primary_release_year: year,
        sort_by: sort,
        page: pagination.current,
        with_genres: genres,
      },
    }));
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
