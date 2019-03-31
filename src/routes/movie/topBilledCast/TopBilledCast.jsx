import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../config';
import TopBilledCastWrapper from './TopBilledCastWrapper';
import Heading from '../../../common/Heading';
import Role from './Role';
import Name from './Name';
import LoadableImage from '../../../common/loadableImage/LoadableImage';
import ProfileImageWrapper from './ProfileImageWrapper';
import ProfilesCardsWrapper from './ProfilesCardsWrapper';
import ProfileCard from './ProfileCard';

const { imageServiceUrl, profileImageSizeUrl } = config;

const TopBilledCast = ({ data }) => {
  if (!data || data.length === 0) {
    return null;
  }

  const getProfileImageSource = (profilePath) => {
    if (!profilePath) {
      return null;
    }
    return `${imageServiceUrl}/${profileImageSizeUrl}${profilePath}`;
  };

  return (
    <TopBilledCastWrapper>
      <Heading>Top Billed Cast</Heading>
      <ProfilesCardsWrapper>
        {data.map(actor => (
          <ProfileCard key={actor.id}>
            <ProfileImageWrapper>
              <LoadableImage src={getProfileImageSource(actor.profile_path)} />
            </ProfileImageWrapper>
            <Name>{actor.name}</Name>
            <Role>{actor.character}</Role>
          </ProfileCard>
        ))}
      </ProfilesCardsWrapper>
    </TopBilledCastWrapper>
  );
};

TopBilledCast.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
};

TopBilledCast.defaultProps = {
  data: null,
};

export default TopBilledCast;
