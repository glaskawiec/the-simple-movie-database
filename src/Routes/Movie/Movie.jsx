import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useHoux } from 'houx';
import { movieRequestCredits, movieRequestDetails } from '../../Flux/Actions/movie';
import config from '../../config';
import LoadableImage from '../../Common/LoadableImage/LoadableImage';
import Title from './Title';
import MovieWrapper from './MovieWrapper';
import ImageWrapper from './ImageWrapper';
import ContentWrapper from './ContentWrapper';
import Genres from './Genres';
import Runtime from './Runtime';
import Description from './Description';
import TopBilledCast from './TopBilledCast/TopBilledCast';
import LoadingBars from '../../Common/LoadingBars/LoadingBars';
import FeaturedCrew from './FeaturedCrew/FeaturedCrew';
import ReleaseDate from './ReleaseDate';
import parseDate from '../../utils/parseDate';

const { imageServiceUrl, largeImageSizeUrl } = config;
const Movie = ({ location }) => {
  const { id } = location;
  const { state, dispatch } = useHoux();
  const {
    poster_path, original_title, genres, runtime, overview, release_date,
  } = state.movie.details.request.responseData;

  const { crew, cast } = state.movie.credits.request.responseData;

  useEffect(() => {
    dispatch(movieRequestDetails({
      endpoint: `/movie/${id}`,
    }));

    dispatch(movieRequestCredits({
      endpoint: `/movie/${id}/credits`,
    }));
  }, [true]);

  const getGenres = (genresX = []) => genresX.map(genre => genre.name).join(', ');

  const { isPending: isDetailsRequestPending } = state.movie.details.request;
  const { isPending: isCreditsRequestPending } = state.movie.credits.request;

  const isDataRequestPending = isDetailsRequestPending || isCreditsRequestPending;


  // @TODO: Add error handling
  if (isDataRequestPending) {
    return <LoadingBars />;
  }


  return (
    <>
      <MovieWrapper>
        <ImageWrapper>
          <LoadableImage
            src={`${imageServiceUrl}/${largeImageSizeUrl}${poster_path}`}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{original_title}</Title>
          <ReleaseDate>{parseDate(release_date)}</ReleaseDate>
          <Genres>{getGenres(genres)}</Genres>
          <Runtime>{`${runtime} min`}</Runtime>
          <Description>{overview}</Description>
        </ContentWrapper>
      </MovieWrapper>
      <FeaturedCrew crew={crew && crew.slice(0, 6)} />
      <TopBilledCast cast={cast && cast.slice(0, 7)} />
    </>
  );
};

Movie.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default Movie;
