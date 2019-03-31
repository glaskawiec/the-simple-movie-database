import React, { useEffect } from 'react';
import ReactRouterPropTypes from 'react-router-prop-types';
import { useHoux } from 'houx';
import config from '../../config';
import LoadableImage from '../../common/loadableImage/LoadableImage';
import Title from './Title';
import MovieWrapper from './MovieWrapper';
import ImageWrapper from './ImageWrapper';
import ContentWrapper from './ContentWrapper';
import Genres from './Genres';
import Runtime from './Runtime';
import Description from './Description';
import TopBilledCast from './topBilledCast/TopBilledCast';
import FeaturedCrew from './featuredCrew/FeaturedCrew';
import ReleaseDate from './ReleaseDate';
import parseDate from '../../utils/parseDate';
import LoadingScreen from '../../common/loadingScreen/LoadingScreen';
import RouteWrapper from '../../common/RouteWrapper';
import { requestApi, requestClear } from '../../flux/actions/requests';
import { requestsIds } from '../../flux/reducers/requests';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';

const { imageServiceUrl, largeImageSizeUrl, mobileImageSizeUrl } = config;

const Movie = ({ match }) => {
  const { id } = match.params;
  const { state, dispatch } = useHoux();

  const {
    // eslint-disable-next-line camelcase
    poster_path,
    // eslint-disable-next-line camelcase
    release_date,
    title,
    genres,
    runtime,
    overview,
  } = state.requests.details.responseData;

  const { crew, cast } = state.requests.credits.responseData;

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(requestApi(requestsIds.details, {
      endpoint: `/movie/${id}`,
    }));

    dispatch(requestApi(requestsIds.credits, {
      endpoint: `/movie/${id}/credits`,
    }));
    return () => {
      dispatch(requestClear(requestsIds.details));
      dispatch(requestClear(requestsIds.credits));
    };
  }, [id]);

  const getGenres = (genresX = []) => genresX.map(genre => genre.name).join(', ');
  // eslint-disable-next-line camelcase
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

  const { isPending: isDetailsRequestPending, hadError } = state.requests.details;
  const { isPending: isCreditsRequestPending } = state.requests.credits;

  if (isDetailsRequestPending || isCreditsRequestPending) {
    return <LoadingScreen />;
  }

  if (hadError) {
    return <ErrorMessage />;
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
  match: ReactRouterPropTypes.match.isRequired,
};

export default Movie;