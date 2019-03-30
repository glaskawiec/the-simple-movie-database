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
import FeaturedCrew from './FeaturedCrew/FeaturedCrew';
import ReleaseDate from './ReleaseDate';
import parseDate from '../../utils/parseDate';
import LoadingScreen from '../../Common/LoadingScreen/LoadingScreen';
import RouteWrapper from '../../Common/RouteWrapper';

const { imageServiceUrl, largeImageSizeUrl, mobileImageSizeUrl } = config;
const Movie = ({ location }) => {
  const { id } = location;

  if (!id) {
    return null;
  }

  const { state, dispatch } = useHoux();
  const {
    poster_path,
    title,
    genres,
    runtime,
    overview,
    release_date,
  } = state.movie.details.request.responseData;

  const { crew, cast } = state.movie.credits.request.responseData;

  useEffect(() => {
    dispatch(movieRequestDetails({
      endpoint: `/movie/${id}`,
    }));

    dispatch(movieRequestCredits({
      endpoint: `/movie/${id}/credits`,
    }));
  }, [id]);

  const getGenres = (genresX = []) => genresX.map(genre => genre.name).join(', ');

  const { isPending: isDetailsRequestPending } = state.movie.details.request;
  const { isPending: isCreditsRequestPending } = state.movie.credits.request;

  const isDataRequestPending = isDetailsRequestPending || isCreditsRequestPending;

  const releaseDate = release_date ? parseDate(release_date) : 'Unknown release date';
  const normalizedGenres = getGenres(genres);
  const featuredCrew = crew && crew.slice(0, 6);
  const topBilledCast = cast && cast.slice(0, 6);
  const getRuntime = (runTime) => {
    if (runTime) {
      return `${runtime} min`;
    }

    return 'unknown runtime';
  };

  const getPosterSource = (posterPath) => {
    const isMobile = window.innerWidth <= 768;
    if (posterPath) {
      return `${imageServiceUrl}/${isMobile ? mobileImageSizeUrl : largeImageSizeUrl}${posterPath}`;
    }
    return null;
  };

  // @TODO: Add error handling
  if (isDataRequestPending && releaseDate && normalizedGenres && featuredCrew && topBilledCast) {
    return <LoadingScreen />;
  }

  return (
    <RouteWrapper>
      <MovieWrapper>
        <ImageWrapper>
          <LoadableImage
            src={getPosterSource(poster_path)}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{title}</Title>
          <ReleaseDate>{releaseDate}</ReleaseDate>
          <Genres>{normalizedGenres}</Genres>
          <Runtime>{getRuntime(runtime)}</Runtime>
          <Description>{overview}</Description>
        </ContentWrapper>
      </MovieWrapper>
      <FeaturedCrew data={featuredCrew} />
      <TopBilledCast data={topBilledCast} />
    </RouteWrapper>
  );
};

Movie.propTypes = {
  location: ReactRouterPropTypes.location.isRequired,
};

export default Movie;
