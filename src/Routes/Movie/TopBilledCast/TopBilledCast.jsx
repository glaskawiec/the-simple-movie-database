import React from 'react';
import PropTypes from 'prop-types';
import config from '../../../config';
import TopBilledCastWrapper from './TopBilledCastWrapper';
import Heading from '../../../Common/Heading';
import Role from './Role';
import Name from './Name';
import LoadableImage from '../../../Common/LoadableImage/LoadableImage';
import ProfileImageWrapper from './ProfileImageWrapper';
import ProfilesCardsWrapper from './ProfilesCardsWrapper';
import ProfileCard from './ProfileCard';

const { imageServiceUrl, profileImageSizeUrl } = config;

const TopBilledCast = ({ cast }) => {
  if (!cast) {
    return null;
  }

  return (
    <TopBilledCastWrapper>
      <Heading>Top Billed Cast</Heading>
      <ProfilesCardsWrapper>
        {cast.map(actor => (
          <ProfileCard>
            <ProfileImageWrapper>
              <LoadableImage src={`${imageServiceUrl}/${profileImageSizeUrl}${actor.profile_path}`} />
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
  cast: PropTypes.object.isRequired,
};

export default TopBilledCast;
