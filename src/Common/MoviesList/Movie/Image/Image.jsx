import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ImageStyled from './ImageStyled';
import noImageDesktop from '../../../../resources/images/no-image-desktop.svg';
import noImageMobile from '../../../../resources/images/no-image-mobile.svg';

const Image = React.memo(({ src }) => {
  const [hadError, setHadError] = useState(false);
  const isMobile = window.innerWidth <= 768;

  const onError = () => {
    setHadError(true);
  };

  if (hadError || !src) {
    return (
      <ImageStyled src={isMobile ? noImageMobile : noImageDesktop} />
    );
  }

  return (
    <ImageStyled
      src={src}
      onError={onError}
    />
  );
});


Image.propTypes = {
  src: PropTypes.string,
};

Image.defaultProps = {
  src: null,
};

export default Image;
