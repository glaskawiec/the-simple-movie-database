import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import ToggleThumb from './ToggleThumb';
import ToggleTrackX from './ToggleTrackX';
import Toggle from './Toggle';
import ToggleTrack from './ToggleTrack';
import ToggleTrackCheck from './ToggleTrackCheck';
import { appContext } from '../../App';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';

const ThemeToggle = ({ isMobile }) => {
  const [isChecked, setIsChecked] = useState(false);
  const { setTheme } = useContext(appContext);

  const onChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      setTheme('light');
    } else {
      setTheme('dark');
    }
  };

  return (
    <Toggle
      isMobile={isMobile}
      onClick={onChange}
    >
      <ToggleTrack>
        <ToggleTrackCheck
          isChecked={isChecked}
        >
          <MoonIcon />
        </ToggleTrackCheck>
        <ToggleTrackX
          isChecked={isChecked}
        >
          <SunIcon />
        </ToggleTrackX>
      </ToggleTrack>
      <ToggleThumb
        isChecked={isChecked}
      />
    </Toggle>
  );
};

ThemeToggle.propTypes = {
  isMobile: PropTypes.bool,
};

ThemeToggle.defaultProps = {
  isMobile: false,
};

export default ThemeToggle;
