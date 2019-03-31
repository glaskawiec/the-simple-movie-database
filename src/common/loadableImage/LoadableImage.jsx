import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import noImageDesktop from '../../resources/images/no-image-desktop.svg';
import noImageMobile from '../../resources/images/no-image-mobile.svg';
import LoadableImageStyled from './LoadableImageStyled';

const LoadableImage = React.memo(({ src, onClick }) => {
  const isMobile = window.innerWidth <= 768;
  const noImageSrc = isMobile ? noImageMobile : noImageDesktop;
  const [showedImageSrc, setShowedImageSrc] = useState(noImageSrc);

  useEffect(() => {
    if (!src) {
      return () => ({});
    }
    const img = new Image();
    img.onload = () => setShowedImageSrc(src);
    img.onerror = () => setShowedImageSrc(noImageSrc);
    img.src = src;
    return () => {
      img.onload = null;
      img.onerror = null;
    };
  });
  return <LoadableImageStyled onClick={onClick} src={showedImageSrc} />;
});

LoadableImage.propTypes = {
  src: PropTypes.string,
  onClick: PropTypes.func,
};

LoadableImage.defaultProps = {
  src: null,
  onClick: null,
};

export default LoadableImage;
