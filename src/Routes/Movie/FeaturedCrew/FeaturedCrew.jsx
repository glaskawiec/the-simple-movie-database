import React from 'react';
import PropTypes from 'prop-types';
import FeaturedCrewWrapper from './FeaturedCrewWrapper';
import Heading from '../../../Common/Heading';
import Function from './Function';
import Name from './Name';
import ProfileNoImage from './ProfileNoImage';
import ProfilesWrapper from './ProfilesWrapper';

const FeaturedCrew = ({ crew }) => {
  if (!crew) {
    return null;
  }
  console.log(crew);
  return (
    <FeaturedCrewWrapper>
      <Heading>Featured Crew</Heading>
      <ProfilesWrapper>
        {crew.map(crewMember => (
          <ProfileNoImage>
            <Name>{crewMember.name}</Name>
            <Function>{crewMember.job}</Function>
          </ProfileNoImage>
        ))}
      </ProfilesWrapper>
    </FeaturedCrewWrapper>
  );
};


FeaturedCrew.propTypes = {
  crew: PropTypes.object.isRequired,
};

export default FeaturedCrew;
