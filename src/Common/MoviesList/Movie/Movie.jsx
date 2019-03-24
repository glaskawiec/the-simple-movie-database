import React from 'react';
import PropTypes from 'prop-types';
import MovieWrapper from './MovieWrapper';
import ContentWrapper from './ContentWrapper';
import ImageWrapper from './Image/ImageWrapper';
import Title from './Title';
import Description from './Description';
import MetaInformation from './MetaInformation';
import GetMoreInformation from './GetMoreInformation';
import Row from '../Row';
import Image from './Image/Image';

const Movie = ({
  title, metaInformation, description, posterSrc,
}) => (
  <MovieWrapper>
    <Row>
      <ImageWrapper>
        <Image
          alt={title}
          src={posterSrc}
        />
      </ImageWrapper>
      <ContentWrapper>
        <Title>{title}</Title>
        <MetaInformation>{metaInformation}</MetaInformation>
        <Description>
          {description}
        </Description>
        <GetMoreInformation>Get more information</GetMoreInformation>
      </ContentWrapper>
    </Row>
  </MovieWrapper>
);

Movie.propTypes = {
  title: PropTypes.string.isRequired,
  metaInformation: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  posterSrc: PropTypes.string.isRequired,
};

export default Movie;
