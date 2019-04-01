import React, { useEffect, useState } from 'react';
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
import LoadingScreen from '../../common/loadingScreen/LoadingScreen';
import RouteWrapper from '../../common/RouteWrapper';
import { requestApi, requestClear, requestError } from '../../flux/actions/requests';
import { requestsIds } from '../../flux/reducers/requests';
import ErrorMessage from '../../common/errorMessage/ErrorMessage';
import jsonToModel from '../../utils/jsonToModel';
import movieDetailsModel from '../../models/movieDetails';
import movieCreditsModel from '../../models/movieCredits';

const { imageServiceUrl, largeImageSizeUrl, mobileImageSizeUrl } = config;

const Movie = ({ match }) => {
  const { id } = match.params;
  const { state, dispatch } = useHoux();

  const {
    isPending: isDetailsRequestPending,
    hadError: isDetailsRequestHadError,
  } = state.requests.details;

  const {
    isPending: isCreditsRequestPending,
    hadError: isCreditsRequestHadError,
  } = state.requests.credits;

  const hadError = isCreditsRequestHadError || isDetailsRequestHadError;
  const isLoading = isDetailsRequestPending || isCreditsRequestPending;

  const [detailsData, setDetailsData] = useState(
    {
      title: '',
      releaseDate: '',
      genres: '',
      runtime: '',
      description: '',
      posterPath: null,
    },
  );
  const [creditsData, setCreditsData] = useState({
    crew: [],
    cast: [],
  });

  useEffect(() => {
    window.scrollTo(0, 0);

    dispatch(requestApi(requestsIds.details, {
      endpoint: `/movie/${id}`,
    }, (rawData) => {
      try {
        setDetailsData(jsonToModel(rawData, movieDetailsModel));
      } catch (error) {
        dispatch(requestError(requestsIds.details, error));
      }
    }));

    dispatch(requestApi(requestsIds.credits, {
      endpoint: `/movie/${id}/credits`,
    }, (rawData) => {
      try {
        setCreditsData(jsonToModel(rawData, movieCreditsModel));
      } catch (error) {
        dispatch(requestError(requestsIds.credits, error));
      }
    }));
    return () => {
      dispatch(requestClear(requestsIds.details));
      dispatch(requestClear(requestsIds.credits));
    };
  }, [id]);

  const getPosterSource = (posterPath) => {
    const isMobile = window.innerWidth <= 768;
    if (posterPath) {
      return `${imageServiceUrl}/${isMobile ? mobileImageSizeUrl : largeImageSizeUrl}${posterPath}`;
    }
    return null;
  };

  if (isLoading) {
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
            src={getPosterSource(detailsData.posterPath)}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Title>{detailsData.title}</Title>
          <ReleaseDate>{detailsData.releaseDate}</ReleaseDate>
          <Genres>{detailsData.genres}</Genres>
          <Runtime>{detailsData.runtime}</Runtime>
          <Description>{detailsData.description}</Description>
        </ContentWrapper>
      </MovieWrapper>
      <FeaturedCrew data={creditsData.crew} />
      <TopBilledCast data={creditsData.cast} />
    </RouteWrapper>
  );
};

Movie.propTypes = {
  match: ReactRouterPropTypes.match.isRequired,
};

export default Movie;
