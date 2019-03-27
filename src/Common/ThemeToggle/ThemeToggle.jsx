import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useHoux } from 'houx';
import ToggleThumb from './ToggleThumb';
import ToggleTrackX from './ToggleTrackX';
import Toggle from './Toggle';
import ToggleTrack from './ToggleTrack';
import ToggleTrackCheck from './ToggleTrackCheck';
import MoonIcon from './MoonIcon';
import SunIcon from './SunIcon';
import { globalThemeChange } from '../../Flux/Actions/global';

const ThemeToggle = ({ isMobile }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [state, dispatch] = useHoux();

  const onChange = () => {
    setIsChecked(!isChecked);
    if (isChecked) {
      dispatch(globalThemeChange('light'));
    } else {
      dispatch(globalThemeChange('dark'));
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
