import React from 'react';
import PropTypes from 'prop-types';
import Heading from '../../../Common/Heading';
import Name from './Name';
import ProfileNoImage from './ProfileNoImage';
import ProfilesWrapper from './ProfilesWrapper';

const FeaturedCrew = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  return (
    <div>
      <Heading>Featured Crew</Heading>
      <ProfilesWrapper>
        {data.map(crewMember => (
          <ProfileNoImage key={crewMember.credit_id}>
            <Name>{crewMember.name}</Name>
            <p>{crewMember.job}</p>
          </ProfileNoImage>
        ))}
      </ProfilesWrapper>
    </div>
  );
};

FeaturedCrew.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

FeaturedCrew.defaultProps = {
  data: null,
};

export default FeaturedCrew;
