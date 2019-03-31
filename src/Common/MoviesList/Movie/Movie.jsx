import React from 'react';
import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import { withRouter } from 'react-router-dom';
import MovieWrapper from './MovieWrapper';
import ContentWrapper from './ContentWrapper';
import ImageWrapper from './ImageWrapper';
import Title from './Title';
import Description from './Description';
import MetaInformation from './MetaInformation';
import GetMoreInformation from './GetMoreInformation';
import Row from '../../Row';
import LoadableImage from '../../LoadableImage/LoadableImage';
import slugify from '../../../utils/slugify';

const Movie = React.memo(({
  title,
  metaInformation,
  description,
  posterSrc,
  history,
  id,
}) => {
  const onGetMoreInformationClick = () => {
    history.push({ pathname: (`/movie/${id}/${slugify(title)}`) });
  };

  return (
    <MovieWrapper>
      <Row>
        <ImageWrapper>
          <LoadableImage
            onClick={onGetMoreInformationClick}
            src={posterSrc}
          />
        </ImageWrapper>
        <ContentWrapper>
          <Title onClick={onGetMoreInformationClick}>{title}</Title>
          <MetaInformation>{metaInformation}</MetaInformation>
          <Description>
            {description}
          </Description>
          <GetMoreInformation
            onClick={onGetMoreInformationClick}
          >
            {'Get more information'}
          </GetMoreInformation>
        </ContentWrapper>
      </Row>
    </MovieWrapper>
  );
});

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  metaInformation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  posterSrc: PropTypes.string,
  history: ReactRouterPropTypes.history.isRequired,
};

Movie.defaultProps = {
  posterSrc: null,
};

export default withRouter(Movie);
