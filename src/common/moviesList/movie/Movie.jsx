import React from 'react';
import PropTypes from 'prop-types';
import MovieWrapper from './MovieWrapper';
import ContentWrapper from './ContentWrapper';
import ImageWrapper from './ImageWrapper';
import Title from './Title';
import Description from './Description';
import MetaInformation from './MetaInformation';
import GetMoreInformation from './GetMoreInformation';
import Row from '../../Row';
import LoadableImage from '../../loadableImage/LoadableImage';

const Movie = React.memo(({
  title,
  onClick,
  metaInformation,
  description,
  posterSrc,
}) => (
  <MovieWrapper>
    <Row>
      <ImageWrapper>
        <LoadableImage
          onClick={onClick}
          src={posterSrc}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Title onClick={onClick}>{title}</Title>
        <MetaInformation>{metaInformation}</MetaInformation>
        <Description>
          {description}
        </Description>
        <GetMoreInformation
          onClick={onClick}
        >
          {'Get more information'}
        </GetMoreInformation>
      </ContentWrapper>
    </Row>
  </MovieWrapper>
));

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  metaInformation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterSrc: PropTypes.string,
};

Movie.defaultProps = {
  posterSrc: null,
};

export default Movie;
