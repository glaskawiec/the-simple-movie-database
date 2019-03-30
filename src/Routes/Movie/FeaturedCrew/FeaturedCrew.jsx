import React from 'react';
import PropTypes from 'prop-types';
import FeaturedCrewWrapper from './FeaturedCrewWrapper';
import Heading from '../../../Common/Heading';
import Function from './Function';
import Name from './Name';
import ProfileNoImage from './ProfileNoImage';
import ProfilesWrapper from './ProfilesWrapper';

const FeaturedCrew = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }
  console.log(data);
  return (
    <FeaturedCrewWrapper>
      <Heading>Featured Crew</Heading>
      <ProfilesWrapper>
        {data.map(crewMember => (
          <ProfileNoImage key={crewMember.credit_id}>
            <Name>{crewMember.name}</Name>
            <Function>{crewMember.job}</Function>
          </ProfileNoImage>
        ))}
      </ProfilesWrapper>
    </FeaturedCrewWrapper>
  );
};


FeaturedCrew.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default FeaturedCrew;
